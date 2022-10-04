function login(){
    console.log("hallo");
    let signInObj = {};

    let inputUserName = document.getElementById("username").value;
    let inputPassword = document.getElementById("password").value;

    signInObj.username = inputUserName;
    signInObj.password = inputPassword;

    const signInJSON = JSON.stringify(signInObj);
    console.log(signInJSON);

}


