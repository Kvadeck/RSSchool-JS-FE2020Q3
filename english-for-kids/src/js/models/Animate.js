export default class Animate {
  constructor() {
    this.game = document.getElementById('cardsPoint');
    this.preloadAnimation();
  }

  preloadAnimation() {
    const { game } = this;
    game.classList.remove('show');
    setTimeout(() => {
      const cards = document.querySelectorAll('.cards .card_animation');
      for (let i = 0; i < cards.length; i += 1) {
        cards[i].classList.add('show');
      }

      game.classList.add('show');
    }, 300);
  }
}
