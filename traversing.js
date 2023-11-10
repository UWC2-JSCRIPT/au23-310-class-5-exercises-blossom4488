// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector("body");
const mainTag = body.firstElementChild;
console.log(mainTag);

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector("ul");
const parent = ul.parentElement.parentElement;
console.log(parent);
// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector("p");
const thirdLi = p.previousElementSibling.lastElementChild;
console.log(thirdLi);
