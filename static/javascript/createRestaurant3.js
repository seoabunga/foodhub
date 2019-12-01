function createRestaurant3() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant3").get().then(
      function(doc){
        // console.log(doc.data().motto);
        document.getElementById("restaurant3-name").innerHTML = doc.data().Name;
        document.getElementById("restaurant3-address").innerHTML = doc.data().Location;
        document.getElementById("restaurant3-phone-number").innerHTML = doc.data().phoneNumber;
      }
    )
  })
}

createRestaurant3();
