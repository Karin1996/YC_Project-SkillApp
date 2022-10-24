document.addEventListener("DOMContentLoaded", function(e){
    requestUserId(e)
});

function requestUserId(e){
    e.preventDefault();
    //Get the userid from localstorage
    //turn the value into an object
    let userIdObj = {
        userId: localStorage.getItem("userInfo_id").toString()
    };

    //convert the object into a JSON file
    const userIdJSON = JSON.stringify(userIdObj);
    serverRequestForId(userIdJSON);
}

function serverRequestForId(json){
    fetch(urlVar+"/api/UserGoal/GetGoalsFromUser", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: json
    })
    .then((response) => response.json())
    .then((response) => {
        generateGoals(response);
    })
}

function generateGoals(json){
    //There are no goals/tracks in the db
    if(json.length <= 0){
        let msg = document.createElement("p");
        msg.innerHTML = "You have no active skills";
        document.getElementById("user_active_goals").style.display = "block";
        document.getElementById("user_active_goals").append(msg);
    } else {
        let content = "";
        json.forEach(element => {
            //Foreach element create a div (TODO: Add image)
            let divElement = `     
            <div>
                <img class="goal_thumb" src="assets/goal_images/`+element.fileName+`.jpg" alt="goal_thumb" onerror="this.onerror=null;this.src='assets/goal_images/default.jpg';">
                <a href="goal.html?id=`+element.id+`"><span>`+element.name+`</span></a>
            </div>
             `;
            content += divElement;
        });
        // insert all goals in div
        if(document.getElementById("user_active_goals")){document.getElementById("user_active_goals").innerHTML = content};
    }


}