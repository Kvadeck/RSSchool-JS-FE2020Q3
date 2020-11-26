import '../styles/main.scss';
import Menu from './models/Menu';
import Router from './models/Router';
import Route from './models/Route';
import 'bootstrap/js/dist/collapse';

const menu = new Menu();

const router = new Router([new Route('home', 'home.html', true), new Route('about', 'about.html', true),
]);
