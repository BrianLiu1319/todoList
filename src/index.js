import "./style/style.css";

class Task {
  static uniqueID = 0;

  constructor(title, detail, date, priority = null) {
    this.id = ++Task.uniqueID;
    this.title = title;
    this.detail = detail;
    this.date = date;
    this.priority = priority;
  }

  addToUL() {
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

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");

  openBtn.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target == popup) {
      popup.style.display = "none";
    }
  });

  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
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