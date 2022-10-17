function haalGoalDetailOp() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var paramValue = url.searchParams.get("deGoalId");
    console.log(paramValue)

    fetch(`http://localhost:8082/goals/id/${paramValue}`)
        .then((data)=>{
            console.log(data);
            return data.json();
        }).then((goaldata)=>{
        document.getElementById('singleGoal')
            .innerHTML=goaldata.nameOfGoal;
    }).catch((err)=>{
        console.log(err)
    })
}





