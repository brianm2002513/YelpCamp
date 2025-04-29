document.querySelectorAll('.star-rating:not(.readonly) label').forEach(star => {
    const reviewText = document.querySelector('#reviewText');
    star.addEventListener('mouseover', function (e) {
        // this.style.transform = 'scale(1.2)';
        // setTimeout(() => {
        //     this.style.transform = 'scale(1)';
        // }, 200);
        switch (this.htmlFor) {
            case 'star1':
                reviewText.innerText = 'Not good';
                break;
            case 'star2':
                reviewText.innerText = 'Could\'ve been better';
                break;
            case 'star3':
                reviewText.innerText = 'OK';
                break;
            case 'star4':
                reviewText.innerText = 'Good';
                break;
            case 'star5':
                reviewText.innerText = 'Great';
                break;
            default:
                reviewText.innerText = 'Select your rating';
        }
    });
});