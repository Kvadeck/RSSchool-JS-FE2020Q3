const getPets = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }
    return response.json();
}

const definePath = function () {
    const curPath = window.location.pathname;
    if (curPath.search(/pets/i) != -1) { return true; }
    return false;
};

const getImgPath = function () {
    let pathImg = './assets/pets/';
    if (definePath()) { return pathStr = '../assets/pets/' }
    return pathImg;
}

const shuffle = arr => arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);

const flatten = (arr) => arr
    .reduce((a, b) => a
        .concat(Array.isArray(b) ? flatten(b) : b), [])

const petsDomInsert = (data, id, slice) => {

    const insertedBlock = document.getElementById(id),
        pathStr = getImgPath();

    if (data) {
        for (let i = 0; i < data.slice(slice).length; i++) {
            let el = data[i];
            insertedBlock.insertAdjacentHTML('afterbegin', `
                <div onclick="showPopUp(this);" class="pets-card" data-id=${i}>
                <img src="${pathStr}${el.img}" alt="${el.breed}" class="pets-card__image">
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

const popUpDomInsert = (data, id, slice) => {

    const insertedBlock = document.getElementById(id),
        pathStr = getImgPath();

    for (let i = 0; i < data.slice(slice).length; i++) {
        let el = data[i];
        insertedBlock.insertAdjacentHTML('afterbegin',
            `<div class="popup hidden" data-popid=${i}>
        <div class="popup__body">
            <div class="popup__content">
                <div class="photo-popup">
                    <div class="photo-popup__wrapper">
                        <img src="${pathStr}${el.img}" alt="${el.breed}">
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
                    <img class="popup__button-image" src="${(definePath()) ? "../assets/cross.svg" : "./assets/cross.svg"}">
                        </button>
                    </div>
            </div>`
        );
    }
}

const burgerMenu = () => {

    const overlayClose = function () {
        $(".overlay").click(() => {
            $("#burger").click();
        });
    }()

    const activeLinkBurgerClose = function () {
        $(".list__link_active").click(() => {
            if ($('input.menu__trigger').prop('checked')) {
                $("#burger").click();
            }
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

const showPopUp = (id) => {
    $('body').addClass('scroll-lock');
    let thisId = $(id).data('id');
    let popup = $("#popUps").find(`[data-popid='${thisId}']`);
    popup.removeClass("hidden");
}

const popupShowsUp = function () {

    const closePopUp = function () {
        $(".popup__button").click(() => {
            $(".popup").addClass("hidden");
            $(".popup").removeClass("visible");
            $('body').removeClass('scroll-lock');
        });
    }();

    const closeOverlay = function () {
        $(".popup").on('click', (e) => {
            if (e.target.className === "popup__body" || e.target.className === "popup") {
                $(".popup__button").click();
            }
        });
    }();

}
