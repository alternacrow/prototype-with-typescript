interface Array<T> {
  random(): T | undefined;
}

if (Array.prototype.random === undefined) {
  Array.prototype.random = function <T>(this: Array<T>): T | undefined {
    if (this == null) {
      throw new TypeError("Array.prototype.random called on null or undefined");
    }

    if (this.length === 0) {
      return undefined;
    }

    return this[Math.floor(Math.random() * this.length)];
  };
}
