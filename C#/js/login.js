document.getElementById("loginButton").addEventListener("click", function(e){
    requestLogin(e)
});

function requestLogin(e){
    e.preventDefault();
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
    .then((response) => response.json())
    .then((response) => {
        response = JSON.parse(response);
        //If the response is a message, show the error message
        if(response.Message){
            document.getElementById("message").innerText = response.Message;
        }
        else{
            //Store info in localstorage
            localStorage.setItem('userInfo_id', JSON.stringify(response.id));
            //localStorage.setItem("userInfo_username", JSON.stringify(response.username));
            //localStorage.setItem("userInfo_name", JSON.stringify(response.name));
            //localStorage.setItem("userInfo_email", JSON.stringify(response.email));
            //Redirect to the desktop/dashboard (with correct user)
            window.location.href = "dashboard.html";
        }
    })
}