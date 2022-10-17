function generateJSON(){
    let signUpObj = {};

    //Get the name and password from the input fields
    let emailInput = document.getElementById("mail").value;
    let inputName = document.getElementById("name").value;
    let inputUserName = document.getElementById("username").value;
    let inputPassword = document.getElementById("password").value;
    let verifyPassword = document.getElementById("passwordconfirm").value;

    //check if passwords are the same
    if(checkPasswordMatch(inputPassword, verifyPassword)){

    //turn the values into an object
    signUpObj.name = inputName;
    signUpObj.username = inputUserName;
    signUpObj.email = emailInput;
    signUpObj.password = inputPassword;
    signUpObj.points = 1;
    signUpObj.goalProgress = 1;
    signUpObj.subGoalProgess = 1;
    signUpObj.Expert = false;

    //convert the object into a JSON file
    const signUpJSON = JSON.stringify(signUpObj);
    console.log("array met input user " + signUpJSON);
    serverRequest(signUpJSON);
    }

}

function serverRequest(json){
    console.log("Wowzerts");
    fetch("https://javabackend.azurewebsites.net/users", { headers: {

            'Content-Type': 'application/json'}, method: 'POST', body: json})
        .then((response) => response.json())
        .then((data) => console.log(data));

}

function checkPasswordMatch(passwordOne, passwordTwo){
    if(passwordOne === passwordTwo){
        return true;
    }
    return alert("passwords do not match");
}