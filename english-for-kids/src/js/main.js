import '../styles/main.scss';
import Model from './models/Model';
import Menu from './models/Menu';

const model = new Model('Webpack 5');
const menu = new Menu();

console.log(model.testString());
