$(document).ready(function () {

    const dataPets = [
        {
            "id": 1,
            "name": "Jennifer",
            "img": "./assets/pets/pets-jennifer.png",
            "type": "Dog",
            "breed": "Labrador",
            "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
            "age": "2 months",
            "inoculations": ["none"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "id": 2,
            "name": "Sophia",
            "img": "./assets/pets/pets-sophia.png",
            "type": "Dog",
            "breed": "Shih tzu",
            "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
            "age": "1 month",
            "inoculations": ["parvovirus"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "id": 3,
            "name": "Woody",
            "img": "./assets/pets/pets-woody.png",
            "type": "Dog",
            "breed": "Golden Retriever",
            "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
            "age": "3 years 6 months",
            "inoculations": ["adenovirus", "distemper"],
            "diseases": ["right back leg mobility reduced"],
            "parasites": ["none"]
        },
        {
            "id": 4,
            "name": "Scarlett",
            "img": "./assets/pets/pets-scarlett.png",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
            "age": "3 months",
            "inoculations": ["parainfluenza"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "id": 5,
            "name": "Katrine",
            "img": "./assets/pets/pets-katrine.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
            "age": "6 months",
            "inoculations": ["panleukopenia"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "id": 6,
            "name": "Timmy",
            "img": "./assets/pets/pets-timmy.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
            "age": "2 years 3 months",
            "inoculations": ["calicivirus", "viral rhinotracheitis"],
            "diseases": ["kidney stones"],
            "parasites": ["none"]
        },
        {
            "id": 7,
            "name": "Freddie",
            "img": "./assets/pets/pets-freddie.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
            "age": "2 months",
            "inoculations": ["rabies"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "id": 8,
            "name": "Charly",
            "img": "./assets/pets/pets-charly.png",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
            "age": "8 years",
            "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
            "diseases": ["deafness", "blindness"],
            "parasites": ["lice", "fleas"]
        }
    ]

    const shuffleArray = arr => arr
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1]);

    const shuffledData = shuffleArray(dataPets);

    const slick = function () {
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

    const burger = function () {

        const overlayClose = function () {

            $(".overlay").click(function () {
                $("#burger").click();
            });
            
        }()

        const activeLinkBurgerClose = function () {
            $(".list__link_active").click(function () {
                $("#burger").click();
            });
        }()

        const burgerAction = function () {
            $("#burger").click(function () {
                $("#logo").toggleClass('hidden');
                $('html, body').toggleClass('scroll-lock');
                $('.overlay').toggleClass('visible');
                $('.header').toggleClass('header_absolute');
            });
        }()
    }

    const popUp = function () {

        const closePopUp = function () {
            $(".popup__button").click(function () {
                $(".popup").addClass("hidden");
                $(".popup").removeClass("visible");
                $('body').removeClass('scroll-lock');
            });
        }();

        const closeOverlay = function () {
            $('.popup, .popup__body').on('click', function (e) {
                if(e.target !== this) {
                    return
                }
                $(".popup__button").click();
            });
        }();

        const showPopUp = function () {
            $(".pets-card").click(function () {

                $('body').addClass('scroll-lock');

                let id = $(this).data('popid');
                let popup = $("#popUps").find(`[data-popid='${id}']`);
                popup.removeClass("hidden");

            });
        }()
    }

    const sliderDataInsert = function (data) {

        const insertedBlock = document.getElementById('pets-slides');

        if (data) {
            for (let i = 0; i < data.slice(2).length; i++) {
                let el = data[i];
                insertedBlock.insertAdjacentHTML('afterbegin', `
                <div class="pets-card" data-popId=${el.id}>
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

    const petsPopUpDataInsert = function (data) {

        const insertedBlock = document.getElementById('popUps');

        for (let i = 0; i < data.slice(2).length; i++) {
            let el = data[i];
            insertedBlock.insertAdjacentHTML('afterbegin',
                `<div class="popup hidden" data-popId=${el.id}>
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

    return {
        mobileMenu: burger(),
        sliderInsert: sliderDataInsert(shuffledData),
        slickStart: slick(),
        popupInsert: petsPopUpDataInsert(shuffledData),
        popUp: popUp(),
    }

});