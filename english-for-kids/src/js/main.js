import '../styles/main.scss';
import Menu from './models/Menu';
import Router from './models/Router';
import Card from './models/Card';
import 'bootstrap/js/dist/collapse';

const menu = new Menu();
const card = new Card();

const router = new Router([
  { categoryName: 'Main', defaultRoute: true },
  { categoryName: 'ActionsetA' },
  { categoryName: 'ActionsetB' },
  { categoryName: 'AnimalsetA' },
  { categoryName: 'AnimalsetB' },
  { categoryName: 'Clothes' },
  { categoryName: 'Emotions' },
  { categoryName: 'Food' },
  { categoryName: 'Movement' },
]);
