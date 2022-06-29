export class MyObservable {
  handlers = []; // observers

  subscribe(fn) {
    this.handlers.push(fn);
  }

  unsubscribe(fn) {
    this.handlers = this.handlers.filter((item) => {
      if (item !== fn) {
        return item;
      }
    });
  }

  next(o) {
    this.handlers.forEach((item) => {
      item(o);
    });
  }
}
