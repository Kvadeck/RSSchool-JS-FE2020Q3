import Render from './Render';

export default class Router {
  constructor(routes) {
    if (!routes) throw new Error('error: routes params are required');
    this.routes = routes;
    this.rootElem = document.getElementById('cardsPoint');
    this.switcher = document.getElementById('switcher');
    this.startGameBtn = document.getElementById('startGameBtn');
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
      for (let i = 0; i < r.length; i += 1) {
        const route = r[i];
        const active = this.isActiveRoute(window.location.hash.substr(1));
        if (active === route.categoryName) {
          this.goToRoute(route.categoryName);
        }
      }
    } else {
      for (let i = 0; i < r.length; i += 1) {
        const route = r[i];
        if (route.defaultRoute) {
          this.goToRoute(route.categoryName);
        }
      }
    }
  }

  goToRoute(categoryName) {
    const url = 'data.json';
    const xhttp = new XMLHttpRequest();

    const {
      switcher, rootElem, startGameBtn,
    } = this;

    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const obj = JSON.parse(this.responseText);

        const render = new Render(obj[categoryName]);
        this.renderClass = render;
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
    };
    xhttp.open('GET', url, true);
    xhttp.send();
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
