// Attach one listener that will detect clicks on any of the <td>
const box = document.querySelectorAll("td");

box.forEach((x) => {
  x.addEventListener("click", function (e) {
    x.innerText = `${e.clientX}, ${e.clientY}`;
  });
});

// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click
