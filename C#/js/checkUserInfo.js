if(localStorage.getItem("userInfo_id")){
    //User is logged in, get the correct user info from server
    let userid = localStorage.getItem("userInfo_id");
    let obj = {Id: userid};
    const json = JSON.stringify(obj);
}
else{
    //User is not logged in
    window.location.href = "signin.html";
}

function deleteLocalStorage(){
    console.log("Delete info")
    localStorage.removeItem("Id")
    localStorage.removeItem("userInfo_username");
    localStorage.removeItem("userInfo_name");
    localStorage.removeItem("userInfo_email");
}
