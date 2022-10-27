let goalObj = {};
function addGoal(){

    let goalName = document.getElementById("name-of-goal").value;
    let description = document.getElementById("description").value;

        goalObj.nameOfGoal = goalName;
        goalObj.description = description;
        const goalJSON = JSON.stringify(goalObj);

        goalRequest(goalJSON)
    }

function goalRequest(json){
    console.log(json);
    fetch("https://javabackend.azurewebsites.net/goals",
        { headers: {
            'Content-Type': 'application/json'}, method: 'POST', body: json
        }).then(goToGoalPage)
}

function goToGoalPage() {
    location.href = "../Java/GoalPage.html";
}


function getBase64(file) {
    let imageObj = {};
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      let imageUrl = reader.result;
      imageObj.imageCode = imageUrl;
      console.log(imageObj);
      console.log("NOG EEN CHECK");
      goalObj.image = imageObj;

    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  function serverRequest(json) {
    fetch("https://javabackend.azurewebsites.net/image",
        { headers: {
        'Content-Type': 'application/json'}, method: 'POST', body: json
        })
    .then((response) => response.json())
    .then((data) => console.log(data));
}


  function uploadImage() {
    let f = document.getElementById("goal-image").files[0];
    console.log("hij doet het!");

    getBase64(f);
  }





//
// function loadImage() {
//     fetch(`http://localhost:8082/image/73`)
// .then((response) => {console.log(response);
// return response.json();
// }).then(imgBlob => {console.log(imgBlob);
// console.log(imgBlob.imageCode);
// document.getElementById('pokahontas').src = imgBlob.imageCode;
// })
// }
