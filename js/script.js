let arrowmark = document.getElementById("arrowmark");
let xmark = document.getElementById("xmark");
let arrow = document.getElementById("arrow");
let thediv = document.getElementById("thediv");
let fun = document.querySelector(".dd");
let head = document.querySelector(".head");
let ar = document.querySelectorAll("#spa");

if (localStorage.getItem("isSmall") === "no") {
  min();
} else {
}

function min() {
  localStorage.setItem("isSmall", "no");
  xmark.classList.toggle("hide");
  fun.classList.toggle("fufu");
  thediv.classList.toggle("animation");
  ar.forEach((x) => {
    x.classList.toggle("none");
  });
  head.classList.toggle("small");
  arrowmark.classList.toggle("hide");
}
function max() {
  localStorage.setItem("isSmall", "yes");
  xmark.classList.toggle("hide");
  fun.classList.toggle("fufu");
  thediv.classList.toggle("animation");
  ar.forEach((x) => {
    x.classList.toggle("none");
  });
  head.classList.toggle("small");
  arrowmark.classList.toggle("hide");
}
