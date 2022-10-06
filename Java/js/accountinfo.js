let userId = localStorage.getItem("keyId")

function getAccountInfo() {

    fetch(`http://localhost:8082/users/id/${userId}`)
        .then((data)=>{
            console.log(data);
            return data.json();
        }).then((userdata)=>{
             console.log("Ophalen account info met id: " + userdata.id);
             document.getElementById('name')
                 .innerHTML=userdata.name;
             document.getElementById('kiwi')
                 .innerHTML=userdata.name;
             document.getElementById('username')
                 .innerHTML=userdata.username;
             document.getElementById('dob')
                 .innerHTML=userdata.dob;
             document.getElementById('location')
                 .innerHTML=userdata.location;
             document.getElementById('email')
                 .innerHTML=userdata.email;
    }).catch((err)=>{
        console.log(err)
    })
}



function logout() {
    console.log("ik ga uitloggen ")
    localStorage.setItem("keyId", 0)
    window.localStorage.clear();
    window.location = "../Java/signin.html"
}

