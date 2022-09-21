function generateJSON(){
    let inlogObj = {};

    //Get the name and password from the input fields
    let emailInput = document.getElementById("mail").value;
    let inputName = document.getElementById("username").value;
    let inputPassword = document.getElementById("password").value;
    let verifyPassword = document.getElementById("passwordconfirm").value;

    //check if passwords are the same
    if(checkPasswordMatch(inputPassword, verifyPassword)){

    //turn the values into an object
    inlogObj.name = inputName;
    inlogObj.pass = inputPassword;
    inlogObj.mail = emailInput;

    //convert the object into a JSON file
    const inlogJSON = JSON.stringify(inlogObj);
    console.log(inlogJSON);
    serverRequest(inlogJSON)
    }

}

function serverRequest(json){
    fetch("http://localhost:8082/chat", { method: 'POST', body: json})
    .then(resp => resp.json())
    .then(console.log);
}

function checkPasswordMatch(passwordOne, passwordTwo){
    if(passwordOne === passwordTwo){
        return true;
    }
    return alert("passwords do not match");
}