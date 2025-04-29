const mongoose = require('mongoose');
const path = require('path');
const cities = require('./cities')
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/yelpcamp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once('open', () => console.log('Database connected!'));

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 30) + 10;
        const camp = new Campground({
            author: '67ffc8c88165f6ba2721df6c',
            title: `${sample(descriptors)} ${sample(places)}`,
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio exercitationem error enim veniam vel perspiciatis dignissimos sapiente fugit ducimus fuga iusto quibusdam nostrum ipsum at ullam reprehenderit eveniet, quia dolores!",
            price: price,
            geometry: {
                type: 'Point',
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/doudiotxc/image/upload/v1745271133/YelpCamp/cd9tibh4ey96akfpoez5.jpg',
                    filename: 'YelpCamp/cd9tibh4ey96akfpoez5'
                },
                {
                    url: 'https://res.cloudinary.com/doudiotxc/image/upload/v1745271137/YelpCamp/jsxjyqqxld59fp9japkw.jpg',
                    filename: 'YelpCamp/jsxjyqqxld59fp9japkw'
                }
            ]
        })
        await camp.save();
    }
}

seedDB()
    .then(() => {
        (mongoose.connection.close())
    })