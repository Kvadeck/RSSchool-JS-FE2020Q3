import Game from './Game';
import Render from './Render';
import { randomObj } from './Helpers';

export default class Menu {
  constructor() {
    const $ = function (id) { return document.getElementById(id); };
    const qS = function (id) { return document.querySelector(id); };

    this.trainText = $('train-text');
    this.playText = $('play-text');
    this.switcher = $('switcher');
    this.menu = $('menu');
    this.dismisButton = $('dismis-button');
    this.overlay = qS('.overlay');
    this.sidebar = qS('.sidebar');
    this.menuBar = qS('.menu');
    this.sidebarList = qS('.sidebar__list');
    this.listLinks = document.querySelectorAll('.sidebar__list-li');
    this.startGameBtn = document.getElementById('startGameBtn');
    this.repeatWordBtn = document.getElementById('repeatWordBtn');

    this.cardsPoint = document.getElementById('cardsPoint');
    this.audios = this.cardsPoint.querySelectorAll('.front');

    this.setEvents();
  }

  switcherCheck() {
    const cardButtons = document.querySelectorAll('.btn-primary');
    const {
      trainText, playText, menu, switcher,
    } = this;

    if (switcher.checked === true) {
      trainText.classList.toggle('text-dark');
      playText.classList.toggle('text-success');
      menu.classList.toggle('btn-outline-success');

      cardButtons.forEach((node) => {
        node.classList.toggle('btn-success');
      });
    } else {
      trainText.classList.remove('text-dark');
      playText.classList.remove('text-success');
      menu.classList.remove('btn-outline-success');
      cardButtons.forEach((node) => {
        node.classList.remove('btn-success');
      });
    }
  }

  activelinkHandle(e) {
    const active = document.querySelector('.activeLink');
    if (active) {
      active.classList.remove('activeLink');
    }
    e.currentTarget.classList.add('activeLink');
  }

  toogleMenu() {
    const { overlay, sidebar } = this;
    overlay.classList.add('active');
    sidebar.classList.add('active');
  }

  closeMenu() {
    const { overlay, sidebar } = this;
    overlay.classList.remove('active');
    sidebar.classList.remove('active');
  }

  setEvents() {
    const {
      switcher, menu, overlay, dismisButton, listLinks, menuBar,
      startGameBtn, repeatWordBtn, cardsPoint,
    } = this;

    const randAudio = [];

    const render = new Render();

    switcher.addEventListener('click', () => {
      this.switcherCheck();
    });

    menuBar.addEventListener('click', (e) => {
      if (e.target.id === 'start-game') {
        const audios = cardsPoint.querySelectorAll('.front');
        const random = randomObj(audios);
        random.forEach((el) => {
          randAudio.push(el.querySelector('.audioGame'));
        });

        const game = new Game(randAudio);
        game.playFirst();

        switcher.disabled = true;
        menu.disabled = true;
        startGameBtn.innerHTML = '';
        repeatWordBtn.innerHTML = render.repeatWordBtn();
      }
      if (e.target.id === 'repeat-word') {
        randAudio[0].play();
      }
    });

    menu.addEventListener('click', () => {
      this.toogleMenu();
    });

    overlay.addEventListener('click', () => {
      this.closeMenu();
    });

    dismisButton.addEventListener('click', () => {
      this.closeMenu();
    });

    listLinks.forEach((node) => {
      node.addEventListener('click', this.activelinkHandle);
    });
  }
}
