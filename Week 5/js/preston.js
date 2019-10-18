function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
}
document.getElementById('output').innerHTML = new Date().toLocaleDateString("en-US", options);
function pancakes() {
    var dayOfWeek = new Date().getDay();
    if (dayOfWeek == 5){
        document.getElementById("pancakes").style.display = "block";
    }
    else{
      document.getElementById("pancakes").style.display = "none";
    }
  }