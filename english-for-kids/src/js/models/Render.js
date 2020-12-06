import { randomArrOfObj } from './Helpers';

export default class Render {
  constructor(data) {
    this.data = data;
  }

  renderPlayCard() {
    const template = [];
    randomArrOfObj(this.data).forEach((element) => {
      template.push(`
      <div class="col-12 col-md-4 col-lg-3 col-sm-6 mt-5 card_animation">
      <div class="card front">
          <div data-card-id="${element.word}" id='card-play' class='card-play__wrapp card-play-mode__wrapp'>
              <img class="card-img-top" src="./assets/images/${element.image}" alt="${element.word}">
              <svg data-card-id="${element.word}" id="game-icon" width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-check2-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path data-card-id="${element.word}" id="game-icon" fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
              <path data-card-id="${element.word}" id="game-icon" fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z"/>
              </svg>
            </div>
              <div class="card-body text-center">
                  <span>
                      <svg style="color:#28a745;" width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-patch-question" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z" />
                          <path fill-rule="evenodd" d="M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                      </svg>
                  </span>
              </div>
              <audio data-card-id="${element.word}" class = "audioGame" id="audio" src="${element.audioSrc}"></audio>
          </div>
      </div>
      `);
    });
    return template.join('');
  }

  renderCard() {
    const template = [];
    this.data.forEach((element) => {
      template.push(`
    <div class="col-12 col-md-4 col-lg-3 col-sm-6 mt-5 card_animation">
      <div class="card front">
          <div id='card-train' class='card-play__wrapp'>
            <img class="card-img-top" src="./assets/images/${element.image}" alt="${element.word}">
            <svg id="play-icon" width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-file-play" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path id="play-icon" fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/>
            <path id="play-icon" d="M6 10.117V5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43z"/>
            </svg>
          </div>
              <div class="card-body text-center">
                <span href="#" class="btn btn-primary btn-lg text-uppercase btn-text">${element.word}</span>
                <span id ="wordReverse" href="#" class="btn btn-primary btn-lg"><svg id="question-icon" width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-question-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path id="question-icon" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path id="question-icon" d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
              </svg></span>
              </div>
              <audio id="audio" src="${element.audioSrc}"></audio>
    </div>

    <div class='card back'>
      <div class='card-play__wrapp'>
      <img class="card-img-top" src="./assets/images/${element.image}" alt="${element.translation}">
      </div>
      <div class="card-body text-center">
        <span id ="wordReverse" href="#" class="btn btn-primary btn-lg text-uppercase">${element.translation}</span>
      </div>
    </div>

    </div>
      `);
    });
    return template.join('');
  }

  repeatWordBtn() {
    return '<button type="button" id="repeat-word" class="m-2 btn btn-outline-danger btn-lg">REPEAT</button>';
  }

  startBtn() {
    return '<button type="button" id="start-game" class="m-2 btn btn-outline-danger btn-lg">START GAME</button>';
  }

  winStar() {
    return '<img src="./assets/images/star-win.svg" alt="win star">';
  }

  loseStar() {
    return '<img src="./assets/images/star.svg" alt="lose star">';
  }

  renderMain() {
    const template = [];
    this.data.forEach((element) => {
      template.push(`
      <div class="col-12 col-md-4 col-lg-3 col-sm-6 mt-5 card_animation">
        <a href="${element.link}">
            <div class="card">
            <img class="card-img-top" src="./assets/images/${element.image}" alt="${element.name}">
                <div class="card-body text-center">
                    <a href="${element.link}" class="btn btn-primary btn-lg">${element.name}</a>
                </div>
            </div>
        </a>
    </div>
      `);
    });
    return template.join('');
  }
}
