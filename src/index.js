import "./style/style.css";
import plus from "./imgs/plus.svg";
import plus2 from "./imgs/plus2.svg";



// button hover
buttonHover = () => {
    const icon = document.querySelector(".panelTitle.add");

    icon.addEventListener("mouseenter", () => {
    icon.src = plus2;
    });

    icon.addEventListener("mouseleave", () => {
    icon.src = plus;
    });
}

buttonHover();

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

subjectSelector 

