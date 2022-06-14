const inputButtons = document.querySelectorAll(".inputButton");
var selectedNumber = null;

for (const button of inputButtons) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    for (const innerButton of inputButtons) {
      innerButton.classList.remove("active");
    }
    e.target.classList.add("active");
    selectedNumber = Number(e.target.innerHTML);
  });
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!selectedNumber) return false;
  localStorage.setItem("selectedNumber", JSON.stringify(selectedNumber));
  window.location.assign("summary.html");
});
