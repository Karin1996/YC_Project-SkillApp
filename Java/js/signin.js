function login() {
    let inputUserName = document.getElementById("username").value;
    console.log(inputUserName)

    fetch("http://localhost:8082/users/name/wout")
        .then((data)=>{
            console.log(data);
            return data.json();
        }).then((userdata)=>{
        document.getElementById('message')
            .innerHTML=userdata.name;
        console.log(userdata.id);
        localStorage.setItem("keyId", userdata.id)
        location.href = "../Java/profile.html";
    }).catch((err)=>{
        console.log(err)
    })
}

