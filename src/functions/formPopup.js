export function projPopup(projs) {


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

    const form = document.querySelector("#projForm");
    form?.addEventListener("submit", (event) => {
        event.preventDefault();

        const title = document.getElementById("projTitle").value;
        const projSelector = document.getElementById("projects");

        // need to add to project List and display onto project UL
        projs.set(title, []);
        
        const newLi = document.createElement("li");
        newLi.textContent = title;

        projSelector.appendChild(newLi);

        form.reset();
        projPopup.style.display = "none";
    });

    return projs;
}