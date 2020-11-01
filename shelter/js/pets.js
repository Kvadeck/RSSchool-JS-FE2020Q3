$(document).ready(function () {

    const jsonUrl = '../pets.json';

    const runLine = getPets(jsonUrl)

        .then((data) => {
            let firstShuffle = shuffle(data);
            let randomData = countCardByWidth(firstShuffle);

            petsDomInsert(randomData[0], 'pets-cards');
            popUpDomInsert(randomData[0], 'popUps');
            popupShowsUp();
            slickConfig();
            pagination(randomData);

        })
        .catch((error) => console.error(error));

    const slickConfig = () => {

        $('#pets-cards').slick({
            rows: 2,
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            prevArrow: $('#pets-cards-prev'),
            nextArrow: $('#pets-cards-next'),
            slidesToScroll: 4,
            draggable: false,
            swipe: false,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        rows: 3,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        rows: 3,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false
                    }
                },
            ]
        });
    }

    const countCardByWidth = function (data) {
        const widthPage = window.innerWidth;

        if (widthPage >= 1280) {
            return [mixPack(data, 6), 6]
        }
        else if (widthPage < 1280 && widthPage >= 768) {
            return [mixPack(data, 8, 2), 8]
        }
        else {
            return [mixPack(data, 16, 5), 16]
        }
    }

    const randPack = function (data) {

        let tempData = data.slice();

        let pack = [],
            i = data.length,
            j = 0;

        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            pack.push(tempData[j]);
            tempData.splice(j, 1);
        }
        return pack;
    }

    const mixPack = function (data, page, card) {
        let arr = [];
        for (let i = 0; i < page; i++) {
            arr.push((card !== undefined) ? randPack(data).slice(card) : randPack(data))
        }
        return flatten(arr);
    }

    const pagination = function (data) {

        const pagesAmount = data[1];
        let counter = 1;

        const start = function () {
            let elStart = $("#pets-cards-start");
            elStart.click(() => {
                if (!elStart.hasClass('slick-disabled')) {
                    $('#pets-cards-counter').text('1');
                    elStart.addClass('slick-disabled')
                    $("#pets-cards-end").removeClass('slick-disabled')
                    $('#pets-cards').slick('slickGoTo', 0);
                    counter = 1;
                }
            });
        }()

        const plus = function () {
            if (counter === pagesAmount) return counter;
            return ++counter
        }

        const minus = function () {
            if (counter === 1) return counter;
            return --counter
        }

        const next = function () {

            let nextEl = $("#pets-cards-next");

            nextEl.click(() => {
                $('#pets-cards-counter').text(plus());
                $("#pets-cards-start").removeClass('slick-disabled')
                if (nextEl.hasClass('slick-disabled')) {
                    $("#pets-cards-end").addClass('slick-disabled')
                }
            });

        }()

        const prev = function () {
            let prevEl = $("#pets-cards-prev");
            prevEl.click(() => {
                $('#pets-cards-counter').text(minus());
                $("#pets-cards-end").removeClass('slick-disabled')
                if (prevEl.hasClass('slick-disabled')) {
                    $("#pets-cards-start").addClass('slick-disabled')
                }
            });
        }()

        const end = function () {

            let elEnd = $("#pets-cards-end");
            elEnd.click(() => {
                if (!elEnd.hasClass('slick-disabled')) {
                    $('#pets-cards-counter').text(pagesAmount);
                    elEnd.addClass('slick-disabled')
                    $("#pets-cards-start").removeClass('slick-disabled')
                    $('#pets-cards').slick('slickGoTo', 99);
                    counter = pagesAmount;
                }
            });
        }()
    }

    return {
        mobileMenu: burgerMenu(),
    }
})




