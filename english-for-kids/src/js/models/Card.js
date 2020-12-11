import { $, playAudio } from './Helpers';
import constants from './Constants';

export default class Card {
  constructor() {
    this.cardsPoint = $(constants.ids.cardsPoint);
    this.audio = $(constants.ids.audio);
    this.setEvents();
  }

  flipCard(e) {
    if (e.target.id === constants.ids.wordReverse || e.target.id === constants.ids.questionIcon) {
      const card = e.target.closest(constants.classNames.col12);
      const front = card.querySelector(constants.classNames.front);
      const back = card.querySelector(constants.classNames.back);

      const all = [front, back];

      back.addEventListener('mouseleave', () => {
        all.forEach((el) => {
          el.classList.remove(constants.classNames.active);
        });
      });
      all.forEach((el) => {
        el.classList.add(constants.classNames.active);
      });
    }
  }

  playCard(e) {
    e.stopPropagation();
    const currItem = e.target;
    const closestItem = e.target.closest(constants.classNames.card);
    if (!closestItem) return;
    if (currItem.id === constants.ids.playIcon) {
      playAudio(closestItem.querySelector(constants.ids.audio));
    } else if (currItem.id === constants.ids.cardTrain && currItem.id !== constants.ids.wordReverse) {
      playAudio(closestItem.querySelector(constants.ids.audio));
    }
  }

  setEvents() {
    const {
      cardsPoint, flipCard, playCard,
    } = this;

    cardsPoint.addEventListener('click', flipCard);
    cardsPoint.addEventListener('click', playCard);
  }
}
