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
        let data2="";
        goaldata.subGoal.map((val)=>{
            data2+=`<div class="subgoals">
                <div class="horizontal">
                    <h5>1. &nbsp</h5>
                    <h5>${val.nameOfSubGoal}</h5>
                </div>
                <p>${val.description}</p>
                <button class="btn-sub">completed</button>
            </div>`
        });
        document.getElementById('subs').innerHTML=data2;
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



function addSub(){
    let subObj = {};

    let subName = document.getElementById("name-of-sub").value;
    let subDescript = document.getElementById("descript-sub").value;

    subObj.nameOfSubGoal = subName;
    subObj.description = subDescript;
    const subJSON = JSON.stringify(subObj);

    subRequest(subJSON)
}

function subRequest(json){
    console.log("klopt dit?" + json);
    fetch("http://localhost:8082/subGoal",
        { headers: {
                'Content-Type': 'application/json'}, method: 'POST', body: json
        }).then(a=>a.text()).then(d => addSubToGoal(d) )
}


function addSubToGoal(d) {
    fetch(`http://localhost:8082/goals/${paramValue}/${d}`, {
        method: 'PUT'
    })
}





