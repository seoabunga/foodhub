function createRestaurant4() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant4").get().then(
      function(doc){
        // console.log(doc.data().motto);
        document.getElementById("restaurant4-name").innerHTML = doc.data().Name;
        document.getElementById("restaurant4-address").innerHTML = doc.data().Location;
        document.getElementById("restaurant4-phone-number").innerHTML = doc.data().phoneNumber;
      }
    )
  })
}

createRestaurant4();
