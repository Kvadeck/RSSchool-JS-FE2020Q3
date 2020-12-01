export default class Card {
  constructor() {
    this.cardsPoint = document.getElementById('cardsPoint');
    this.audio = document.getElementById('audio');
    this.menu = document.querySelector('.menu');
    this.setEvents();
  }

  playAudio(e) {
    const audio = e.querySelector('audio');
    return audio.play();
  }

  setEvents() {
    const {
      cardsPoint, menu,
    } = this;

    menu.addEventListener('click', (e) => {
      if (e.target.id === 'start-game') {
        console.log('kek');
      }
    });

    cardsPoint.addEventListener('click', (e) => {
      if (e.target.id === 'wordReverse' || e.target.id === 'question-icon') {
        const card = e.target.closest('.col-12');
        const front = card.querySelector('.front');
        const back = card.querySelector('.back');

        back.addEventListener('mouseleave', () => {
          front.classList.remove('active');
          back.classList.remove('active');
        });

        front.classList.add('active');
        back.classList.add('active');
      }
    });

    cardsPoint.addEventListener('click', (e) => {
      const currItem = e.target;
      const closestItem = e.target.closest('.card');
      if (!closestItem) return;

      if (currItem.id === 'game-icon' || currItem.id === 'card-play') {
        console.log(currItem.dataset.cardId);
      }

      if (currItem.id === 'play-icon') {
        this.playAudio(closestItem);
      } else if (currItem.id === 'card-train' && currItem.id !== 'wordReverse') {
        this.playAudio(closestItem);
      }
    });
  }
}
