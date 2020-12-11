import Game from './Game';
import Render from './Render';
import {
  randomObj, $, qS, qSAll,
} from './Helpers';

import constants from './Constants';

export default class Menu {
  constructor() {
    this.trainText = $(constants.ids.trainText);
    this.playText = $(constants.ids.playText);
    this.switcher = $(constants.ids.switcher);
    this.menu = $(constants.ids.menu);
    this.dismisButton = $(constants.ids.dismisButton);
    this.overlay = qS(constants.classNames.overlay);
    this.sidebar = qS(constants.classNames.sidebar);
    this.menuBar = qS(constants.classNames.menu);
    this.sidebarList = qS(constants.classNames.sidebarList);
    this.listLinks = qSAll(constants.classNames.listLinks);
    this.cardsPoint = $(constants.ids.cardsPoint);
    this.audios = this.cardsPoint.querySelectorAll(constants.classNames.front);
    this.startGameBtn = $(constants.ids.startGameBtn);
    this.repeatWordBtn = $(constants.ids.repeatWordBtn);

    this.setEvents();
  }

  switcherCheck() {
    const cardButtons = qSAll(constants.classNames.btnPrimary);
    const {
      trainText, playText, menu, switcher,
    } = this;

    const all = [
      { id: trainText, class: constants.classNames.textDark },
      { id: playText, class: constants.classNames.textSuccess },
      { id: menu, class: constants.classNames.outlineSucess },
    ];

    if (switcher.checked === true) {
      all.forEach((el) => {
        el.id.classList.add(el.class);
      });
      cardButtons.forEach((node) => {
        node.classList.add(constants.classNames.btnSucess);
      });
    } else {
      all.forEach((el) => {
        el.id.classList.remove(el.class);
      });
      cardButtons.forEach((node) => {
        node.classList.remove(constants.classNames.btnSucess);
      });
    }
  }

  activelinkHandle(e) {
    const active = qS(constants.classNames.activeLink);
    if (active) {
      active.classList.remove(constants.classNames.activeLink);
    }
    e.currentTarget.classList.add(constants.classNames.activeLink);
  }

  toogleMenu() {
    const { overlay, sidebar } = this;
    overlay.classList.add(constants.classNames.active);
    sidebar.classList.add(constants.classNames.active);
  }

  closeMenu() {
    const { overlay, sidebar } = this;
    overlay.classList.remove(constants.classNames.active);
    sidebar.classList.remove(constants.classNames.active);
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
      if (e.target.id === constants.ids.startGame) {
        const audios = cardsPoint.querySelectorAll(constants.classNames.front);
        const random = randomObj(audios);
        random.forEach((el) => {
          randAudio.push(el.querySelector(constants.classNames.audioGame));
        });

        const game = new Game(randAudio);

        switcher.disabled = true;
        menu.disabled = true;
        startGameBtn.innerHTML = '';
        repeatWordBtn.innerHTML = render.repeatWordBtn();
      }
      if (e.target.id === constants.ids.repeatWord) {
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
