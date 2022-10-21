let idOfUser = localStorage.getItem("keyId")

var url_string = window.location.href;
var url = new URL(url_string);
var paramValue = url.searchParams.get("deGoalId");
console.log(paramValue)


function haalGoalDetailOp() {
    fetch(`http://localhost:8082/goals/id/${paramValue}`)
        .then((data)=>{
            console.log(data);
            return data.json();
        }).then((goaldata)=>{
        document.getElementById('goalTitle')
            .innerHTML=goaldata.nameOfGoal;
        document.getElementById('image')
            .src = goaldata.image.imageCode;
        document.getElementById('goal-description')
            .innerHTML=goaldata.description
    }).catch((err)=>{
        console.log(err)
    })
}

function addGoalToDash() {
    fetch(`http://localhost:8082/users/${idOfUser}/${paramValue}`, {
        method: 'PUT'
    })
    location.href = "../Java/profile.html";
}

let subObj = {};
function addSub(){

    let subName = document.getElementById("name-of-sub").value;
    let subDescript = document.getElementById("descript-sub").value;

    subObj.nameOfGoal = subName;
    subObj.description = subDescript;
    const subJSON = JSON.stringify(subObj);

    subRequest(subJSON)
}

function subRequest(json){
    console.log(json);
    fetch("http://localhost:8082/subGoal",
        { headers: {
                'Content-Type': 'application/json'}, method: 'POST', body: json
        })
}


// function addSubToGoal() {
//     fetch(`http://localhost:8082/goals/${paramValue}/${?}`, {
//         method: 'PUT'
//     })
// }
//
//



