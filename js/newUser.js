function generateJSON(){
    let inlogObj = {};

    //Get the name and password from the input fields
    let inputName = document.getElementById("inputName").value;
    let inputPassword = document.getElementById("inputPassword").value;

    //turn the values into an object
    inlogObj[inputName] = inputPassword;

    //convert the object into a JSON file
    const inlogJSON = JSON.stringify(inlogObj);
    console.log(inlogJSON);
    serverRequest(inlogJSON)


}

function serverRequest(json){
    fetch("http://localhost:8082/chat", { method: 'POST', body: json})
    .then(resp => resp.json())
    .then(console.log);
}