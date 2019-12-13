const requestURL = 'https://isthatchais.github.io/final-project/data/templedata.json';
fetch(requestURL)
.then((response) => response.json())

.then((jsonObject) => {
  const temples = jsonObject["temples"];

  for (let i = 0; i < temples.length; i++) {
      if(temples[i].name == "Billings"){
        let close = temples[i].close;
        for (let j = 0; j < events.length; j++){
          let billingsclose = document.createElement("section");
          let billingsthisYear = document.createElement("p");
          let billingsnextYear = document.createElement("p");
          billingsthisYear.textContent = temples[i].closures2019;
          billingsnextYear.textContent = temples[i].closures2020;
          billingsclose.appendChild(billingsthisYear);
          billingsclose.appendChild(billingsnextYear);
          document.querySelector('div.billingsclose').appendChild(billingsclose);
      }
      
}
});