export default class Render {
  constructor(data) {
    this.data = data;
  }

  renderCard() {
    const template = [];
    this.data.forEach((element) => {
      template.push(`
    <div class="col-12 col-md-4 col-lg-3 col-sm-6 mt-5">
      <div class="card front">
          <div class='card-play__wrapp'>
            <img class="card-img-top" src="./assets/images/${element.image}" alt="${element.word}">
            <svg id="play-icon" width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-file-play" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path id="play-icon" fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/>
            <path id="play-icon" d="M6 10.117V5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43z"/>
            </svg>
          </div>
              <div class="card-body text-center">
                <span href="#" class="btn btn-primary btn-lg text-uppercase">${element.word}</span>
                <span id ="wordReverse" href="#" class="btn btn-primary mx-2 btn-lg"><svg id="question-icon" width="1.3em" height="1.3em" viewBox="0 0 16 16" class="bi bi-question-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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

  renderMain() {
    const template = [];
    this.data.forEach((element) => {
      template.push(`
      <div class="col-12 col-md-4 col-lg-3 col-sm-6">
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
