const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  const prophets = jsonObject["prophets"];
  for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let bday = document.createElement("p");
      let bplace = document.createElement("p");
      let image = document.createElement("img");
      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      bday.textContent ='Date of Birth: ' + prophets[i].birthdate;
      bplace.textContent ='Place of Birth: '+ prophets[i].birthplace;
      card.appendChild(h2);
      card.appendChild(bday);
      card.appendChild(bplace);
      card.appendChild(image);
      image.setAttribute('src', prophets[i].imageurl);
      image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + '-' + prophets[i].order); 
      document.querySelector('div.card').appendChild(card);
}
});