document.addEventListener("DOMContentLoaded", function(e){
    requestGoal(e)
});

function requestGoal(e){
    e.preventDefault();
    serverRequest();
}

function serverRequest(){
    fetch(urlVar+"/api/SubGoal/getSubGoal/"+location.search.split('id=')[1], {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then((response) => {
        //console.log("res", response);
        //console.log("res2", response.goal);
        console.log("response", response);
        generateSubGoalInfo(response);
    })
    .catch(error =>{
        let msg = document.createElement("p");
        msg.classList.add("msg");
        msg.innerHTML = "This subgoal has no information";
        document.getElementsByTagName("main")[0].style.alignItems = "center";
        document.getElementsByTagName("main")[0].append(msg);
    })
}

function generateSubGoalInfo(json){
    let content = `
        <a class="button white_button" href="#" onclick=addGoalToUser()>Complete subgoal</a>

        <h2><a href=goal.html?id=`+json.goal.Id+`>`+json.goal.Name+`</a> > `+json.subgoal.Name+`</h2>
        <h4>Points: `+json.subgoal.Points+`</h4>

        <p>`+json.subgoal.Description+`</p>
    `;
    

    if(document.getElementsByTagName("main")[0]){ document.getElementsByTagName("main")[0].innerHTML = content; };
}
