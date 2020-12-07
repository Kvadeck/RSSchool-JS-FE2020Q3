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

    const render = new Render();

    cardsPoint.addEventListener('click', (e) => {
      const currItem = e.target;
      const closestItem = e.target.closest('.card');
      e.stopPropagation();

      const winAudio = new Audio('./assets/audio/win.mp3');
      const loseAudio = new Audio('./assets/audio/lose.mp3');

      const winGameAudio = new Audio('./assets/audio/winGame.mp3');
      const loseGameAudio = new Audio('./assets/audio/loseGame.mp3');

      if (!closestItem) return;
      if (currItem.id === 'game-icon' || currItem.id === 'card-play') {
        const currId = currItem.dataset.cardId;
        const firstAudio = audioArr[0].dataset.cardId;

        if (currId === firstAudio) {
          const curCard = currItem.closest('.card');
          curCard.style.opacity = '0.2';
          curCard.style.pointerEvents = 'none';
          audioArr.shift();
          starLine.insertAdjacentHTML('afterbegin', `${render.winStar()}`);
          winAudio.play();
          setTimeout(() => { this.playAudio(audioArr[0]); }, 1000);

          if (!audioArr.length) {
            const starsArr = [];
            const stars = starLine.querySelectorAll('img');

            stars.forEach((el) => {
              starsArr.push(el.id);
            });

            const isLose = (element) => element === 'loseStar';

            if (starsArr.some(isLose)) {
              cardsPoint.classList.remove('row-cols-4');
              cardsPoint.classList.add('row-cols-1');
              cardsPoint.innerHTML = `${render.losePicture()}`;
              setTimeout(() => { loseGameAudio.play(); }, 1000);
              setTimeout(() => { window.location.href = './'; }, 5000);
            } else {
              cardsPoint.classList.remove('row-cols-4');
              cardsPoint.classList.add('row-cols-1');
              cardsPoint.innerHTML = `${render.winPicture()}`;
              setTimeout(() => { winGameAudio.play(); }, 1000);
              setTimeout(() => { window.location.href = './'; }, 3000);
            }
          }
        } else {
          starLine.insertAdjacentHTML('afterbegin', `${render.loseStar()}`);
          loseAudio.play();
        }
      }
    });
  }
}
