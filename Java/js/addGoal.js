

let goalObj = {};
function addGoal(){

    

    //Get the name and password from the input fields
    let goalName = document.getElementById("name-of-goal").value;
    let description = document.getElementById("description").value;

        //turn the values into an object
        goalObj.nameOfGoal = goalName;
        goalObj.description = description;
        //imageObj.goal = goalObj;
        //convert the object into a JSON file
        const goalJSON = JSON.stringify(goalObj);
  //      console.log(imageObj);

        goalRequest(goalJSON);
    }

function goalRequest(json){
    console.log("goalsssFELIX");
    console.log(json);
    fetch("http://https://javabackend.azurewebsites.net/goals", { headers: {

            'Content-Type': 'application/json'}, method: 'POST', body: json})
        // .then((response) => response.json())
        // .then((data) => console.log(data));
}


function getBase64(file) {
  let imageObj = {};   
    // Filereader kan voor ons de file input uitlezen
    let reader = new FileReader();
    reader.readAsDataURL(file);
    // Op het moment dat de file is geladen voer deze function uit
    reader.onload = function () {
      // reader.result bevat de base64 code

    // console.log(reader.result);
      let imageUrl = reader.result;
      imageObj.imageCode = imageUrl;
      console.log(imageObj);
      console.log("NOG EEN CHECK");
      goalObj.image = imageObj;
   // const imageCodeJSON = JSON.stringify(imageObj);
   // serverRequest(imageCodeJSON);

    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  function serverRequest(json){
//console.log("Wowzerts");
fetch("http://https://javabackend.azurewebsites.net/image", { headers: {

        'Content-Type': 'application/json'}, method: 'POST', body: json})
    .then((response) => response.json())
    .then((data) => console.log(data));

}

  // loadImage laad de geselecteerde image in de file input
  function uploadImage() {
    // Een file input heeft een files property van het type array en bevat alle bestanden die geselecteerd zijn
    let f = document.getElementById("goal-image").files[0];
    console.log("hij doet het!");
    // Get the base 64
    getBase64(f);
  }

  


function loadImage() {
    fetch(`http://https://javabackend.azurewebsites.net/image/73`)
.then((response) => {console.log(response);
return response.json();
}).then(imgBlob => {console.log(imgBlob);
console.log(imgBlob.imageCode);
document.getElementById('pokahontas').src = imgBlob.imageCode;
})
}
