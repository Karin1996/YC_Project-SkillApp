

function getAccountInfo() {
let userId = localStorage.getItem("keyId")
    fetch(`http://https://javabackend.azurewebsites.net/users/id/${userId}`)
        .then((data)=>{
            console.log(data);
            return data.json();
        }).then((userdata)=>{
             console.log("Ophalen account info met id: " + userdata.id);
             document.getElementById('name')
                 .value=userdata.name;
             document.getElementById('user-name')
                 .value=userdata.username;
             document.getElementById('email')
                 .value=userdata.email;
             document.getElementById('password')
                  .value=userdata.password;
             document.getElementById('location')
                 .value=userdata.location;
             document.getElementById('expert')
                 .value=userdata.expert;
    }).catch((err)=>{
        console.log(err)
    })
}



function updateJSON(){
    console.log("in updateJSON");

    let accountObj = {};

    //Get the name and password from the input fields
        console.log("data van velden ophalen");
    let inputName = document.getElementById("name").value;
    let inputUserName = document.getElementById("user-name").value;
    let inputEmail = document.getElementById("email").value;
    let inputPassword = document.getElementById("password").value;
    let inputLocation = document.getElementById("location").value;
    let inputExpert = document.getElementById("expert").value;
        console.log("ophalen gelukt");

    //add values to the object
    accountObj.id = localStorage.getItem("keyId");
    accountObj.name = inputName;
    accountObj.username = inputUserName;
    accountObj.email = inputEmail;
    accountObj.password = inputPassword;
    accountObj.location = inputLocation;
    accountObj.Expert = inputExpert;

    //convert the object into a JSON file
    const meloenJSON = JSON.stringify(accountObj);
    console.log("met deze data gaan we de oude informatie updaten: " + meloenJSON);
    serverRequestUpdate(meloenJSON);
}

function serverRequestUpdate(json){
    console.log("in de functie serverRequest(json)");
    fetch(`http://https://javabackend.azurewebsites.net/users/update/${userId}/`,
        {headers: {'Content-Type': 'application/json'}, method: 'PUT', body: json})
        .then((response) => response.json())
        .then((data) => console.log(data));
        console.log("einde serverRequestUpdate(json)");

}