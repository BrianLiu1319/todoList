import {Task} from "./task.js";

export function setUpPopup() {
  document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const openBtn = document.getElementById("openBtn");
    const closeBtn1 = document.getElementById("closeBtn1");



    openBtn.addEventListener("click", () => {
        popup.style.display = "flex";
    });

    closeBtn1.addEventListener("click", () => {
        popup.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target == popup) {
        popup.style.display = "none";
        }

    });

    const form = document.getElementById("taskForm");

    form?.addEventListener("submit", (event) => {
        event.preventDefault();

        const title = document.getElementById("title").value;
        const detail = document.getElementById("detail").value;
        const date = document.getElementById("date").value;
        const priority = document.getElementById("priority").checked;

        const newTask = new Task(title, detail, date, priority);
        newTask.addToUL();

        form.reset();
        popup.style.display = "none";
    });
    });
}