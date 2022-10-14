document.getElementById("registerUserButton").addEventListener("click", function(e){
    requestRegister(e);
});

function requestRegister(e){
    e.preventDefault();

    //Check if all the inputs have a value
    if(document.getElementById("name").value !== "" && document.getElementById("dateOfBirth").value !== "" && document.getElementById("username").value !== "" && 
    document.getElementById("email").value !== "" && document.getElementById("password").value !== "" && 
    document.getElementById("passwordconfirm").value !== "" &&  document.getElementById("street").value !== "" &&
    document.getElementById("housenumber").value !== "" && document.getElementById("postalcode").value !== "" &&
    document.getElementById("city").value !== "" && document.getElementById("country").value !== ""  ){

        let inputName = document.getElementById("name").value.trim();
        let inputDateOfBirth = document.getElementById("dateOfBirth").value.trim();
        let inputUserName = document.getElementById("username").value.trim();
        let inputEmail = document.getElementById("email").value.trim();
        let inputPassword = document.getElementById("password").value.trim();
        let inputConfirmPassword = document.getElementById("passwordconfirm").value.trim();
        let inputStreet = document.getElementById("street").value.trim();
        let inputHousenumber = document.getElementById("housenumber").value.trim();
        let inputPostalcode = document.getElementById("postalcode").value.trim();
        let inputCity = document.getElementById("city").value.trim();
        let inputCountry = document.getElementById("country").value.trim();
        let inputExpert = document.querySelector("#expert").checked;

        //Passwords match
        if(inputPassword === inputConfirmPassword){
            let registerObj = {
                name: inputName,
                dateOfBirth: inputDateOfBirth,
                username: inputUserName,
                email : inputEmail,
                password: inputPassword,
                street: inputStreet,
                houseNumber: inputHousenumber,
                postalCode: inputPostalcode,
                city: inputCity,
                country: inputCountry,
                isExpert: inputExpert
            };
            //convert the object into a JSON file
            const json = JSON.stringify(registerObj);
            serverRequest(json);
        }
        //Passwords don't match
        else{
            document.getElementById("message").style.color = "rgb(224, 67, 114)";
            document.getElementById("message").innerText = "Passwords don't match";
        }
    }
    else{
        document.getElementById("message").style.color = "rgb(224, 67, 114)";
        document.getElementById("message").innerText = "Fill in all the fields";
    }
}


function serverRequest(json){
    fetch(urlVar+"/api/User/addUser", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: json
    })
    .then((response) => response.json())
    .then((response) => {

        console.log(response)
       
            let wordUsername = "UserName";
            let wordEmail = "Email";

            let i = response.indexOf(wordUsername);
            let j = response.indexOf(wordEmail);

            if(i > 0 ){
                document.getElementById("message").style.color = "rgb(224, 67, 114)";
                document.getElementById("message").innerText = "Username already in use";
            }
            else if(j > 0){
                document.getElementById("message").style.color = "rgb(224, 67, 114)";
                document.getElementById("message").innerText = "Email already in use";
            }
            else{
                document.getElementById("message").style.color = "white";
                document.getElementById("message").innerText = "Account registered";
            }
    })
    .catch(error =>{
        console.log("not getting a response");
    })
}

