document.getElementById("loginButton").addEventListener("click", requestLogin);

function requestLogin(){
    //Get the name and password from the input fields
    let inputUserName = document.getElementById("username").value;
    let inputPassword = document.getElementById("password").value;
 
    //turn the values into an object
    let inlogObj = {
        username: inputUserName,
        password: inputPassword
    };

    //convert the object into a JSON file
    const inlogJSON = JSON.stringify(inlogObj);
    serverRequest(inlogJSON);
}

function serverRequest(json){
    fetch(urlVar+"/api/User/user/login", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: json
    })
    .then(response => {
        if(response.status == 200){
            //Will have a "set-cookie in the response header"
            //Redirect to the desktop/dashboard (with correct user)
            //window.location.href = "desktop.html";

            
        }
        else{
            document.getElementById("message").innerText = "Login failed";
        }
    })
    .catch(document.getElementById("message").innerText = "Something went wrong, try again later")
}
