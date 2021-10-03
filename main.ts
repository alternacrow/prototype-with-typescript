import "./extentions";

const array = [0, 1, 1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 9, 9];

const chunks = array.chunks(3);
console.log("chunks", chunks);

const cloned = array.clone();
console.log("clone", cloned);

const random = array.random();
console.log("random", random);

const shuffled = array.shuffle();
console.log("shuffle", shuffled);

const uniqued = array.unique();
console.log("unique", uniqued);
