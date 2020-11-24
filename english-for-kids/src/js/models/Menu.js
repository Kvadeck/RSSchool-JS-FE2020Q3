export default class Menu {
  constructor() {
    this.trainText = document.getElementById('train-text');
    this.playText = document.getElementById('play-text');
    this.switcher = document.getElementById('switcher');
    this.menu = document.getElementById('menu');
    this.overlay = document.querySelector('.overlay');

    this.setEvents();
  }

  isSwitcherCheck() {
    if (this.switcher.checked === true) {
      this.trainText.classList.toggle('text-dark');
      this.playText.classList.toggle('text-success');
      this.menu.classList.toggle('btn-outline-success');
    } else {
      this.trainText.classList.remove('text-dark');
      this.playText.classList.remove('text-success');
      this.menu.classList.remove('btn-outline-success');
    }
  }

  toogleMenu() {
    this.overlay.classList.toggle('active');
  }

  closeOverlay() {
    this.overlay.classList.remove('active');
  }

  setEvents() {
    this.switcher.addEventListener('click', () => {
      this.isSwitcherCheck();
    });

    this.menu.addEventListener('click', () => {
      this.toogleMenu();
    });

    this.overlay.addEventListener('click', () => {
      this.closeOverlay();
    });
  }
}
