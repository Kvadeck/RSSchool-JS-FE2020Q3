import { $, playAudio } from './Helpers';

export default class Card {
  constructor() {
    this.cardsPoint = $('cardsPoint');
    this.audio = $('audio');
    this.setEvents();
  }

  flipCard(e) {
    if (e.target.id === 'wordReverse' || e.target.id === 'question-icon') {
      const card = e.target.closest('.col-12');
      const front = card.querySelector('.front');
      const back = card.querySelector('.back');

      const all = [front, back];

      back.addEventListener('mouseleave', () => {
        all.forEach((el) => {
          el.classList.remove('active');
        });
      });
      all.forEach((el) => {
        el.classList.add('active');
      });
    }
  }

  playCard(e) {
    e.stopPropagation();
    const currItem = e.target;
    const closestItem = e.target.closest('.card');
    if (!closestItem) return;
    if (currItem.id === 'play-icon') {
      playAudio(closestItem.querySelector('audio'));
    } else if (currItem.id === 'card-train' && currItem.id !== 'wordReverse') {
      playAudio(closestItem.querySelector('audio'));
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
