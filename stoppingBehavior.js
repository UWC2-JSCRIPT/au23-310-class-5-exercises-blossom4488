// Do not change
document.getElementById("cat").addEventListener("click", () => {
  alert("meow!");
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
const moreInfo = document.getElementById("more-info");
moreInfo.addEventListener("click", function (e) {
  alert("Here's some more info");
  e.preventDefault();
});
// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"

const dog = document
  .getElementById("dog")
  .addEventListener("click", function (e) {
    alert("Bow Wow");
    e.stopPropagation();
  });
