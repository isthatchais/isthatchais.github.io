const requestURL = 'https://isthatchais.github.io/final-project/data/templedata.json';
fetch(requestURL)
.then((response) => response.json())

.then((jsonObject) => {
  const temples = jsonObject["temples"];

  for (let i = 0; i < temples.length; i++) {
      if(temples[i].name === "Billings"){
        let close = temples[i].close;
        let billingsclose = document.createElement("section");
        for (let j = 0; j < close.length; j++){
          let closed = document.createElement("p");
          closed.textContent = close[j];
          billingsclose.appendChild(closed);
          document.querySelector('div.billingsclose').appendChild(billingsclose);
        }
    }
      if(temples[i].name === "Bismarck"){
        let close = temples[i].close;
        let bismarckclose = document.createElement("section");
        for (let j = 0; j < close.length; j++){
          let closed = document.createElement("p");
          closed.textContent = close[j];
          bismarckclose.appendChild(closed);
          document.querySelector('div.bismarckclose').appendChild(bismarckclose);
        }
    }
    /*if(temples[i].name === "Portland"){
        let close = temples[i].close;
        let portlandclose = document.createElement("section");
        for (let j = 0; j < close.length; j++){
          let closed = document.createElement("p");
          closed.textContent = close[j];
          portlandclose.appendChild(closed);
          document.querySelector('div.portlandclose').appendChild(portlandclose);
        }
    }
    if(temples[i].name === "St. Paul"){
        let close = temples[i].close;
        let stpaulclose = document.createElement("section");
        for (let j = 0; j < close.length; j++){
          let closed = document.createElement("p");
          closed.textContent = close[j];
          stpaulclose.appendChild(closed);
          document.querySelector('div.stpaulclose').appendChild(stpaulclose);
        }
    }*/
}
});