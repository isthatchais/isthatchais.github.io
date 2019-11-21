var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
}
document.getElementById('output').innerHTML = new Date().toLocaleDateString("en-US", options);