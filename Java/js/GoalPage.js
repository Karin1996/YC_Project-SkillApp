function getAllGoals() {

    fetch(`http://localhost:8082/goals`)
        .then((data)=>{
            return data.json();
        }).then((goals)=>{
        console.log("name of goals: "+ goals[0].nameOfGoal);
        let data1="";
        goals.map((values)=>{
            console.log("test: " + values.nameOfGoal);
            data1+=`<div class="tile">
                <img class="img_goal" src="../Java/Assets/goals.jpg" alt="default_image">
                <h3 id="goal">${values.nameOfGoal}</h3>
                <h3 id="points">points: 3</h3>
            </div>`
        });
        document.getElementById('all-goals').innerHTML=data1;
    }).catch((err)=>{
        console.log(err)
    })
}