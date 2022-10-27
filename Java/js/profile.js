let userId = localStorage.getItem("keyId")

function getUser() {

    fetch(`http://2209ycdoeleapp.mysql.database.azure.com/users/id/${userId}`)
        .then((data)=>{
            console.log(data);
            return data.json();
        }).then((userdata)=>{
             console.log(userdata.id);
             document.getElementById('username')
                 .innerHTML=userdata.name;
             getGoals();
    }).catch((err)=>{
        console.log(err)
    })
}

function logout() {
    console.log("ik ga uitloggen ")
    localStorage.setItem("keyId", 0)
    window.localStorage.clear();
    window.location = "../Java/signin.html"
}

function getGoals() {

    fetch(`http://2209ycdoeleapp.mysql.database.azure.com/users/id/${userId}`)
        .then((data)=>{
            return data.json();
    }).then((goals)=>{
        console.log(goals.goal[0].nameOfGoal);
        let data1="";
        goals.goal.map((values)=>{
            if (values.image != null)
            {
            data1+=`<div class="tile" onclick="getGoal(${values.id})">
                <img class="img_goal" src="${values.image.imageCode}" alt="default_image" width="50" height="300">
                <h3 id="goal">${values.nameOfGoal}</h3>
                <button id="learn">Learn this!</button>
            </div>`
            }
            else
            {
                data1+=`<div class="tile" onclick="getGoal(${values.id})">
                <img class="img_goal" src="../Java/Assets/goals.jpg" alt="default_image">
                <h3 id="goal">${values.nameOfGoal}</h3>
                <button id="learn">Learn this!</button>
            </div>`
            }
        });
        document.getElementById('user_active_goals').innerHTML=data1;
    }).catch((err)=>{
        console.log(err)
    })
}function getGoal(goalId) {
    location.href = "../Java/GoalDetailPage.html?deGoalId="+goalId;
}

