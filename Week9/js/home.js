function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
}
document.getElementById('output').innerHTML = new Date().toLocaleDateString("en-US", options);
function pancakes() {
    var dayOfWeek = new Date().getDay();
    if (dayOfWeek == 5){
        document.getElementById("pancakes").style.display = "block";
    }
    else{
      document.getElementById("pancakes").style.display = "none";
    }
  }
  function doWindChill() {
    var temp = parseFloat(document.getElementById("currentTemp").textContent);
    var speed = parseFloat(document.getElementById("windSpeed").textContent);
    if (temp <= 50 && speed >= 3){
        var chill = windChill(temp, speed);
        document.getElementById('windChill').innerHTML = Math.round(chill);
    }
    else{
        document.getElementById('windChill').innerHTML = "N/A";
    }
}
function windChill(tempF, speed) {
    var result = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
    return result;
}
let imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshold: 1,
    rootmargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    },imgOptions);
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }
  function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  const towns = jsonObject["towns"];
  for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Fish Haven" || "Preston" || "Soda Springs"){
      let card = document.createElement("section");
      let h3 = document.createElement("h3");
      let motto = document.createElement("i");
      let year = document.createElement("p");
      let population = document.createElement("p");
      let rain = document.createElement("p");
      let image = document.createElement("img");
      h3.textContent = towns[i].name;
      motto.textContent = towns[i].motto;
      year.textContent = 'Year Founded: ' + towns[i].yearFounded;
      population.textContent = 'Population: ' + towns[i].currentPopulation;
      rain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
      card.appendChild(h3);
      card.appendChild(motto);
      card.appendChild(year);
      card.appendChild(population);
      card.appendChild(rain);
      card.appendChild(image);
      image.setAttribute('src', towns[i].photo);
      image.setAttribute('alt', towns[i].name); 
      document.querySelector('div.card').appendChild(card);}
}
});