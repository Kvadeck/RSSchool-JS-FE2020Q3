export default class Render {
  constructor(data) {
    this.data = data;
  }

  renderCard() {
    const template = [];
    this.data.forEach((element) => {
      template.push(`
    <div class="col-12 col-md-4 col-lg-3 col-sm-6">
      <div class="card">
          <img class="card-img-top" src="./assets/images/${element.image}" alt="${element.word}">
          <div class="card-body text-center">
            <a href="#" class="btn btn-primary btn-lg">${element.word}</a>
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
