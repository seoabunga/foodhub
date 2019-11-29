function getRestaurant() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant1").get().then(
      function(doc){
        // console.log(doc.data().location);
        document.getElementById("restaurant-name").innerHTML = doc.data().name;
        document.getElementById("restaurant-address").innerHTML = doc.data().location;
        document.getElementById("restaurant-motto").innerHTML = doc.data().motto;
        document.getElementById("restaurant-phone-number").innerHTML = doc.data().phoneNumber;
      }
    )
  })
}

getRestaurant();
