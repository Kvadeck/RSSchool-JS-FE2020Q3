/* Basic Functionality */
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus'),
    date = document.getElementById('date'),
    setOfImgs = getFullDayImages(),
    weatherWrapper = document.querySelector('.weather-wrapper')

function showTime() {
    const dateNow = new Date(),
        dateDate = dateNow.getDate(),
        dayOfWeek = dateNow.getDay(),
        hours = dateNow.getHours(),
        minutes = dateNow.getMinutes(),
        seconds = dateNow.getSeconds(),
        month = dateNow.getMonth();

    time.innerHTML = `${getZeros(hours)}:${getZeros(minutes)}:${getZeros(seconds)}`
    date.innerHTML = `${getDayOfWeek(dayOfWeek)}, ${getZeros(dateDate)} ${getMonthOfYear(month)}`

    setTimeout(showTime, 1000)
}

function getZeros(n) {
    return (n < 10) ? `0${n}` : n
}

function setBgGreet() {
    const now = new Date()
    hour = now.getHours()
    if (hour < 6) {
        // Night
        greeting.textContent = 'Good Night, ';
    }
    else if (hour < 12) {
        // Morning
        greeting.textContent = 'Good Morning, ';
    }
    else if (hour < 18) {
        // Afternoon
        greeting.textContent = 'Good Afternoon, '
    }
    else {
        // Evening
        greeting.textContent = 'Good Evening, '
    }
}

function getName() {
    if (localStorage.getItem('name') === null || localStorage.getItem('name') === '') {
        name.textContent = '[Enter Name]'
    } else {
        name.textContent = localStorage.getItem('name')
    }
}

function setName(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText.trim())
            name.blur()
        }
    } else {
        localStorage.setItem('name', e.target.innerText.trim())
    }
}

function getFocus() {
    if (localStorage.getItem('focus') === null || localStorage.getItem('focus') === '') {
        focus.textContent = '[Enter Focus]'
    } else {
        focus.textContent = localStorage.getItem('focus')
    }
}

function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText.trim())
            focus.blur()
        }
    } else {
        localStorage.setItem('focus', e.target.innerText.trim())
    }
}

function enterName(e) {
    if (name.textContent === '[Enter Name]')
        name.textContent = ''
}

function enterFocus(e) {
    if (focus.textContent === '[Enter Focus]')
        focus.textContent = ''
}

function getDayOfWeek(n) {
    switch (n) {
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'
        case 0:
            return 'Sunday'
    }
}

function getMonthOfYear(n) {
    switch (n) {
        case 1:
            return 'February'
        case 2:
            return 'March'
        case 3:
            return 'April'
        case 4:
            return 'May'
        case 5:
            return 'June'
        case 6:
            return 'July'
        case 7:
            return 'August'
        case 8:
            return 'September'
        case 9:
            return 'October'
        case 10:
            return 'November'
        case 11:
            return 'December'
        case 0:
            return 'January'
    }
}

/* Run */
showTime()
setBgGreet()
getName()
getFocus()

name.addEventListener('keypress', setName)
name.addEventListener('blur', setName)
focus.addEventListener('keypress', setFocus)
focus.addEventListener('blur', setFocus)

name.addEventListener('blur', getName)
name.addEventListener('focus', enterName)
focus.addEventListener('focus', enterFocus)
focus.addEventListener('blur', getFocus)


/* Quote */
const blockquote = document.querySelector('blockquote')
const figcaption = document.querySelector('figcaption')
const quoteBtn = document.querySelector('.quoteBtn')

async function getQuote() {
    const randQuoteNumber = getRandomInt(1643)
    const url = `https://type.fit/api/quotes`
    const res = await fetch(url)
    const data = await res.json()
    blockquote.textContent = data[randQuoteNumber].text
    figcaption.textContent = data[randQuoteNumber].author
}
document.addEventListener('DOMContentLoaded', getQuote)
quoteBtn.addEventListener('click', getQuote)

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

/* Images */
/* 6 Images */
function getSetOfImages() {
    let imgArr = []
    while (imgArr.length < 6) {
        let number = getRandomInt(19)
        if (imgArr.indexOf(number) === -1) {
            imgArr.push(number)
        }
    }
    imgArr = imgArr.map(item => String(getZeros(item)))
    return imgArr
}
/* 4 Arrays of 6 Images */
function getFullDayImages() {
    let fullDayArr = []
    while (fullDayArr.length < 4) {
        let sixHoursSet = getSetOfImages()
        fullDayArr.push(sixHoursSet)
    }
    return fullDayArr
}

let i = 0

function set24BgGreet(i = 0) {
    const now = new Date()
    hours = now.getHours()
    let item = i ? hours + i : hours
    switch (item) {
        case 0:
            document.body.style.backgroundImage =
                `url(./assets/images/night/${setOfImgs[0][0]}.jpg)`
            break
        case 1:
            document.body.style.backgroundImage =
                `url(./assets/images/night/${setOfImgs[0][1]}.jpg)`
            break
        case 2:
            document.body.style.backgroundImage =
                `url(./assets/images/night/${setOfImgs[0][2]}.jpg)`
            break
        case 3:
            document.body.style.backgroundImage =
                `url(./assets/images/night/${setOfImgs[0][3]}.jpg)`
            break
        case 4:
            document.body.style.backgroundImage =
                `url(./assets/images/night/${setOfImgs[0][4]}.jpg)`
            break
        case 5:
            document.body.style.backgroundImage =
                `url(./assets/images/night/${setOfImgs[0][5]}.jpg)`
            break
        case 6:
            document.body.style.backgroundImage =
                `url(./assets/images/morning/${setOfImgs[1][0]}.jpg)`
            break
        case 7:
            document.body.style.backgroundImage =
                `url(./assets/images/morning/${setOfImgs[1][1]}.jpg)`
            break
        case 8:
            document.body.style.backgroundImage =
                `url(./assets/images/morning/${setOfImgs[1][2]}.jpg)`
            break
        case 9:
            document.body.style.backgroundImage =
                `url(./assets/images/morning/${setOfImgs[1][3]}.jpg)`
            break
        case 10:
            document.body.style.backgroundImage =
                `url(./assets/images/morning/${setOfImgs[1][4]}.jpg)`
            break
        case 11:
            document.body.style.backgroundImage =
                `url(./assets/images/morning/${setOfImgs[1][5]}.jpg)`
            break
        case 12:
            document.body.style.backgroundImage =
                `url(./assets/images/day/${setOfImgs[2][0]}.jpg)`
            break
        case 13:
            document.body.style.backgroundImage =
                `url(./assets/images/day/${setOfImgs[2][1]}.jpg)`
            break
        case 14:
            document.body.style.backgroundImage =
                `url(./assets/images/day/${setOfImgs[2][2]}.jpg)`
            break
        case 15:
            document.body.style.backgroundImage =
                `url(./assets/images/day/${setOfImgs[2][3]}.jpg)`
            break
        case 16:
            document.body.style.backgroundImage =
                `url(./assets/images/day/${setOfImgs[2][4]}.jpg)`
            break
        case 17:
            document.body.style.backgroundImage =
                `url(./assets/images/day/${setOfImgs[2][5]}.jpg)`
            break
        case 18:
            document.body.style.backgroundImage =
                `url(./assets/images/evening/${setOfImgs[3][0]}.jpg)`
            break
        case 19:
            document.body.style.backgroundImage =
                `url(./assets/images/evening/${setOfImgs[3][1]}.jpg)`
            break
        case 20:
            document.body.style.backgroundImage =
                `url(./assets/images/evening/${setOfImgs[3][2]}.jpg)`
            break
        case 21:
            document.body.style.backgroundImage =
                `url(./assets/images/evening/${setOfImgs[3][3]}.jpg)`
            break
        case 22:
            document.body.style.backgroundImage =
                `url(./assets/images/evening/${setOfImgs[3][4]}.jpg)`
            break
        case 23:
            document.body.style.backgroundImage =
                `url(./assets/images/evening/${setOfImgs[3][5]}.jpg)`
            break
    }
}
document.addEventListener('DOMContentLoaded', set24BgGreet())

function changeImage() {
    const now = new Date()
    hours = now.getHours()
    if (i < 23 - hours) {
        i++
    } else if (i === 23 - hours) {
        i = -hours
    }
    
    set24BgGreet(i)
    bgBtn.disabled = true
    setTimeout(function () { bgBtn.disabled = false }, 1000)
}

const bgBtn = document.querySelector('.bgBtn')
bgBtn.addEventListener('click', changeImage)

/* Weather */
const weatherIcon = document.querySelector('.weather-icon-wrapper')
const temperature = document.querySelector('.temperature')
const weatherDesc = document.querySelector('.weather-desc')
const weatherHumidity = document.querySelector('.humidity')
const weatherWind = document.querySelector('.wind')
const city = document.querySelector('.city-input')

async function getWeather() {
    const API_KEY = 'a5163f5e55376d613d9d607518cb87fa'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&appid=${API_KEY}&units=metric`

    const res = await fetch(url)
    const data = await res.json()

    if (!res.ok && city.textContent != '[Enter City]' && city.textContent != '') {
        weatherDesc.textContent = `Location not found`
        return
    }

    temperature.textContent = `${data.main.temp}°C`
    weatherDesc.textContent = data.weather[0].description
    weatherWind.textContent = `Wind: ${data.wind.speed} m/s`
    weatherHumidity.textContent = `Humidity: ${data.main.humidity} %`
    weatherIcon.innerHTML = `
        <img class="weather-icon"
        src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
        alt="weather-icon">
        `
}

function getCity() {
    if (localStorage.getItem('city') === null || localStorage.getItem('city') === '') {
        city.textContent = '[Enter City]'
    } else {
        city.textContent = localStorage.getItem('city')
    }
}

function setCity(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('city', e.target.innerText.trim())
            getWeather()
            city.blur()
        }
    } else {
        localStorage.setItem('city', e.target.innerText.trim())
    }
}

function enterCity(e) {
    if (city.textContent === '[Enter City]')
        city.textContent = ''
}

document.addEventListener('DOMContentLoaded', getWeather)
city.addEventListener('keypress', setCity)
city.addEventListener('blur', setCity)
city.addEventListener('blur', getCity)
city.addEventListener('focus', enterCity)

getCity()
