fetch('https://api.openweathermap.org/data/2.5/weather?&id=5607916&units=imperial&APPID=351d4307eb914824188aee15570c17f5')
    
    .then((response) => response.json())
    
    .then((jsObject) => {
    
        document.getElementById('currentTemp').textContent = Math.round(jsObject.main.temp);
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('windSpeed').textContent = Math.round(jsObject.wind.speed);
        document.getElementById('currently').textContent = jsObject.weather[0].description;
    
        doWindChill();
    });

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
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var d = new Date();
    var today = d.getDay();
    var hour = d.getHours();
    if (hour > 18){
        today = ((today + 1) %7);
    }
    var start = "";
    for (i = 0; i < 5; i++){
        start = days[today];
        today = ((today+1)%7)
        document.getElementById('day'+i.toString()).innerHTML = start.toString();
    }
    
fetch('https://api.openweathermap.org/data/2.5/forecast?&id=5607916&units=imperial&APPID=351d4307eb914824188aee15570c17f5')
        
    .then((response) => response.json())
        
    .then((jsObject) => {
        
        let count = 0
        for (let i = 0; i < (jsObject.list.length); i++) {
            if (jsObject.list[i].dt_txt.includes('18:00:00')){
                var imagesrc = 'https://openweathermap.org/img/wn/' + jsObject.list[i].weather[0].icon + '@2x.png';
                var desc = jsObject.list[i].weather[0].description;
                document.getElementById('weathericon'+count).setAttribute('src', imagesrc);
                document.getElementById('weathericon'+count).setAttribute('alt', desc);
                document.getElementById('temp'+count).textContent = Math.round(jsObject.list[i].main.temp);
                count++;
            }}  
     });