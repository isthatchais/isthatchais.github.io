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