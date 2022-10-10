function updateUserInfo(){
    let allEmpty = true;

    if(!localStorage.getItem("userInfo_id")){
        //User is not logged in
        window.location.href = "signin.html";
    }

    //If all the inputs are empty
    if(document.getElementById("name").value == "" && document.getElementById("email").value == "" &&
    document.getElementById("street").value == "" && document.getElementById("housenumber").value == "" && 
    document.getElementById("postalcode").value == "" &&  document.getElementById("city").value == "" && 
    document.getElementById("country").value == ""){
        document.getElementById("message").style.color = "rgb(224, 67, 114)";
        document.getElementById("message").innerText = "There is nothing to update";
    }
    //There is atleast one input value, update userinfo
    else{
        if( document.getElementById("name").value == "" ){userInfo.name = userInfo.name} else{ userInfo.name = document.getElementById("name").value.trim()}
        if( document.getElementById("email").value == ""){userInfo.email = userInfo.email} else{ userInfo.email = document.getElementById("email").value.trim()};
        if( document.getElementById("street").value == ""){userInfo.street = userInfo.street} else{userInfo.street = document.getElementById("street").value.trim()};
        if( document.getElementById("housenumber").value == ""){userInfo.houseNumber = userInfo.houseNumber} else{userInfo.houseNumber = document.getElementById("housenumber").value.trim()};
        if( document.getElementById("postalcode").value == ""){userInfo.postalCode = userInfo.postalCode} else{userInfo.postalCode = document.getElementById("postalcode").value.trim()};
        if( document.getElementById("city").value == ""){userInfo.city = userInfo.city} else{userInfo.city = document.getElementById("city").value.trim()};
        if( document.getElementById("country").value == ""){userInfo.country = userInfo.country} else{userInfo.country = document.getElementById("country").value.trim()};
        
        //turn the values into an object
        let obj = userInfo;
        //convert the object into a JSON file
        const jsonObj = JSON.stringify(obj);
        //Put account information in the backend
        serverRequest(jsonObj);
    }
}


function serverRequest(obj){
    fetch(urlVar+"/api/User/changeUserDetails", {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: obj
    })
    .then((response) => response.json())
    .then((response) => {
        if(response){
            userInfo = response;
            document.getElementById("message").style.color = "white";
            document.getElementById("message").innerHTML = "Information saved";
            setInterval(function () {clearInputs(); location.reload();}, 1000);
        }
        else{
            document.getElementById("message").style.color = "rgb(224, 67, 114)";
            document.getElementById("message").innerText = "Something went wrong, try again later";
        }
    })
}
