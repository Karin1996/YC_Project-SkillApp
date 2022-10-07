function addGoal(){
    let goalObj = {};

    //Get the name and password from the input fields
    let goalName = document.getElementById("name-of-goal").value;
    let description = document.getElementById("description").value;

        //turn the values into an object
        goalObj.nameOfGoal = goalName;
        goalObj.description = description;

        //convert the object into a JSON file
        const goalJSON = JSON.stringify(goalObj);
        console.log("Goal array met input user " + goalJSON);
        goalRequest(goalJSON);
    }

function goalRequest(json){
    console.log("goalsss");
    fetch("http://localhost:8082/goals", { headers: {

            'Content-Type': 'application/json'}, method: 'POST', body: json})
        .then((response) => response.json())
        .then((data) => console.log(data));
}