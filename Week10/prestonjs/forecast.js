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

fetch('https://api.openweathermap.org/data/2.5/forecast?&id=5604473&units=imperial&APPID=351d4307eb914824188aee15570c17f5')
    
    .then((response) => response.json())
    
    .then((jsObject) => {
    
        let count = 0
        for (let i = 0; i < (jsObject.list.length); i++) {
            let text = jsObject.list[i].dt_txt.split(" ");
            if (text[1] == '18:00:00'){
                var imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '@2x.png';
                var desc = jsObject.list[i].weather[0].description;
                document.getElementById('imagesrc').textContent = imagesrc;
                document.getElementById('weathericon'+count.toString()).setAttribute('src', imagesrc);
                document.getElementById('weathericon'+count.toString()).setAttribute('alt', desc);
                document.getElementById('temp'+count.toString()).textContent = jsObject.list[i].main.temp;
                count ++
            }}  
    });


        