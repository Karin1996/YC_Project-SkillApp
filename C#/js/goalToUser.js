function addTrue(state){

    //Follow skill button pressed
    if(state){
        document.getElementById("add").addEventListener("click", addGoalToUser())
    }
    else{
        document.getElementById("remove").addEventListener("click", removeGoalFromUser())
    }
    //Unfollow skill button pressed
}

function addGoalToUser(){
    let obj = {
        userid: localStorage.getItem("userInfo_id").toString(),
        goalid: location.search.split('id=')[1]
    };
  
    //convert the object into a JSON file
    const json = JSON.stringify(obj);
    serverRequestAdd(json);
}

function removeGoalFromUser(){
    let obj = {
        userid: localStorage.getItem("userInfo_id").toString(),
        goalid: location.search.split('id=')[1]
    };
   
    //convert the object into a JSON file
    const json = JSON.stringify(obj);
    serverRequestRemove(json);
}

function serverRequestAdd(json){
    fetch(urlVar+"/api/UserGoal/AddUserGoal", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: json
    })
    .then((response) => {if(response.ok){location.reload()}} )
}

function serverRequestRemove(json){
    fetch(urlVar+"/api/UserGoal/RemoveUserGoal", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: json
    })
    .then((response) => {if(response.ok){location.reload()}} )
}