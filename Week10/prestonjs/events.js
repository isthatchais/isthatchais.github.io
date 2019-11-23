const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then((response) => response.json())

.then((jsonObject) => {
  const towns = jsonObject["towns"];
  
  for (let i = 0; i < towns.length; i++) {
      if (towns[i].name === "Preston"){
          let events = towns[i].events;
          for (let j = 0; j < events.length; j++){
            let event = document.createElement("p");
            let townEvent = document.createElement("section");
            let span = document.createElement("span");
            let image= document.createElement("img");
            event.textContent = events[j];
            span.appendChild(event);
            townEvent.appendChild(span);
            townEvent.appendChild(image);
            image.setAttribute('src', 'images/event' +j+ '.jpg');
            image.setAttribute('alt', + events[j]); 
            document.querySelector('div.townEvent').appendChild(townEvent);}
}}
});