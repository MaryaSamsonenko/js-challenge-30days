const panelsEl = document.querySelectorAll(".panel");
function toggleOpen() {
  this.classList.toggle("open");
}
function toggleActive(event) {
  if (event.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
panelsEl.forEach((panel) => panel.addEventListener("click", toggleOpen));
panelsEl.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
