const addItemsEl = document.querySelector(".add-items");
const itemsListEl = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(event) {
  event.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  populateList(items, itemsListEl);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
    <li>
    <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      }/>
    <label for="item${i}">${plate.text}</label>
    </li>`;
    })
    .join("");
}

function toggleDone(event) {
  if (!event.target.matches("input")) return;
  const el = event.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsListEl);
}

addItemsEl.addEventListener("submit", addItem);
itemsListEl.addEventListener("input", toggleDone);
populateList(items, itemsListEl);
