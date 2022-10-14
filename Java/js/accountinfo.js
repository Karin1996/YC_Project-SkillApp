let userId = localStorage.getItem("keyId")


function getAccountInfo() {
    fetch(`http://localhost:8082/users/id/${userId}`)
        .then((data)=>{
            console.log(data);
            return data.json();
        }).then((userdata)=>{
             console.log("Ophalen account info met id: " + userdata.id);
             document.getElementById('kiwi')
                 .innerHTML=userdata.name;
             document.getElementById('name')
                 .value=userdata.name;
             document.getElementById('username')
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
    console.log("TESTING 1");

    let accountObj = {};

    //Get the name and password from the input fields
    let inputName = document.getElementById("name").value;
    let inputUserName = document.getElementById("username").value;
    let inputEmail = document.getElementById("email").value;
    let inputPassword = document.getElementById("password").value;
    let inputLocation = document.getElementById("location").value;
    let inputExpert = document.getElementById("expert").value;

    //add values to the object
    accountObj.name = inputName;
    accountObj.username = inputUserName;
    accountObj.email = inputEmail;
    accountObj.password = inputPassword;
    accountObj.location = inputLocation;
    accountObj.Expert = inputExpert;

    //convert the object into a JSON file
    const meloenJSON = JSON.stringify(accountObj);
    console.log("geupdate versie account informatie: " + meloenJSON);
    serverRequestUpdate(meloenJSON);
}

function serverRequestUpdate(json){
    console.log("in de functie serverRequest(json)");
    fetch(`http://localhost:8082/users/1`, { headers: {

            'Content-Type': 'application/json'}, method: 'PUT', body: json})
        .then((response) => response.json())
        .then((data) => console.log(data));

}