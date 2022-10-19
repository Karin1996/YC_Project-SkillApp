document.addEventListener("DOMContentLoaded", function(e){
    requestGoal(e)
});

function requestGoal(e){
    e.preventDefault();
    serverRequest();
}

function serverRequest(){
    fetch(urlVar+"/api/Goal/getGoal/"+location.search.split('id=')[1], {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then((response) => {
        generateGoalInfo(response);
    })
    .catch(error =>{
        let msg = document.createElement("p");
        msg.classList.add("msg");
        msg.innerHTML = "This goal has no information";
        document.getElementsByTagName("main")[0].style.alignItems = "center";
        document.getElementsByTagName("main")[0].append(msg);
    })
}


function generateGoalInfo(json){
    //Calculate totalpoints (from subgoal individual Points)
    let totalPoints = 0;
    json.subgoal.forEach(element => {
        totalPoints += element.Points
    })
    
    let content = `
        <a class="button white_button" href="#" onclick=addGoalToUser()>Add goal</a>

        <h2>`+json.goal.Name+`</h2>
        <h4>Points: 0 - `+totalPoints+`</h4>

        <p>`+json.goal.Description+`</p>
        <h3>Subgoals for `+json.goal.Name+`</h3>

        <div class="user_active_goals">No subgoals</div>
    `;

    let innerContent = "";
    
    json.subgoal.forEach(element => {
        //Foreach element create a div
        let divElement = `     
        <div>
            <img class="goal_thumb" src="assets/water2.jpg" alt="goal_thumb">
            <a href="subgoal.html?id=`+element.Id+`"><span>`+element.Name+`</span></a>
        </div>
            `;
        innerContent += divElement;
    });

    

    if(document.getElementsByTagName("main")[0]){
        document.getElementsByTagName("main")[0].innerHTML = content;
        if(document.getElementsByClassName("user_active_goals")[0]){
            document.getElementsByClassName("user_active_goals")[0].innerHTML = innerContent;
        }
    };
}