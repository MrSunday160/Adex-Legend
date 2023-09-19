document.getElementById('form').addEventListener('submit', submitForm);

function submitForm(e){

    e.preventDefault();
    var firstName = getInputVal('first')
    var lastName = getInputVal('last')
    var email = getInputVal('email')
    var password = getInputVal('password')
    var address = getInputVal('address')
    var gender = document.querySelector('input[name="gender"]:checked').value
    

    var name = firstName + ' ' + lastName


    var errorMsg = "";
    var condition = true;


    if(name == "" || email == "" || password == "" || gender == "" || address == ""){
        errorMsg += "Please fill the form";
        condition = false;
    }
    if(name.length < 4){
        errorMsg += "\nYour name must be 4 or more characters";
        condition = false;
    }
    if(!validateEmail(email)){
        errorMsg += "\nInvalid Email";
        condition = false;
    }
    if(password.length < 8){
        errorMsg += "\nInvalid password";
        condition = false;
    }
    if(address.length < 10){

        errorMsg += "\nInvalid address";
        condition = false;

    }
    if(condition == false){
        alert(errorMsg);
    }
    if(condition == true){
        document.getElementById("form").reset();
    }
}

function getInputVal(id){
    return document.getElementById(id).value;
}

function validateEmail(email) {
    var atSymbol = email.indexOf("@");
    if(atSymbol < 1){
        return false;
    }
    var dot = email.indexOf(".");
    if(dot <= atSymbol + 2) {
        return false;
    }
    if (dot === email.length - 1){
        return false;
    }
    
    return true;
}