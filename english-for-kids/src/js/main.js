import '../styles/main.scss';
import Model from './models/Model';

const model = new Model('Webpack 5');
console.log(model.testString());

const body = document.querySelector('body');
const p = document.createElement('p');

const welcomeText = 'JavaScript Webpack 5 starter build for small front-end projects and SPA includes assets & code optimization. The build includes useful packages like webpack-dev-server, sass-loader, normalize-scss, image-minimizer, babel, eslint(airbnb) and others…';

p.textContent = welcomeText;
body.append(p);
