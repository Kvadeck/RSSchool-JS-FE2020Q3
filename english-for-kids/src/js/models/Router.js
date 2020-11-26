export default class Router {
  constructor(routes) {
    if (!routes) throw new Error('error: routes params are required');
    this.name = routes;
    this.rootElem = document.getElementById('app');
  }

  init(scope, r) {
    (function () {
      window.addEventListener('hashchange', () => {
        scope.hasChanged(scope, r);
      });
    }(this, this.routes));
    this.hasChanged(this, this.routes);
  }

  //   isActiveRoute(hashedPath) {
  //     return hashedPath.replace('#', '') === this.name;
  //   }

  //   hasChanged(scope, r) {
  //     if (window.location.hash.length > 0) {
  //       for (let i = 0; i < r.length; i += 1) {
  //         const route = r[i];
  //         if (this.isActiveRoute(window.location.hash.substr(1))) {
  //           this.goToRoute(route.htmlName);
  //         }
  //       }
  //     } else {
  //       for (let i = 0; i < r.length; i += 1) {
  //         const route = r[i];
  //         if (route.default) {
  //           this.goToRoute(route.htmlName);
  //         }
  //       }
  //     }
  //   }

//   goToRoute(htmlName) {
//     (function () {
//       const url = `views/${htmlName}`;
//       const xhttp = new XMLHttpRequest();
//       xhttp.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 200) {
//           this.rootElem.innerHTML = this.responseText;
//         }
//       };
//       xhttp.open('GET', url, true);
//       xhttp.send();
//     }(this));
//   }
}
