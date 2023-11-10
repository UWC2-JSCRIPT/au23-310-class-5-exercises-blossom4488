// If an li element is clicked, toggle the class "done" on the <li>
const list = document.querySelectorAll("li");

list.forEach((x) => {
  x.addEventListener("click", () => {
    x.classList.toggle("done");
  });
});

// If a delete link is clicked, delete the li element / remove from the DOM
const linkClicked = document.querySelectorAll(".delete");
linkClicked.forEach((x) => {
  x.addEventListener("click", () => {
    const parentLi = x.closest("li");
    console.log(parentLi.remove());
  });
});

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function (e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName("input")[0];
  const text = input.value; // use this text to create a new <li>

  // Finish function here
  const newItem = document.createElement("li");
  newItem.innerHTML = `<span>${text}</span> <a class='delete'>Delete</a>`;
  document.querySelector(".today-list").appendChild(newItem);
  newItem.querySelector(".delete").addEventListener("click", () => {
    newItem.remove();
  });
  newItem.addEventListener("click", () => {
    newItem.classList.toggle("done");
  });
  input.value = "";
};

const addBtn = document.querySelector(".add-item");
addBtn.addEventListener("click", addListItem);
