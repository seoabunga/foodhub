function getRestaurant1() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant1").get().then(
      function(doc){
        // console.log(doc.data().motto);
        document.getElementById("restaurant1-name").innerHTML = doc.data().Name;
        document.getElementById("restaurant1-address").innerHTML = doc.data().Location;
        document.getElementById("restaurant1-motto").innerHTML = doc.data().Motto;
        document.getElementById("restaurant1-phone-number").innerHTML = doc.data().PhoneNumber;
      }
    )
  })
}

function getRestaurant2() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant2").get().then(
      function(doc){
        // console.log(doc.data().location);
        document.getElementById("restaurant2-name").innerHTML = doc.data().Name;
        document.getElementById("restaurant2-address").innerHTML = doc.data().Location;
        document.getElementById("restaurant2-motto").innerHTML = doc.data().Motto;
        document.getElementById("restaurant2-phone-number").innerHTML = doc.data().PhoneNumber;
      }
    )
  })
}

function getRestaurant3() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant3").get().then(
      function(doc){
        // console.log(doc.data().location);
        document.getElementById("restaurant3-name").innerHTML = doc.data().Name;
        document.getElementById("restaurant3-address").innerHTML = doc.data().Location;
        document.getElementById("restaurant3-motto").innerHTML = doc.data().Motto;
        document.getElementById("restaurant3-phone-number").innerHTML = doc.data().PhoneNumber;
      }
    )
  })
}

function getRestaurant4() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant4").get().then(
      function(doc){
        // console.log(doc.data().location);
        document.getElementById("restaurant4-name").innerHTML = doc.data().Name;
        document.getElementById("restaurant4-address").innerHTML = doc.data().Location;
        document.getElementById("restaurant4-motto").innerHTML = doc.data().Motto;
        document.getElementById("restaurant4-phone-number").innerHTML = doc.data().PhoneNumber;
      }
    )
  })
}

function getRestaurant5() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant5").get().then(
      function(doc){
        // console.log(doc.data().location);
        document.getElementById("restaurant5-name").innerHTML = doc.data().Name;
        document.getElementById("restaurant5-address").innerHTML = doc.data().Location;
        document.getElementById("restaurant5-motto").innerHTML = doc.data().Motto;
        document.getElementById("restaurant5-phone-number").innerHTML = doc.data().PhoneNumber;
      }
    )
  })
}

getRestaurant1();
getRestaurant2();
getRestaurant3();
getRestaurant4();
getRestaurant5();
