import "./style/style.css";

import plus from "./imgs/plus.svg";
import plus2 from "./imgs/plus2.svg";



// button hover
// function buttonHover() {
//     const icon = document.querySelector(".panelTitle.add");

//     icon.addEventListener("mouseenter", () => {
//     icon.src = plus2;
//     });

//     icon.addEventListener("mouseleave", () => {
//     icon.src = plus;
//     });
// }

// buttonHover();


// need to make to do card :
/**
 * 
 *  To do card will have : subject, details , date, edit, delete, favorite
 * 
 * How to store by each project :
 * 
 * projects contains a list of projects :
 * 
 * projects = [[proj1], [proj2], ...]
 * 
 * each proj contains a list of tasks
 * 
 * 
 * Clicking Home buttons will display based on sorting (forEach projects) and create a list of projs to display
 */

class Task {
    static uniqueID = 0;

    constructor(title, detail, date, priority = null){
        this.id = ++Task.uniqueID;
        this.title = title;
        this.detail = detail;
        this.date = date;
        this.priority = priority;
    }

    addToUL(){
        const ul = document.querySelector('#todoList');
        const newCard = document.createElement("li");

        const cardDetails = document.createElement("div");
        const newTitle = document.createElement("div");
        const newDetail = document.createElement("div");

        newTitle.textContent = this.title;
        newDetail.textContent = this.detail;
        
        cardDetails.appendChild(newTitle);
        cardDetails.appendChild(newDetail);

        newCard.appendChild(cardDetails);

        ul.appendChild(newCard);
    }

}

const testTask1 = new Task(
    "Finish this planner",
    "really finish this planner",
    "add date module"
);

const testTask2 = new Task(
    "Finish this planner",
    "really finish this planner",
    "add date module"
);

testTask1.addToUL();
testTask2.addToUL();

console.log(testTask2.id);


// let's work on create task first


// to delete : we need to search task by uniqueID and delete them

const popup = document.getElementById("popup");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Optional: close if clicking outside content
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});