var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];

var food =
    ["Black beans", "Fried Cassava", "Ceaser Salad", "Barbecue picanha", "Cheese bread", "Fish Mokeka",
        "Chicken balls", "Pastels", "Carioca hotdogs", "Brigadeiro", "Chicken balls", "Corn bread",
        "Tapioca with cocanout", "Black beans", "Fried Cassava", "Ceaser Salad", "Barbecue picanha", "Cheese bread", "Fish Mokeka",
        "Chicken balls", "Pastels", "Carioca hotdogs", "Brigadeiro", "Chicken balls", "Corn bread",
        "Tapioca with cocanout", "Black beans", "Fried Cassava", "Ceaser Salad", "Barbecue picanha", "Cheese bread", "Fish Mokeka"];
var names = ["*Luana", " *Marilia ", "*Clara ",
    "*Gabriela", "*Ivan", "*Michael", "*Raphael",
    "*Fabio", "*Jennifer", "*Ligia",
    "*Andrea", "*Nanda  ", "*Milena", "*Jane",
    "*Caio", "*Juliana", "*Luna", "*Flavia",
    "*John", "*Walter", "*Stephen",
    "*Jorie", "*Renata", "*Daniel", "*Alex",
    "*Peter", "*Desire", "*Jace", "*Alessando",
    "*jorge", "*Megan", "*Luana"];

var choices = ["(Eat in)", "(Take out)", "(Eat in)", "(Take out)", "(Eat in)", "(Take out)", "(Eat in)",
    "(Take out)", "(Eat in)", "(Take out)", "(Eat in)", "(Take out)", "(Eat in)",
    "(Take out)", "(Eat in)", "(Take out)", "(Eat in)", "(Take out)", "(Eat in)",
    "(Take out)", "(Eat in)", "(Take out)", "(Eat in)", "(Take out)", "(Eat in)",
    "(Take out)", "(Eat in)", "(Take out)", "(Eat in)", "(Take out)", "(Eat in)",
    "(Take out)", "(Eat in)", "(Take out)"];

window.addEventListener("load", Main, false);

function Main() {

    addDaysOfWeekend();
    addDatesOfMonth();
    addfood();
    addnames();
    addchoices();

}
// days of the week head
function addDaysOfWeekend() {
    var i = 0;
    while (i < 7) {
        document.getElementsByTagName("th")[i].innerHTML = daysOfWeek[i];
        i++;
    }
}
// days of the Month P =0
function addDatesOfMonth() {
    var i = 1;
    var paragraphs = "";
    do {
        var tableCell = document.getElementById("01-" + i);
        paragraphs = tableCell.getElementsByTagName("p");
        paragraphs[0].innerHTML = i;
        i++;
    } while (i <= 31);
}
// Food of the Month P =1
function addfood() {
    var i = 1;
    var paragraphs = "";
    do {
        var tableCell = document.getElementById("01-" + i);
        paragraphs = tableCell.getElementsByTagName("p");
        paragraphs[1].innerHTML = food[i];
        i++;
    } while (i <= 31);
}
// Names of the Month P =2
function addnames() {
    var i = 1;
    var paragraphs = "";
    do {
        var tableCell = document.getElementById("01-" + i);
        paragraphs = tableCell.getElementsByTagName("p");
        paragraphs[2].innerHTML = names[i];
        i++;
    } while (i <= 31);

}
// Choices of the Month P =3
function addchoices() {
    var paragraphs = "";
    for (var i = 0; i < 31; i++) {
        var date = i + 1;
        var tableCell = document.getElementById("01-" + date);
        paragraphs = tableCell.getElementsByTagName("p");

        if (choices[i] === "Take out") {
            paragraphs[3].innerHTML = "Take out";
        }
        else {
            paragraphs[3].innerHTML = "";
        }

        paragraphs[3].innerHTML += choices[i];

    }
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}

var list = document.getElementById("navBar");
var a = document.createElement("a");
var li = document.createElement("li");
li.innerHTML = "Location";
a.appendChild(li);
list.appendChild(a);
a.href = "https://alorestaurant.com/";

