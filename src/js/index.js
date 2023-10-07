// Initialization for ES Users
// import { Input, Timepicker, initTE } from "tw-elements";

// initTE({ Input, Timepicker });

let carousel = document.querySelector("#carousel");
let list = document.querySelector(".list");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let listElems = document.querySelectorAll(".list li");

let offset = 0;

function nextFunc() {
  //сдвиг вправо
  if (window.innerWidth >= 1280) {
    return;
  }

  if (window.innerWidth < 1024) {
    offset += 372;
    if (offset > 744) {
      offset = 0;
    }
    list.style.left = -offset + "px";
  }
  if (1024 <= window.innerWidth) {
    offset += 372;
    if (offset > 372) {
      offset = 0;
    }
    list.style.left = -offset + "px";
  }
}

function prevFunc() {
  // сдвиг влево
  if (window.innerWidth >= 1280) {
    return;
  }
  if (window.innerWidth < 1024) {
    offset -= 372;
    if (offset < 0) {
      offset = 744;
    }
    list.style.left = -offset + "px";
  }

  if (1024 <= window.innerWidth) {
    offset -= 372;
    if (offset < 0) {
      offset = 372;
    }
    list.style.left = -offset + "px";
  }
}

next?.addEventListener("click", nextFunc);
prev?.addEventListener("click", prevFunc);

/////////////////////////////////////////////////

const openBtn = document.querySelector("#open-menu");
const closeBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#menu");

function stopScrollBy() {
  window.scrollTo({ top: 0 });
}

function openMenu() {
  openBtn.classList.toggle("hidden");
  const haveClass = openBtn.classList.contains("hidden");
  if (haveClass) {
    menu.classList.remove("hidden");
  }
  window.addEventListener("scroll", stopScrollBy);

  closeBtn.classList.toggle("hidden");
}

function closeMenu() {
  closeBtn.classList.toggle("hidden");
  const haveClass = closeBtn.classList.contains("hidden");
  if (haveClass) {
    menu.classList.add("hidden");
  }
  openBtn.classList.toggle("hidden");
  window.removeEventListener("scroll", stopScrollBy);
}

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
