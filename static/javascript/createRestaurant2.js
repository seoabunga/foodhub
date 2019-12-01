function createRestaurant2() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant2").get().then(
      function(doc){
        // console.log(doc.data().motto);
        document.getElementById("restaurant2-name").innerHTML = doc.data().name;
        document.getElementById("restaurant2-address").innerHTML = doc.data().location;
        document.getElementById("restaurant2-phone-number").innerHTML = doc.data().phoneNumber;
      }
    )
  })
}

createRestaurant2();
