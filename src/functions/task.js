export class Task {
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