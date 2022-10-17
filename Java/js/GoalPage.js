function getAllGoals() {

    fetch(`https://javabackend.azurewebsites.net/goals`)
        .then((data)=>{
            return data.json();
        }).then((goals)=>{
        let data1="";
        goals.map((values)=>{
           
           // console.log("test: " + values.nameOfGoal);
            //loadImage(values.image);
            if (values.image != null)
            {
            data1+=`<div class="tile" onclick="getGoal(${values.id})">
                <img class="img_goal" src="${values.image.imageCode}" alt="default_image">
                <h3 id="goal">${values.nameOfGoal}</h3>
                <h3 id="points">points: 3</h3>
            </div>`
            }
            else
            {
                data1+=`<div class="tile" onclick="getGoal(${values.id})">
                <img class="img_goal" src="../Java/Assets/goals.jpg" alt="default_image">
                <h3 id="goal">${values.nameOfGoal}</h3>
                <h3 id="points">points: 3</h3>
            </div>`
            }
        });
        document.getElementById('all-goals').innerHTML=data1;
    }).catch((err)=>{
        console.log(err)
    })

}

function loadImage(idImage) {
    console.log("dit is de id: " + idImage);
    fetch(`https://javabackend.azurewebsites.net/image/${imageId}`)
.then((response) => {console.log(response);
return response.json();
}).then(imgBlob => {console.log(imgBlob);
console.log(imgBlob.imageCode);
document.getElementById('mulan').src = imgBlob.imageCode;
})
}

function getGoal(goalId) {
    location.href = "../Java/GoalDetailPage.html?deGoalId="+goalId;
}