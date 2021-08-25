export default class Categories {
  constructor() {
    this.categories = []
    this._subscribers = []
    this.addCategory = this.addCategory.bind(this)
  }

  subscribe(func) {
    this._subscribers.push(func)
  }

  notify() {
    this._subscribers.forEach((f) => f(this.categories))
  }

  addCategory(category) {
    if (category.length === 0) return
    this.categories.push(category)
    this.notify()
  }
}
