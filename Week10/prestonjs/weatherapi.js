fetch('https://api.openweathermap.org/data/2.5/weather?&id=5604473&units=imperial&APPID=351d4307eb914824188aee15570c17f5')
    
    .then((response) => response.json())
    
    .then((jsObject) => {
    
        document.getElementById('currentTemp').textContent = Math.round(jsObject.main.temp);
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('windSpeed').textContent = Math.round(jsObject.wind.speed);
        document.getElementById('currently').textContent = jsObject.weather[0].description;
    
        
    });
