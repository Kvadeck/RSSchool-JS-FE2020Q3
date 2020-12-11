import { $, qSAll } from './Helpers';
import constants from './Constants';

export default class Animate {
  constructor() {
    this.game = $(constants.ids.cardsPoint);
  }

  startAnimation() {
    const { game } = this;
    game.classList.remove('show');
    // Timeout for add class show after a short time for animation
    setTimeout(() => {
      const cards = qSAll(constants.classNames.cardAnimation);
      cards.forEach((el) => {
        el.classList.add(constants.classNames.show);
      });
      game.classList.add(constants.classNames.show);
    }, 300);
  }
}
