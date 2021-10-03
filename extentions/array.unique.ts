interface Array<T> {
  unique(): Array<T>;
}

if (Array.prototype.unique === undefined) {
  Array.prototype.unique = function <T>(this: Array<T>): Array<T> {
    if (this == null) {
      throw new TypeError("Array.prototype.unique called on null or undefined");
    }

    const array = [...new Set(this.slice())];

    return array;
  };
}
