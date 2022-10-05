let userId = localStorage.getItem("keyId")

function getUser() {
<<<<<<< HEAD
    fetch("http://localhost:8082/users/id/1")
=======
    fetch(`http://localhost:8082/users/id/${userId}`)
>>>>>>> main
        .then((data)=>{
            console.log(data);
            return data.json();
        }).then((userdata)=>{
             console.log(userdata.id);
             document.getElementById('username')
                 .innerHTML=userdata.name;
             getGoals();
             console.log(getGoals())
    }).catch((err)=>{
        console.log(err)
    })
}

function logout() {
    localStorage.clear();
}

function getGoals() {
<<<<<<< HEAD
    fetch("http://localhost:8082/users/id/1")
=======
    fetch(`http://localhost:8082/users/id/${userId}`)
>>>>>>> main
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