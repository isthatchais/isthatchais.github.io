fetch('https://api.openweathermap.org/data/2.5/weather?&id=5604473&units=imperial&APPID=351d4307eb914824188aee15570c17f5')
    
    .then((response) => response.json())
    
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('current-temp').textContent = jsObject.main.temp;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;
    
        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);
        
    });
