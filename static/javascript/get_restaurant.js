function getRestaurant() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant1").get().then(
      function(doc){
        document.getElementById("restaurant-info-container").innerHTML = doc.data().name;
      }
    )
  })
}

getRestaurant();
