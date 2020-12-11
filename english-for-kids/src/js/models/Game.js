import Render from './Render';
import { $, playAudio } from './Helpers';
import winSound from '../../assets/audio/win.mp3';
import loseSound from '../../assets/audio/lose.mp3';
import winGame from '../../assets/audio/winGame.mp3';
import loseGame from '../../assets/audio/loseGame.mp3';

import constants from './Constants';

export default class Game {
  constructor(arr) {
    this.audioArr = arr;
    this.cardsPoint = $(constants.ids.cardsPoint);
    this.starLine = $(constants.ids.starLine);
    playAudio(this.audioArr.find((e) => e));
    this.setEvents();
  }

  createSound(file) {
    return new Audio(file).play();
  }

  setEvents() {
    const {
      cardsPoint, audioArr, starLine, createSound,
    } = this;
    const render = new Render();

    cardsPoint.addEventListener('click', (e) => {
      const currItem = e.target;
      const closestItem = e.target.closest(constants.classNames.card);
      e.stopPropagation();

      if (!closestItem) return;
      if (currItem.id === constants.ids.gameIcon || currItem.id === constants.ids.cardPlay) {
        const currId = currItem.dataset.cardId;
        const firstAudio = audioArr[0].dataset.cardId;

        if (currId === firstAudio) {
          const curCard = currItem.closest(constants.classNames.card);
          curCard.style.opacity = '0.2';
          curCard.style.pointerEvents = 'none';
          audioArr.shift();
          starLine.insertAdjacentHTML('afterbegin', `${render.winStar()}`);
          createSound(winSound);
          setTimeout(() => { playAudio(audioArr[0]); }, 1000);

          if (!audioArr.length) {
            const starsArr = [];
            const stars = starLine.querySelectorAll(constants.classNames.img);

            stars.forEach((el) => {
              starsArr.push(el.id);
            });

            const isLose = (element) => element === 'loseStar';

            if (starsArr.some(isLose)) {
              cardsPoint.classList.remove(constants.classNames.rowCols4);
              cardsPoint.classList.add(constants.classNames.rowCols1);
              cardsPoint.innerHTML = `${render.losePicture()}`;
              setTimeout(() => { createSound(loseGame); }, 1000);
              setTimeout(() => { window.location.href = './'; }, 5000);
            } else {
              cardsPoint.classList.remove(constants.classNames.rowCols4);
              cardsPoint.classList.add(constants.classNames.rowCols1);
              cardsPoint.innerHTML = `${render.winPicture()}`;
              setTimeout(() => { createSound(winGame); }, 1000);
              setTimeout(() => { window.location.href = './'; }, 3000);
            }
          }
        } else {
          starLine.insertAdjacentHTML('afterbegin', `${render.loseStar()}`);
          createSound(loseSound);
        }
      }
    });
  }
}
