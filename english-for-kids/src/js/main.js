import '../styles/main.scss';
import Menu from './models/Menu';
import Router from './models/Router';
import Route from './models/Route';
import Card from './models/Card';
import 'bootstrap/js/dist/collapse';

const menu = new Menu();
const card = new Card();

const router = new Router([
  new Route('Main', true),
  new Route('ActionsetA', false),
  new Route('ActionsetB', false),
  new Route('AnimalsetA', false),
  new Route('AnimalsetB', false),
  new Route('Clothes', false),
  new Route('Emotions', false),
  new Route('Food', false),
  new Route('Movement', false),
]);


