import Render from './Render';
import Animation from './Animate';
import { $ } from './Helpers';
import dataJson from '../../data.json';

export default class Router {
  constructor(routes) {
    if (!routes) throw new Error('error: routes params are required');
    this.routes = routes;
    this.rootElem = $('cardsPoint');
    this.switcher = $('switcher');
    this.startGameBtn = $('startGameBtn');
    this.setEvents();
    this.init(this.routes);
  }

  init(r) {
    window.addEventListener('hashchange', () => {
      this.hasChanged(r);
    });
    this.hasChanged(this.routes);
  }

  isActiveRoute(hashedPath) {
    return hashedPath.replace('#', '');
  }

  hasChanged(r) {
    if (window.location.hash.length > 0) {
      const active = this.isActiveRoute(window.location.hash.substr(1));
      r.forEach((el) => {
        if (active === el.categoryName) {
          this.goToRoute(el.categoryName);
        }
      });
    } else {
      const find = r.find((el) => el.defaultRoute);
      this.goToRoute(find.categoryName);
    }
  }

  goToRoute(categoryName) {
    const {
      switcher, rootElem, startGameBtn,
    } = this;

    const render = new Render(dataJson[categoryName]);
    const animate = new Animation();
    animate.startAnimation();

    if (categoryName === 'Main') {
      rootElem.innerHTML = render.renderMain();
    } else if (switcher.checked === true) {
      rootElem.innerHTML = render.renderPlayCard();
      startGameBtn.innerHTML = render.startBtn();
    } else {
      startGameBtn.innerHTML = '';
      rootElem.innerHTML = render.renderCard();
    }
  }

  setEvents() {
    const {
      switcher, isActiveRoute,
    } = this;

    switcher.addEventListener('click', () => {
      const main = isActiveRoute(window.location.hash.substr(1));
      if (main === 'Main') return;
      this.init(this.routes);
    });
  }
}
