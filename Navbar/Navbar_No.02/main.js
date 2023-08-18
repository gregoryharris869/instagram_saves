"use strict";

const navbar = document.querySelector("#navbar");

let lastScrollTop = 0;

window.addEventListener(
  "scroll",
  () => {
    let { scrollY } = window;
    if (scrollY > lastScrollTop) {
      navbar.classList.remove("visible");
    } else if (scrollY < lastScrollTop) {
      navbar.classList.add("visible");
    }
    lastScrollTop = scrollY <= 0 ? 0 : scrollY;
  },
  {
    passive: true,
  }
);
