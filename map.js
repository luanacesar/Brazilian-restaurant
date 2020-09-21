var map;
window.addEventListener("load", Main, false);

function Main() {
    AddElementLocation();
    initMap();
}

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -8.0338650, lng: -34.8934680 }, zoom: 18 });
}


function AddElementLocation() {

var list = document.getElementById("navi");
var locations = document.createElement("a");
var link = document.createTextNode("Location");
locations.appendChild(link);
locations.href = "https://alorestaurant.com/";
list.appendChild(locations);

}



     


