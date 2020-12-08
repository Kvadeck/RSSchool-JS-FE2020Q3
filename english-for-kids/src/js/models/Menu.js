import Game from './Game';
import Render from './Render';
import {
  randomObj, $, qS, qSAll,
} from './Helpers';

export default class Menu {
  constructor() {
    this.trainText = $('train-text');
    this.playText = $('play-text');
    this.switcher = $('switcher');
    this.menu = $('menu');
    this.dismisButton = $('dismis-button');
    this.overlay = qS('.overlay');
    this.sidebar = qS('.sidebar');
    this.menuBar = qS('.menu');
    this.sidebarList = qS('.sidebar__list');
    this.listLinks = qSAll('.sidebar__list-li');
    this.cardsPoint = $('cardsPoint');
    this.audios = this.cardsPoint.querySelectorAll('.front');
    this.startGameBtn = $('startGameBtn');
    this.repeatWordBtn = $('repeatWordBtn');

    this.setEvents();
  }

  switcherCheck() {
    const cardButtons = qSAll('.btn-primary');
    const {
      trainText, playText, menu, switcher,
    } = this;

    const all = [
      { id: trainText, class: 'text-dark' },
      { id: playText, class: 'text-success' },
      { id: menu, class: 'btn-outline-success' },
    ];

    if (switcher.checked === true) {
      all.forEach((el) => {
        el.id.classList.add(el.class);
      });
      cardButtons.forEach((node) => {
        node.classList.add('btn-success');
      });
    } else {
      all.forEach((el) => {
        el.id.classList.remove(el.class);
      });
      cardButtons.forEach((node) => {
        node.classList.remove('btn-success');
      });
    }
  }

  activelinkHandle(e) {
    const active = qS('.activeLink');
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
