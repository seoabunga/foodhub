function createRestaurant1() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant1").get().then(
      function(doc){
        // console.log(doc.data().motto);
        document.getElementById("restaurant1-name").innerHTML = doc.data().name;
        document.getElementById("restaurant1-address").innerHTML = doc.data().location;
        document.getElementById("restaurant1-phone-number").innerHTML = doc.data().phoneNumber;
      }
    )
  })
}

createRestaurant1();
