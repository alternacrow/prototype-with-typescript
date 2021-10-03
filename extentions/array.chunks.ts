interface Array<T> {
  chunks(size: number): Array<Array<T>>;
}

if (Array.prototype.chunks === undefined) {
  Array.prototype.chunks = function <T>(
    this: Array<T>,
    size: number
  ): Array<Array<T>> {
    if (this == null) {
      throw new TypeError("Array.prototype.chunks called on null or undefined");
    }

    return [...Array(Math.ceil(this.length / size))].map((_, index) => {
      return this.slice(index * size, (index + 1) * size);
    });
  };
}
