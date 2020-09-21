

//var list = document.getElementById("navitemp");
//var locations = document.createElement("a");
//var link = document.createTextNode("LOGIN");
//locations.appendChild(link);
//locations.href = "login.html";
//list.appendChild(locations);



function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("weather").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=8d25671c5721348952c1c640fcf80f4f", true);
    xhttp.send();
}