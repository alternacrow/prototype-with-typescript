interface Array<T> {
  clone(): Array<T>;
}

if (Array.prototype.clone === undefined) {
  Array.prototype.clone = function <T>(this: Array<T>): Array<T> {
    if (this == null) {
      throw new TypeError("Array.prototype.clone called on null or undefined");
    }

    const array = this.slice();

    return array;
  };
}
