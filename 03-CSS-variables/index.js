const inputsEl = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );

  console.log(this.value);
}

inputsEl.forEach((input) => input.addEventListener("change", handleUpdate));
inputsEl.forEach((input) => input.addEventListener("mousemove", handleUpdate));
