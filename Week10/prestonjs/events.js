const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then((response) => response.json())

.then((jsonObject) => {
  const towns = jsonObject["towns"];
  for (let i = 0; i < towns.length; i++) {
      if (towns[i].name === "Preston"){
          let events = towns[i].events;
          for (let c = 0; c < events.length; c++)
            let card = document.createElement("section");
            let span = document.createElement("span");
            let event = document.createElement("p");
            event.textContent = events[c];
            card.appendChild(span);
            span.appendChild(event);
            document.querySelector('div.card').appendChild(card);}
}}
});
