$(document).ready(function () {

    const jsonUrl = './pets.json';

    const runLine = getPets(jsonUrl)
        .then((data) => {
            let randomData = shuffle(data)
            petsDomInsert(randomData, 'pets-slides', 2);
            popUpDomInsert(randomData, 'popUps', 2);
            popupShowsUp();
            slickConfig();
        })
        .catch((error) => console.error(error));

    const slickConfig = () => {
        $('#pets-slides').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            prevArrow: $('.slider-button'),
            nextArrow: $('.slider-button_rev'),
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
            ]
        });
    }

    return {
        mobileMenu: burgerMenu(),
    }

});