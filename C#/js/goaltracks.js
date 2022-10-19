document.addEventListener("DOMContentLoaded", function(e){
    requestGoals(e)
});

function requestGoals(e){
    e.preventDefault();
    serverRequest();
}

function serverRequest(){
    fetch(urlVar+"/api/Goal/allGoals", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then((response) => {
        generateTracks(response);
    })
}

function generateTracks(json){
    //There are no goals/tracks in the db
    if(json.length <= 0){
        let msg = document.createElement("p");
        msg.innerHTML = "There are no goals available";
        document.getElementById("all_goals").style.display = "block";
        document.getElementById("all_goals").append(msg);
    }
    else{
        let content = "";
        json.forEach(element => {
            console.log(element);
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
    if(document.getElementById("all_goals")){document.getElementById("all_goals").innerHTML = content};
    }

}


/*  */