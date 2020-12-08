import { $, qSAll } from './Helpers';

export default class Animate {
  constructor() {
    this.game = $('cardsPoint');
  }

  startAnimation() {
    const { game } = this;
    game.classList.remove('show');
    // Timeout for add class show after a short time for animation
    setTimeout(() => {
      const cards = qSAll('.cards .card_animation');
      cards.forEach((el) => {
        el.classList.add('show');
      });
      game.classList.add('show');
    }, 300);
  }
}
