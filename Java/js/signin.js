function getUser() {
    let inputUserName = document.getElementById("username").value;
    console.log(inputUserName)

    fetch(`http://localhost:8082/users/name/${inputUserName}`)
        .then((data)=>{
            console.log(data);
            return data.json();
        }).then((userdata)=>{
        console.log(userdata.id);
    }).catch((err)=>{
        console.log(err)
    })
}

