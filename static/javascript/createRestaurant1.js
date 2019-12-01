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

function getMenu() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant1")
    .collection("menu").doc("menuItem1")
    .get().then(
      function(doc){
        document.getElementById("menu1-name").innerHTML = doc.data().Name;
        document.getElementById("menu1-price").innerHTML = doc.data().Price;
      }
    )
  })
}

createRestaurant1();
getMenu();
