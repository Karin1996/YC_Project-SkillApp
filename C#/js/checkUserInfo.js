//Fill the object with correct info
let userInfo = {};

if(localStorage.getItem("userInfo_id")){
    //Send the saved user id to backend
    //turn the values into an object
    let obj = {userId: localStorage.getItem("userInfo_id").toString()};

    //convert the object into a JSON file
    const jsonObj = JSON.stringify(obj);
    //Fetch account information back and save in correct variables
    serverRequest(jsonObj);
}

else{
    //User is not logged in
    window.location.href = "signin.html";
}

function serverRequest(obj){
    fetch(urlVar+"/api/User/getUserDetails", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: obj
    })
    .then((response) => response.json())
    .then((response) => {
       
        //Save the object
        userInfo = response;
        //Dont save the password
        delete userInfo.password;

        //Place information in HTML where possible
        placeInformationInHtml();

        //Generate form with editable userInfo
        generateForm();
    })
}

function placeInformationInHtml(){
    if(document.getElementById("userInfo_name")){document.getElementById("userInfo_name").innerHTML = userInfo.name;}
    if(document.getElementById("userInfo_username")){document.getElementById("userInfo_username").innerHTML = userInfo.userName;}
    if(document.getElementById("userInfo_email")){document.getElementById("userInfo_email").innerHTML = userInfo.email;}
    if(document.getElementById("userInfo_dateOfBirth")){document.getElementById("userInfo_dateOfBirth").innerHTML = userInfo.dateOfBirth;}
    if(document.getElementById("userInfo_street")){document.getElementById("userInfo_street").innerHTML = userInfo.street;}
    if(document.getElementById("userInfo_houseNumber")){document.getElementById("userInfo_houseNumber").innerHTML = userInfo.houseNumber;}
    if(document.getElementById("userInfo_postalcode")){document.getElementById("userInfo_postalcode").innerHTML = userInfo.postalCode;}
    if(document.getElementById("userInfo_city")){document.getElementById("userInfo_city").innerHTML = userInfo.city;}
    if(document.getElementById("userInfo_country")){document.getElementById("userInfo_country").innerHTML = userInfo.country;}
    if(document.getElementById("userInfo_points")){document.getElementById("userInfo_points").innerHTML = userInfo.points;}
    if(document.getElementById("userInfo_isExpert")){document.getElementById("userInfo_isExpert").innerHTML = userInfo.isExpert;}
}

function generateForm(){
    let formContent = `     
    
        <div class="info_form">
            <label for="name">Name</label>
            <input id="name" placeholder="`+userInfo.name+`">
        </div>
        <div class="info_form">
            <label for="email">Email</label>
            <input id="email" type="email" placeholder="`+userInfo.email+`">
        </div>
        <div class="info_form street">
            <label for="street">Street</label>
            <input id="street" placeholder="`+userInfo.street+`">
            <label for="housenumber">Number</label>
            <input id="housenumber" placeholder="`+userInfo.houseNumber+`">
        </div>
        <div class="info_form city">
            <label for="postalcode">Zipcode</label>
            <input id="postalcode" placeholder="`+userInfo.postalCode+`">
            <label for="city">City</label>
            <input id="city" placeholder="`+userInfo.city+`">
        </div>
        <div class="info_form">
            <label for="country">Country</label>
            <input id="country" placeholder="`+userInfo.country+`">
        </div>

        <span id="message"></span>
            
        <input class="button red_button" type="submit" value="Cancel" onclick="clearInputs()">
        <input class="button" type="submit" value="Save" id="saveButton">
    `;

    // insert nav in body
    if(document.getElementById("form")){document.getElementById("form").innerHTML = formContent};
}