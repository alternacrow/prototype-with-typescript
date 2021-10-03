interface Array<T> {
  shuffle(): Array<T>;
}

if (Array.prototype.shuffle === undefined) {
  Array.prototype.shuffle = function <T>(this: Array<T>): Array<T> {
    if (this == null) {
      throw new TypeError(
        "Array.prototype.shuffle called on null or undefined"
      );
    }

    const array = this.slice();

    // Fisher-Yates
    for (let i = array.length - 1; i > 0; i--) {
      const r = Math.floor(Math.random() * (i + 1));
      [array[i], array[r]] = [array[r], array[i]];
    }

    return array;
  };
}
