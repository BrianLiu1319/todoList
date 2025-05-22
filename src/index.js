import "./style/style.css";
import plus from "./imgs/plus.svg";
import plus2 from "./imgs/plus2.svg";



// button hover

console.log("hello!!");
const icon = document.querySelector(".panelTitle.add");

icon.addEventListener("mouseenter", () => {
  icon.src = plus2;
});

icon.addEventListener("mouseleave", () => {
  icon.src = plus;
});