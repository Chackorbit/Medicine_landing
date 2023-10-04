// Initialization for ES Users
// import { Input, Timepicker, initTE } from "tw-elements";

// initTE({ Input, Timepicker });

let carousel = document.querySelector("#carousel");
let list = document.querySelector(".list");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let listElems = document.querySelectorAll(".list li");

/* конфигурация */
let width = 372; // ширина картинки
let count = 3; // видимое количество изображений

let position = 0; // положение ленты прокрутки

function prevFunc() {
  // сдвиг влево
  position += width * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0);
  list.style.marginLeft = position + "px";
}
function nextFunc() {
  position -= width * count;

  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + "px";
}

next.addEventListener("click", nextFunc);
prev.addEventListener("click", prevFunc);

/////////////////////////////////////////////////
