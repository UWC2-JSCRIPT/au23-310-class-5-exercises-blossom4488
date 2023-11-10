// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>
const newLink = document.createElement("a");
const newLinkText = document.createTextNode("Buy Now!");
newLink.appendChild(newLinkText);
newLink.setAttribute("id", "cta");
const addElement = document.getElementsByTagName("main")[0];
addElement.appendChild(newLink);

// Access (read) the data-color attribute of the <img>,
// log to the console
const getImg = document.querySelector("img");
const getColor = getImg.dataset.color;
console.log(getColor);
// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"
const getListItem = document.getElementsByTagName("li")[2];
getListItem.classList.add("highlight");
// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
const main = document.querySelector("main");
const para = document.querySelector("p");
main.removeChild(para);
