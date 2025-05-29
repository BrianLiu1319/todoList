import "./style/style.css";
import {setUpPopup} from "./functions/popup.js";

setUpPopup();

const projPopup = document.getElementById("ProjPopup");
const projBtn = document.getElementById("addProjBtn");
const closeBtn2 = document.getElementById("closeBtn2");


projBtn.addEventListener('click', () => {
  projPopup.style.display = "flex";
})

closeBtn2.addEventListener("click", () => {
    projPopup.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target == projPopup) {
    projPopup.style.display = "none";
    }

});


// let projs = new Map();



const form = document.querySelector("#projForm");
  form?.addEventListener("submit", (event) => {
      event.preventDefault();

      const title = document.getElementById("projTitle").value;
      const projSelector = document.getElementById("projects");

      // need to add to project List and display onto project UL
      // projs.set('title', []);
      
      const newLi = document.createElement("li");
      newLi.textContent = title;

      projSelector.appendChild(newLi);

      form.reset();
      projPopup.style.display = "none";
  });




/*
requirements:
- need project creation
- need buttons on home
- need persistence
- fix CSS then done !

*/