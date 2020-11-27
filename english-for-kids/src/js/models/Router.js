import Render from './Render';

export default class Router {
  constructor(routes) {
    if (!routes) throw new Error('error: routes params are required');
    this.routes = routes;
    this.rootElem = document.getElementById('cardsPoint');
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
    const rootEl = this.rootElem;
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const obj = JSON.parse(this.responseText);
        const render = new Render(obj[categoryName]);
        if (categoryName === 'Main') {
          rootEl.innerHTML = render.renderMain();
        } else {
          rootEl.innerHTML = render.renderCard();
        }
      }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
  }
}
