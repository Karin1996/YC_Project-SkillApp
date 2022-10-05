function login() {
    let inputUserName = document.getElementById("username").value;
    let inputPassword = document.getElementById("password").value;
    console.log(inputUserName)
    var url = `http://localhost:8082/users/name/${inputUserName}`;
    console.log("url var1 is: "+url);
    fetch(url)
        .then((data)=>{
            console.log(data);
            return data.json();
        }).then((userdata)=>{
        document.getElementById('message')
            .innerHTML=userdata.name;
        console.log(userdata.id);
        if(inputPassword == userdata.password)
        {
        localStorage.setItem("keyId", userdata.id)
        location.href = "../Java/profile.html";
        }
    }).catch((err)=>{
        console.log(err)
    })
}

