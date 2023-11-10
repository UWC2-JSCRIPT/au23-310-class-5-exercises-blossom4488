// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const secondHeading = document.getElementById("weather-head");
secondHeading.innerText = "February 10 Weather Forecast, Seattle";
// Change the styling of every element with class "sun" to set the color to "orange"
const sunny = document.querySelectorAll(".sun");
sunny.forEach((s) => {
  s.style.color = "orange";
});

// Change the class of the second <li> from to "sun" to "cloudy"
const sunTues = document.querySelector(".sun");
sunTues.classList.remove("sun");
sunTues.classList.add("cloudy");
