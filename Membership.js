var profile = {};



function ValidateEmail() {
    var emailInput = document.getElementById("emailbox");
    var errorDiv = document.getElementById("emailError");
    emailInput.value = emailInput.value.toLowerCase();



    try {
        if (emailInput.value.search("@") === -1 || emailInput.value.lastIndexOf(".") === -1) {
            throw " Provide valid email";
        }
        emailInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profile.email = emailInput.value;
        document.getElementById("profileEmail").innerHTML = profile.email;
        document.getElementById("profile").style.display = "block";
        document.getElementById("emailSection").style.display = "block";
    }
    catch (msg) {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        emailInput.style.background = "rgb(255,233,233)";
    }

}
function ValidateAge() {
    var age1 = document.getElementById("age");
    var errorDiv = document.getElementById("ageError");  

    try {
        if (age1.value < 18) {
            throw " Provide age greater than 18";
        }
        age1.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profile.age1 = age1.value;
        document.getElementById("profileAge").innerHTML = profile.age1;
        document.getElementById("profile").style.display = "block";
        document.getElementById("ageSection").style.display = "block";
    }
    catch (msg) {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        age1.style.background = "rgb(255,233,233)";
    }

}
function ValidateProvince() {

    var provinceI = document.getElementById("provinceT");
    var errorDiv = document.getElementById("provinceError");

    try {
        if (provinceI.value != "ON" &&
            provinceI.value != "MB" &&
            provinceI.value != "SK" &&
            provinceI.value != "AB" &&
            provinceI.value != "BC" &&
            provinceI.value != "QC") {
            throw " It should be one of those: ON,MB,SK,AB,BC,QC";
            }

        provinceI.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profile.provinceInput = provinceI.value;
        document.getElementById("Profileprovince").innerHTML = profile.provinceInput;
        document.getElementById("profile").style.display = "block";
        document.getElementById("ProvinceSection").style.display = "block";
        }
    catch (msg) {

        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        provinceI.style.background = "rgb(255,233,233)";
    }
}
function ValidatePostalCode() {

    var postalCodeInput = document.getElementById("pcode");
    var errorDiv = document.getElementById("postalCodError");

    try {
        if (/[a-zA-Z][0-9][a-zA-Z][0-9][a-zA-Z][0-9]/.test(postalCodeInput.value) === false)
        {
            throw "Please provide a valid Canadian Postal Code";
        }

        postalCodeInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profile.postalCode = postalCodeInput.value;
        document.getElementById("Profilecode").innerHTML = profile.postalCode;
        document.getElementById("profile").style.display = "block";
        document.getElementById("PostalSection").style.display = "block";
    }
    catch (msg) {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        postalCodeInput.style.background = "rgb(255,233,233)";
    }

}


function ValidateName() {

    var FnameInput = document.getElementById("Fname");
    var errorDiv = document.getElementById("FnameError");


    try {
        if (FnameInput.value.length < 3) {
            throw "Please, a valid First Name";
        }

        FnameInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profile.nameF = FnameInput.value;
        document.getElementById("profileFname").innerHTML = profile.nameF;
        document.getElementById("profile").style.display = "block";
        document.getElementById("FnameSection").style.display = "block";
    }
    catch (msg) {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        FnameInput.style.background = "rgb(255,233,233)";
    }
}

function ValidateLastName() {

    var LastNameInput = document.getElementById("lname");
    var errorDiv = document.getElementById("lnameError");

    try
    {
        if (LastNameInput.value.length < 4) {
            throw "Please, a valid Last Name";
        }

        LastNameInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profile.nameL = LastNameInput.value;
        document.getElementById("profileLname").innerHTML = profile.nameL;
        document.getElementById("profile").style.display = "block";
        document.getElementById("lnameSection").style.display = "block";
    }

    catch (msg)
    {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        LastNameInput.style.background = "rgb(255,233,233)";
    }
}
function ValidatePassword() {
    var pw1Input = document.getElementById("pw1");
    var pw2Input = document.getElementById("pw2");
    var errorDiv = document.getElementById("passwordError");
    try {
        if (pw1Input.value.length < 6) {

            throw "Password less than 6 letters!";

        } else if (pw1Input.value.localeCompare(pw2Input.value) !== 0) {

            throw "Passwords must match!";
        }

        else if (/[A-Z]/.test(pw1Input.value) === false) {

            throw "Password must contain at least one upper letter";
        }
        else if (/\d/.test(pw1Input.value) === false) {
            throw " Password must contain at least one number";
        }

        else if (/\W/.test(pw1Input.value) == false) {
            throw " Password must contain at least one special case";
        }

        pw1Input.style.background = "";
        pw2Input.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profile.pw1 = pw1Input.value;
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        pw1Input.style.background = "lightpurple";
        pw2Input.style.background = "lightpurple";
    }
}

function ValidateAddress() {
    var addyInput = document.getElementById("addressName");
    var errorDiv = document.getElementById("addressNameError");


 
    try {
        if (addyInput.value.length < 6) {
            throw "Enter a valid Address!!!";
        }
        addyInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profile.Address = addyInput.value;
        document.getElementById("profileAddress").innerHTML = profile.Address;
        document.getElementById("profile").style.display = "block";
        document.getElementById("AddressSection").style.display = "block";

    }
    catch (msg) {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        addyInput.style.background = "rgb(255,233,233)";
    }

}

function ValidateCity() {
    var cityInput = document.getElementById("cityName");
    var errorDiv = document.getElementById("cityNameError");

    try {
        if (cityInput.value == /.{3}]/.test(cityInput.value)) {
            throw "Enter city";
        }
        cityInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profile.Address = cityInput.value;
        document.getElementById("profileCity").innerHTML = profile.Address;
        document.getElementById("profile").style.display = "block";
        document.getElementById("CitySection").style.display = "block";

    }
    catch (msg) {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        cityInput.style.background = "rgb(255,233,233)";
    }

}



function setUpPages() {
    ValidateEmail();
    ValidateAge();
    ValidateProvince();
    ValidatePostalCode();
    ValidatePassword();
    ValidateName();
    ValidateLastName();
    ValidateAddress();
    ValidateCity();
}

document.getElementById("submit").addEventListener("load", setUpPages, false);