document.addEventListener("DOMContentLoaded", function(e){
    requestGoal(e)
});

function requestGoal(e){
    e.preventDefault();
    serverRequest();
}

function serverRequest(){
    fetch(urlVar+"/api/Goal/getGoal/"+location.search.split('id=')[1]+"/getSubgoal/"+location.search.split('subid=')[1], {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then((response) => {
        console.log(response);

        console.log(response.goal);
        generateGoalInfo(response);
    })
    .catch(error =>{
        let msg = document.createElement("p");
        msg.classList.add("msg");
        msg.innerHTML = "This subgoal has no information";
        document.getElementsByTagName("main")[0].style.alignItems = "center";
        document.getElementsByTagName("main")[0].append(msg);
    })
}


function generateGoalInfo(json){
   //Generate pageinfo here

    //if(document.getElementsByTagName("main")[0]){document.getElementsByTagName("main")[0].innerHTML = content};
}