
      function getBase64(file) {
        
        let imageObj = {};
        // Filereader kan voor ons de file input uitlezen
        let reader = new FileReader();
        reader.readAsDataURL(file);
        // Op het moment dat de file is geladen voer deze function uit
        reader.onload = function () {
          // reader.result bevat de base64 code

          console.log(reader.result);
          let imageUrl = reader.result;
          imageObj.imageCode = imageUrl;
        const imageCodeJSON = JSON.stringify(imageObj);
        serverRequest(imageCodeJSON);

        };
        reader.onerror = function (error) {
          console.log("Error: ", error);
        };
      }

      function serverRequest(json){
    console.log("Wowzerts");
    fetch("http://javabackend.azurewebsites.net/image", { headers: {

            'Content-Type': 'application/json'}, method: 'POST', body: json})
        .then((response) => response.json())
        .then((data) => console.log(data));

}

      // loadImage laad de geselecteerde image in de file input
      function uploadImage() {
        // Een file input heeft een files property van het type array en bevat alle bestanden die geselecteerd zijn
        let f = document.getElementById("image").files[0];

        // Get the base 64
        getBase64(f);
      }

      


  function loadImage() {
        fetch(`http://javabackend.azurewebsites.net/image/73`)
  .then((response) => {console.log(response);
  return response.json();
  }).then(imgBlob => {console.log(imgBlob);
    console.log(imgBlob.imageCode);
  document.getElementById('pokahontas').src = imgBlob.imageCode;
  })
}
