let arr = [];

document.addEventListener("DOMContentLoaded", function(e){
    requestGoal(e)
});

function requestGoal(e){
    e.preventDefault();
    
    let userIdObj = {
        userId: localStorage.getItem("userInfo_id").toString()
    };

    //convert the object into a JSON file
    const userIdJSON = JSON.stringify(userIdObj);
    serverRequestForId(userIdJSON);

    //wait 1 ms to get back usergoal ids
    setTimeout(function(){
        serverRequest();
    }, 100)
    
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
        makeGoalArray(response);
    })
}

//Get the user specific goals, put those goal ids in an array to check against goalId
function makeGoalArray(json){    
    for(let i = 0; i < json.length; i++){
        arr[i] = json[i].id;
    }
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
        setTimeout(function(){generateGoalInfo(response)}, 100);
    })
    .catch(error =>{
        let msg = document.createElement("p");
        msg.classList.add("msg");
        msg.innerHTML = "This skill has no information";
        document.getElementsByTagName("main")[0].style.alignItems = "center";
        document.getElementsByTagName("main")[0].append(msg);
    })
}

function generateGoalInfo(json){
    
    //Calculate totalpoints (from subgoal individual Points)
    let totalPoints = 0;
    //Button content
    let button;

    json.subgoal.forEach(element => {
        totalPoints += element.Points
    })

    
    if(arr.includes(json.goal.Id)){
        button = `<a id="remove" class="button white_button following" href="#" onclick=addTrue(false)>Unfollow skill</a>`; 
    }
    else{
        button = `<a id="add" class="button white_button" href="#" onclick=addTrue(true)>Follow skill</a>`; 
    }
    
   
        
   

    let content = `
        <div id="button_wrapper">
            <a class="button white_button discord" href="https://discord.gg/8nKyetykZf" target="_blank">Join the discord</a>
            `+button+`
        </div>

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