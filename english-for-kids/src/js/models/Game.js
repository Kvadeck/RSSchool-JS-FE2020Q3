import { randomObj } from './Helpers';

export default class Game {
  constructor() {
    this.audioArr = [].slice();
    this.cardsPoint = document.getElementById('cardsPoint');
    this.audios = this.cardsPoint.querySelectorAll('.front');

    this.init();
    this.setEvents();
  }

  init() {
    const random = randomObj(this.audios);
    random.forEach((e) => {
      this.audioArr.push(e.querySelector('.audioGame'));
    });
    this.playAudio(this.audioArr[0]);
  }

  playAudio(e) {
    if (!e) return;
    e.play();
  }

  setEvents() {
    const {
      cardsPoint, audioArr,
    } = this;

    cardsPoint.addEventListener('click', (e) => {
      const currItem = e.target;
      const closestItem = e.target.closest('.card');
      e.stopPropagation();
      if (!closestItem) return;

      if (currItem.id === 'game-icon' || currItem.id === 'card-play') {
        const currId = currItem.dataset.cardId;
        const firstAudio = audioArr[0].dataset.cardId;

        if (currId === firstAudio) {
          const curCard = currItem.closest('.card');
          curCard.remove();
          audioArr.shift();
          console.log(audioArr);
          this.playAudio(audioArr[0]);
        } else {
          console.log('add wrong star');
        }
      }
    });
  }
}
