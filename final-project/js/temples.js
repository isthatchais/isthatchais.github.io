fetch("data/templedata.json")
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  const prophets = jsonObject["temples"];
  for (let i = 0; i < temples.length; i++) {
      if(name === "billings"){
          let billingsclose = document.createElement("section");
          let billingsthisYear = document.createElement("p");
          let billingsnextYear = document.createElement("p");
          billingsthisYear.textContent = temples[i].closures2019;
          billingsnextYear.textContent = temples[i].closures2020;
          bllingsclose.appendChild(billingsthisYear);
          bllingsclose.appendChild(billingsnextYear);
          document.querySelector('div.billingsclose').appendChild(billingsclose);
      }
      
}
});