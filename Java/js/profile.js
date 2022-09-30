function getUser() {
    fetch("http://localhost:8082/users/1")
        .then((data)=>{
            console.log(data);
            return data.json();
        }).then((userdata)=>{
             console.log(userdata.name);
             document.getElementById('username')
                 .innerHTML=userdata.name;
    }).catch((err)=>{
        console.log(err)
    })
}

function getGoals() {
    fetch("http://localhost:8082/users/1")
        .then((data)=>{
            return data.json();
    }).then((goals)=>{
        console.log(goals.goal[0].nameOfGoal);
        let data1="";
        goals.goal.map((values)=>{
            data1+=`<div>
                <img class="icon" src="../Java/Assets/default_image.png" alt="default_image">
                <h2 id="goal">${values.nameOfGoal}</h2>
            </div>`
        });
        document.getElementById('user_active_goals').innerHTML=data1;
    }).catch((err)=>{
        console.log(err)
    })
}