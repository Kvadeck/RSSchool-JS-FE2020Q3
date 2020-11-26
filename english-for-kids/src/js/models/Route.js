export default class Route {
  constructor(name, htmlName, defaultRoute) {
    if (!name || !htmlName) throw new Error('error: name and htmlName params are required');
    this.name = name;
    this.htmlName = htmlName;
    this.defaultRoute = defaultRoute;
  }
}
