$(document).ready(function () {

    const getPets = async () => {
        const url = "../pets.json";
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, received ${response.status}`);
        }
        return response.json();
    }

    const shuffledPasteData = getPets()
        .then((data) => {
            let randomData = shuffleArray(data)
            sliderDataInsert(randomData);
            petsPopUpDataInsert(randomData);
            popUp();
            slick();
        })
        .catch((error) => console.error(error));

    const shuffleArray = arr => arr
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1]);

    const slick = () => {
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

        $('.pets__cards').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            prevArrow: $('.slider-button'),
            nextArrow: $('.slider-button_rev'),
            slidesToScroll: 3,
        });

    }

    const burger = function () {

        const overlayClose = function () {
            $(".overlay").click(() => {
                $("#burger").click();
            });
        }()

        const activeLinkBurgerClose = function () {
            $(".list__link_active").click(() => {
                $("#burger").click();
            });
        }()

        const burgerAction = function () {
            $("#burger").click(() => {
                $("#logo").toggleClass('hidden');
                $('html, body').toggleClass('scroll-lock');
                $('.overlay').toggleClass('visible');
                $('.header').toggleClass('header_absolute');
            });
        }()
    }

    const sliderDataInsert = (data) => {
        const insertedBlock = document.getElementById('pets-slides');
        if (data) {
            for (let i = 0; i < data.slice(2).length; i++) {
                let el = data[i];
                insertedBlock.insertAdjacentHTML('afterbegin', `
                <div class="pets-card" data-id=${el.id}>
                <img src="${el.img}" alt="${el.breed}" class="pets-card__image">
                <div class="pets-card__content">
                    <h4 class="pets-card__title">
                    ${el.name}
                    </h4>
                    <button class="pets-card__button">Learn more</button>
                </div>
            </div>`)
            }
        } else {
            insertedBlock.insertAdjacentHTML('afterbegin', `No data`)
        }
    }

    const petsPopUpDataInsert = (data) => {

        const insertedBlock = document.getElementById('popUps');

        for (let i = 0; i < data.slice(2).length; i++) {
            let el = data[i];
            insertedBlock.insertAdjacentHTML('afterbegin',
                `<div class="popup hidden" data-popid=${el.id}>
                    <div class="popup__body">
                        <div class="popup__content">
                            <div class="photo-popup">
                                <div class="photo-popup__wrapper">
                                    <img src="${el.img}" alt="${el.breed}">
                                </div>
                            </div>
                            <div class="text-popup">
                                <div class="text-popup__wrapper">
                                    <h3 class="text-popup__title">${el.name}</h3>
                                    <h4 class="text-popup__subtitle">${el.breed}</h4>
                                    <h5 class="text-popup__description">${el.description}</h5>
                                    <ul class="text-popup__list">
                                        <li><b>Age:</b>${el.age}</li>
                                        <li><b>Inoculations:</b>${el.inoculations}</li>
                                        <li><b>Diseases:</b>${el.diseases}</li>
                                        <li><b>Parasites:</b>${el.parasites}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <button class="popup__button">
                            <img class="popup__button-image" src="./assets/cross.svg">
                        </button>
                    </div>
            </div>`
            );
        }
    }

    const popUp = function () {

        const closePopUp = function () {
            $(".popup__button").click(() => {
                $(".popup").addClass("hidden");
                $(".popup").removeClass("visible");
                $('body').removeClass('scroll-lock');
            });
        }();

        const closeOverlay = function () {
            $('.popup, .popup__body').on('click', (e) => {
                if (e.target !== this) { return; }
                $(".popup__button").click();
            });
        }();

        const showPopUp = function () {
            $('.pets-card').on('click', function () {
                $('body').addClass('scroll-lock');
                let id = $(this).data('id');
                let popup = $("#popUps").find(`[data-popid='${id}']`);
                popup.removeClass("hidden");
            });
        }()
    }


    return {
        mobileMenu: burger(),
    }

});