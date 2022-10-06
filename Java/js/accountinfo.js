function getUser() {
      console.log("in getUser()");
    //verander dit van 1 naar de getUser() fetch() implementatie van profile.js

    fetch(http://localhost:8082/users/id/1)
        .then((data)=>{
            console.log("mark1");
            console.log(data);
            return data.json();
        })
        .then((userdata)=>{
        console.log("mark2");
        }
             console.log(userdata.id);
             document.getElementById('username')
                 .innerHTML=userdata.name;
    })
    .catch((err)=>{
    console.log("mark3");
        console.log(err)
    })
//}

//function displayAccount(){
//        //verander dit van 1 naar de getUser() fetch() implementatie van profile.js
//        fetch(http://localhost:8082/users/id/1)
//            .then((data)=>{
//                console.log(data);
//                return data.json();
//            }).then((userdata)=>{
//                 console.log(userdata.id);
//                 document.getElementById('displayname')
//                     .innerHTML=userdata.name;
//        }).catch((err)=>{
//            console.log(err)
//        })
//    }
}