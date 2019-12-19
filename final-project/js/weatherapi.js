fetch('https://api.openweathermap.org/data/2.5/weather?&id=5640350&units=imperial&APPID=351d4307eb914824188aee15570c17f5')
    
    .then((response) => response.json())
    
    .then((jsObject) => {
    
        document.getElementById('bilcurrentTemp').textContent = Math.round(jsObject.main.temp);
        document.getElementById('bilhumidity').textContent = jsObject.main.humidity;
        document.getElementById('bilwindSpeed').textContent = Math.round(jsObject.wind.speed);
        document.getElementById('bilcurrently').textContent = jsObject.weather[0].description;
    
        doWindChillbil();
    });

    function doWindChillbil() {
        var temp = parseFloat(document.getElementById("bilcurrentTemp").textContent);
        var speed = parseFloat(document.getElementById("bilwindSpeed").textContent);
        if (temp <= 50 && speed >= 3){
            var chill = windChill(temp, speed);
            document.getElementById('bilwindChill').innerHTML = Math.round(chill);
        }
        else{
            document.getElementById('bilwindChill').innerHTML = "N/A";
        }
    }
    function windChill(tempF, speed) {
        var result = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
        return result;
    }

fetch('https://api.openweathermap.org/data/2.5/weather?&id=5688025&units=imperial&APPID=351d4307eb914824188aee15570c17f5')
    
    .then((response) => response.json())
    
    .then((jsObject) => {
    
        document.getElementById('biscurrentTemp').textContent = Math.round(jsObject.main.temp);
        document.getElementById('bishumidity').textContent = jsObject.main.humidity;
        document.getElementById('biswindSpeed').textContent = Math.round(jsObject.wind.speed);
        document.getElementById('biscurrently').textContent = jsObject.weather[0].description;
    
        doWindChillbis();
    });

    function doWindChillbis() {
        var temp = parseFloat(document.getElementById("biscurrentTemp").textContent);
        var speed = parseFloat(document.getElementById("biswindSpeed").textContent);
        if (temp <= 50 && speed >= 3){
            var chill = windChill(temp, speed);
            document.getElementById('biswindChill').innerHTML = Math.round(chill);
        }
        else{
            document.getElementById('biswindChill').innerHTML = "N/A";
        }
    }

fetch('https://api.openweathermap.org/data/2.5/weather?&id=5735724&units=imperial&APPID=351d4307eb914824188aee15570c17f5')
    
    .then((response) => response.json())
    
    .then((jsObject) => {
    
        document.getElementById('portcurrentTemp').textContent = Math.round(jsObject.main.temp);
        document.getElementById('porthumidity').textContent = jsObject.main.humidity;
        document.getElementById('portwindSpeed').textContent = Math.round(jsObject.wind.speed);
        document.getElementById('portcurrently').textContent = jsObject.weather[0].description;
    
        doWindChillport();
    });

    function doWindChillport() {
        var temp = parseFloat(document.getElementById("portcurrentTemp").textContent);
        var speed = parseFloat(document.getElementById("portwindSpeed").textContent);
        if (temp <= 50 && speed >= 3){
            var chill = windChill(temp, speed);
            document.getElementById('portwindChill').innerHTML = Math.round(chill);
        }
        else{
            document.getElementById('portwindChill').innerHTML = "N/A";
        }
    }

fetch('https://api.openweathermap.org/data/2.5/weather?&id=5039978&units=imperial&APPID=351d4307eb914824188aee15570c17f5')
    
    .then((response) => response.json())
    
    .then((jsObject) => {
    
        document.getElementById('stpcurrentTemp').textContent = Math.round(jsObject.main.temp);
        document.getElementById('stphumidity').textContent = jsObject.main.humidity;
        document.getElementById('stpwindSpeed').textContent = Math.round(jsObject.wind.speed);
        document.getElementById('stpcurrently').textContent = jsObject.weather[0].description;
    
        doWindChillstp();
    });

    function doWindChillstp() {
        var temp = parseFloat(document.getElementById("stpcurrentTemp").textContent);
        var speed = parseFloat(document.getElementById("stpwindSpeed").textContent);
        if (temp <= 50 && speed >= 3){
            var chill = windChill(temp, speed);
            document.getElementById('stpwindChill').innerHTML = Math.round(chill);
        }
        else{
            document.getElementById('stpwindChill').innerHTML = "N/A";
        }
    }