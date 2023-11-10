// When a user clicks the + element, the count should increase by 1 on screen.
let counter = 0;
const totalCount = () => {
  document.getElementById("counter").innerText = `${counter}`;
};
const updateCount = () => {
  if (counter >= 0) {
    totalCount();
  } else {
    counter = 0;
  }
};

const increaseNum = document.getElementById("plus");
increaseNum.addEventListener("click", () => {
  counter++;
  // console.log(counter);
  return updateCount();
});
// When a user clicks the – element, the count should decrease by 1 on screen.
const decreaseNum = document.getElementById("minus");
decreaseNum.addEventListener("click", () => {
  counter--;

  return updateCount();
});
