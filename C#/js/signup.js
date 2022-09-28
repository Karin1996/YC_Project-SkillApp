function generateJSON(){
    let inlogObj = {};

    //Get the name and password from the input fields
    let emailInput = document.getElementById("mail").value;
    let inputName = document.getElementById("name").value;
    let inputUserName = document.getElementById("username").value;
    let inputPassword = document.getElementById("password").value;
    let verifyPassword = document.getElementById("passwordconfirm").value;

    //check if passwords are the same
    if(checkPasswordMatch(inputPassword, verifyPassword)){

    //turn the values into an object
    inlogObj.name = inputName;
    inlogObj.username = inputUserName;
    inlogObj.email = emailInput;
    inlogObj.password = inputPassword;
    inlogObj.points = 1;
    inlogObj.goalProgress = 1;
    inlogObj.subGoalProgess = 1;
    inlogObj.Expert = false;

    //convert the object into a JSON file
    const inlogJSON = JSON.stringify(inlogObj);
    console.log(inlogJSON);
    serverRequest(inlogJSON)
    }

}

function serverRequest(json){
    fetch("http://localhost:8082/users", { headers: {
      'Content-Type': 'application/json'}, method: 'POST', body: json})
    .then(resp => resp.json())
    .then(console.log);
}

function checkPasswordMatch(passwordOne, passwordTwo){
    if(passwordOne === passwordTwo){
        return true;
    }
    return alert("passwords do not match");
}