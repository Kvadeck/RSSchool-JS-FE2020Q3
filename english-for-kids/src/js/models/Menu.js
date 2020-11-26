export default class Menu {
  constructor() {
    this.trainText = document.getElementById('train-text');
    this.playText = document.getElementById('play-text');
    this.switcher = document.getElementById('switcher');
    this.menu = document.getElementById('menu');
    this.dismisButton = document.getElementById('dismis-button');
    this.overlay = document.querySelector('.overlay');
    this.sidebar = document.querySelector('.sidebar');

    this.sidebarList = document.querySelector('.sidebar__list');
    this.listLinks = document.querySelectorAll('.sidebar__list-li');
    this.cardButtons = document.querySelectorAll('.btn-primary');

    this.setEvents();
  }

  switcherCheck() {
    const {
      trainText, playText, menu, switcher, cardButtons,
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
      switcher, menu, overlay, dismisButton, listLinks,
    } = this;

    switcher.addEventListener('click', () => {
      this.switcherCheck();
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
