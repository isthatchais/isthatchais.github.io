function pancakes() {
    var dayOfWeek = new Date().getDay();
    if (dayOfWeek == 5){
        document.getElementById("pancakes").style.display = "block";
    }
    else{
      document.getElementById("pancakes").style.display = "none";
    }
  }