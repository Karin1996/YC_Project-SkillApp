function login() {
    let inputUserName = document.getElementById("username").value;
<<<<<<< HEAD
    let inputPassword = document.getElementById("password").value;

    console.log(inputUserName)
    var url = `http://localhost:8082/users/name/${inputUserName}`;
    console.log(url)
=======
    console.log(inputUserName)
    var url = `http://localhost:8082/users/name/${inputUserName}`;
    console.log("url var1 is: "+url);
>>>>>>> main
    fetch(url)
        .then((data)=>{
            console.log(data);
            return data.json();
        }).then((userdata)=>{
        document.getElementById('message')
            .innerHTML=userdata.name;
        console.log(userdata.id);
       if(userdata.password == inputPassword)
       {
        localStorage.setItem("keyId", userdata.id)
        location.href = "../Java/profile.html";
       }
    }).catch((err)=>{
        console.log(err)
    })
}

