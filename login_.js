var profile = {};

function ValidateUserName()
{
    var usernameInput = document.getElementById("username");
    var errorDiv = document.getElementById("UsernameError");

    try {
        if (usernameInput.value == /.{5}/.test(usernameInput.value)) {
            throw "Please, provide at least 5 characters";
        }
        usernameInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profile.username = usernameInput.value;
    }
    catch (msg) {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        usernameInput.style.background = "rgb(255,233,233)";
    }

}

function ValidateEmail() {
    var emailInput = document.getElementById("emailbox");
    var errorDiv = document.getElementById("emailError");
    emailInput.value = emailInput.value.toLowerCase();

    try {
        if (emailInput.value.search("@") === -1 || emailInput.value.lastIndexOf(".") === -1) {
            throw " Please, provide valid email!!";
        }
        emailInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profile.email = emailInput.value;
    }
    catch (msg) {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        emailInput.style.background = "rgb(255,233,233)";
    }

}
function CreateCookie() {
    var expiresDate = new Date();
    expiresDate.setDate(expiresDate.getDate() - 7);
    document.cookie = "username=" + encodeURIComponent(profile.username);
    document.cookie = "email=" + encodeURIComponent(profile.email);
    var cookieString = decodeURIComponent(document.cookie);
    var cookieArray = cookieString.split("; ");
    console.log(cookieArray);
    alert(document.cookie);
}
function setUpPages() {
    ValidateEmail();
    ValidateUserName();
    CreateCookie();

    if (profile.username > /.{4}/ && profile.email !== "") {
        window.open("home_page.html", "_self");
    }
}

document.getElementById("submit").addEventListener("load", setUpPages, false);