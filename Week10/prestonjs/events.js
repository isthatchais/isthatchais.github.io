const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then((response) => response.json())

.then((jsonObject) => {
  const towns = jsonObject["towns"];
  let card = document.createElement("section");
  let span = document.createElement("span");
  for (let i = 0; i < towns.length; i++) {
      if (towns[i].name === "Preston"){
          let events = towns[i].events;
          for (let j = 0; j < events.length; j++){
            let event = document.createElement("p");
            event.textContent = events[j];
            span.appendChild(event);}
        card.appendChild(span);
        document.querySelector('div.card').appendChild(card);
}}
});
