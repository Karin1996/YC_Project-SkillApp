function login() {
    let inputUserName = document.getElementById("username").value;
    let inputPassword = document.getElementById("password").value;

    console.log(inputUserName)
    var url = `http://localhost:8082/users/name/${inputUserName}`;
    console.log(url)

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

function skipLogin()
{   console.log("SkipLogin werkt");
    if (localStorage.getItem("keyId") === null)
    {}
    else{
    var key = localStorage.getItem("keyId");
    var url = `http://localhost:8082/users/id/${key}`;
    fetch(url)
    .then((data)=>{
        console.log(data);
        return data.json();
    }).then((userdata)=>{
         console.log(userdata.id);
         document.getElementById('username')
             .innerHTML=userdata.name;
             location.href = "../Java/profile.html";
         getGoals();
         console.log(getGoals())
}).catch((err)=>{
    console.log(err)
})
    }
}
