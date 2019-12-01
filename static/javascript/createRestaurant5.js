function createRestaurant5() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant5").get().then(
      function(doc){
        // console.log(doc.data().motto);
        document.getElementById("restaurant5-name").innerHTML = doc.data().Name;
        document.getElementById("restaurant5-address").innerHTML = doc.data().Location;
        document.getElementById("restaurant5-phone-number").innerHTML = doc.data().phoneNumber;
      }
    )
  })
}

createRestaurant5();
