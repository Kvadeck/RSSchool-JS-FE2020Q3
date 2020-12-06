import Render from './Render';

export default class Game {
  constructor(arr) {
    this.audioArr = arr;
    this.cardsPoint = document.getElementById('cardsPoint');
    this.starLine = document.getElementById('starLine');
    this.playFirst();
    this.setEvents();
  }

  playFirst() {
    this.playAudio(this.audioArr[0]);
  }

  playAudio(e) {
    if (!e) return;
    e.play();
  }

  setEvents() {
    const {
      cardsPoint, audioArr, starLine,
    } = this;

    cardsPoint.addEventListener('click', (e) => {
      const currItem = e.target;
      const closestItem = e.target.closest('.card');
      e.stopPropagation();
      const render = new Render();

      const winAudio = new Audio('./assets/audio/win.mp3');
      const loseAudio = new Audio('./assets/audio/lose.mp3');

      if (!closestItem) return;
      if (currItem.id === 'game-icon' || currItem.id === 'card-play') {
        const currId = currItem.dataset.cardId;
        const firstAudio = audioArr[0].dataset.cardId;

        if (currId === firstAudio) {
          const curCard = currItem.closest('.card');
          curCard.remove();
          audioArr.shift();
          starLine.insertAdjacentHTML('afterbegin', `${render.winStar()}`);
          winAudio.play();
          setTimeout(() => { this.playAudio(audioArr[0]); }, 1000);
        } else {
          starLine.insertAdjacentHTML('afterbegin', `${render.loseStar()}`);
          loseAudio.play();
          console.log('add wrong star');
        }
      }
    });
  }
}
