export default class Route {
  constructor(categoryName, defaultRoute) {
    if (!categoryName) throw new Error('error: categoryName params are required');
    this.categoryName = categoryName;
    this.defaultRoute = defaultRoute;
  }
}
