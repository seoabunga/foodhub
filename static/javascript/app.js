// RAMEN FUNCTIONS *************
//  ****************************
// *****************************

var ramen1 = $(".ramen-1");
var ramenLabel1 = $(".ramen-label-1");
var showRamen1 = false;

ramenLabel1.click(function() {
  if (!showRamen1) {
    showRamen1 = true;
    ramen1.attr("src", "./../../image/ramen-full.png");
  }

  else if ((showRamen1) && !(showRamen2 || showRamen3 || showRamen4 || showRamen5)) {
    showRamen1 = false;
    showRamen2 = false;
    showRamen3 = false;
    showRamen4 = false;
    showRamen5 = false;
    ramen1.attr("src", "./../../image/ramen-empty.png");
    ramen2.attr("src", "./../../image/ramen-empty.png");
    ramen3.attr("src", "./../../image/ramen-empty.png");
    ramen4.attr("src", "./../../image/ramen-empty.png");
    ramen5.attr("src", "./../../image/ramen-empty.png");
  }

  else {
    showRamen1 = true;
    showRamen2 = false;
    showRamen3 = false;
    showRamen4 = false;
    showRamen5 = false;
    ramen1.attr("src", "./../../image/ramen-full.png");
    ramen2.attr("src", "./../../image/ramen-empty.png");
    ramen3.attr("src", "./../../image/ramen-empty.png");
    ramen4.attr("src", "./../../image/ramen-empty.png");
    ramen5.attr("src", "./../../image/ramen-empty.png");
  }
});

var ramen2 = $(".ramen-2");
var ramenLabel2 = $(".ramen-label-2");
var showRamen2 = false;

ramenLabel2.click(function() {
  if (!showRamen2) {
    showRamen1 = true;
    showRamen2 = true;
    ramen1.attr("src", "./../../image/ramen-full.png");
    ramen2.attr("src", "./../../image/ramen-full.png");
  }

  else if ((showRamen1 && showRamen2) && !(showRamen3 || showRamen4 || showRamen5)) {
    showRamen1 = false;
    showRamen2 = false;
    showRamen3 = false;
    showRamen4 = false;
    showRamen5 = false;
    ramen1.attr("src", "./../../image/ramen-empty.png");
    ramen2.attr("src", "./../../image/ramen-empty.png");
    ramen3.attr("src", "./../../image/ramen-empty.png");
    ramen4.attr("src", "./../../image/ramen-empty.png");
    ramen5.attr("src", "./../../image/ramen-empty.png");
  }

  else {
    showRamen1 = true;
    showRamen2 = true;
    showRamen3 = false;
    showRamen4 = false;
    showRamen5 = false;
    ramen1.attr("src", "./../../image/ramen-full.png");
    ramen2.attr("src", "./../../image/ramen-full.png");
    ramen3.attr("src", "./../../image/ramen-empty.png");
    ramen4.attr("src", "./../../image/ramen-empty.png");
    ramen5.attr("src", "./../../image/ramen-empty.png");
  }
});

var ramen3 = $(".ramen-3");
var ramenLabel3 = $(".ramen-label-3");
var showRamen3 = false;

ramenLabel3.click(function() {
  if (!showRamen3) {
    showRamen1 = true;
    showRamen2 = true;
    showRamen3 = true;
    ramen1.attr("src", "./../../image/ramen-full.png");
    ramen2.attr("src", "./../../image/ramen-full.png");
    ramen3.attr("src", "./../../image/ramen-full.png");
  }

  else if ((showRamen1 && showRamen2 && showRamen3) && !(showRamen4 || showRamen5)) {
    showRamen1 = false;
    showRamen2 = false;
    showRamen3 = false;
    showRamen4 = false;
    showRamen5 = false;
    ramen1.attr("src", "./../../image/ramen-empty.png");
    ramen2.attr("src", "./../../image/ramen-empty.png");
    ramen3.attr("src", "./../../image/ramen-empty.png");
    ramen4.attr("src", "./../../image/ramen-empty.png");
    ramen5.attr("src", "./../../image/ramen-empty.png");
  }

  else {
    showRamen1 = true;
    showRamen2 = true;
    showRamen3 = true;
    showRamen4 = false;
    showRamen5 = false;
    ramen1.attr("src", "./../../image/ramen-full.png");
    ramen2.attr("src", "./../../image/ramen-full.png");
    ramen3.attr("src", "./../../image/ramen-full.png");
    ramen4.attr("src", "./../../image/ramen-empty.png");
    ramen5.attr("src", "./../../image/ramen-empty.png");
  }
});

var ramen4 = $(".ramen-4");
var ramenLabel4 = $(".ramen-label-4");
var showRamen4 = false;

ramenLabel4.click(function() {
  if (!showRamen4) {
    showRamen1 = true;
    showRamen2 = true;
    showRamen3 = true;
    showRamen4 = true;
    ramen1.attr("src", "./../../image/ramen-full.png");
    ramen2.attr("src", "./../../image/ramen-full.png");
    ramen3.attr("src", "./../../image/ramen-full.png");
    ramen4.attr("src", "./../../image/ramen-full.png");
  }

  else if ((showRamen1 && showRamen2 && showRamen3 && showRamen4) && !showRamen5) {
    showRamen1 = false;
    showRamen2 = false;
    showRamen3 = false;
    showRamen4 = false;
    showRamen5 = false;
    ramen1.attr("src", "./../../image/ramen-empty.png");
    ramen2.attr("src", "./../../image/ramen-empty.png");
    ramen3.attr("src", "./../../image/ramen-empty.png");
    ramen4.attr("src", "./../../image/ramen-empty.png");
    ramen5.attr("src", "./../../image/ramen-empty.png");
  }

  else {
    showRamen1 = true;
    showRamen2 = true;
    showRamen3 = true;
    showRamen4 = true;
    showRamen5 = false;
    ramen1.attr("src", "./../../image/ramen-full.png");
    ramen2.attr("src", "./../../image/ramen-full.png");
    ramen3.attr("src", "./../../image/ramen-full.png");
    ramen4.attr("src", "./../../image/ramen-full.png");
    ramen5.attr("src", "./../../image/ramen-empty.png");
  }
});

var ramen5 = $(".ramen-5");
var ramenLabel5 = $(".ramen-label-5");
var showRamen5 = false;

ramenLabel5.click(function() {
  if (!showRamen5) {
    showRamen1 = true;
    showRamen2 = true;
    showRamen3 = true;
    showRamen4 = true;
    showRamen5 = true;
    ramen1.attr("src", "./../../image/ramen-full.png");
    ramen2.attr("src", "./../../image/ramen-full.png");
    ramen3.attr("src", "./../../image/ramen-full.png");
    ramen4.attr("src", "./../../image/ramen-full.png");
    ramen5.attr("src", "./../../image/ramen-full.png");
  }

  else {
    showRamen1 = false;
    showRamen2 = false;
    showRamen3 = false;
    showRamen4 = false;
    showRamen5 = false;
    ramen1.attr("src", "./../../image/ramen-empty.png");
    ramen2.attr("src", "./../../image/ramen-empty.png");
    ramen3.attr("src", "./../../image/ramen-empty.png");
    ramen4.attr("src", "./../../image/ramen-empty.png");
    ramen5.attr("src", "./../../image/ramen-empty.png");
  }
});



// steak FUNCTIONS *************
//  ****************************
// *****************************
var steak1 = $(".steak-1");
var steakLabel1 = $(".steak-label-1");
var showSteak1 = false;

steakLabel1.click(function() {
  if (!showSteak1) {
    showSteak1 = true;
    steak1.attr("src", "./../../image/steak-full.png");
  }

  else if ((showSteak1) && !(showSteak2 || showSteak3 || showSteak4 || showSteak5)) {
    showSteak1 = false;
    showSteak2 = false;
    showSteak3 = false;
    showSteak4 = false;
    showSteak5 = false;
    steak1.attr("src", "./../../image/steak-empty.png");
    steak2.attr("src", "./../../image/steak-empty.png");
    steak3.attr("src", "./../../image/steak-empty.png");
    steak4.attr("src", "./../../image/steak-empty.png");
    steak5.attr("src", "./../../image/steak-empty.png");
  }

  else {
    showSteak1 = true;
    showSteak2 = false;
    showSteak3 = false;
    showSteak4 = false;
    showSteak5 = false;
    steak1.attr("src", "./../../image/steak-full.png");
    steak2.attr("src", "./../../image/steak-empty.png");
    steak3.attr("src", "./../../image/steak-empty.png");
    steak4.attr("src", "./../../image/steak-empty.png");
    steak5.attr("src", "./../../image/steak-empty.png");
  }
});

var steak2 = $(".steak-2");
var steakLabel2 = $(".steak-label-2");
var showSteak2 = false;

steakLabel2.click(function() {
  if (!showSteak2) {
    showSteak1 = true;
    showSteak2 = true;
    steak1.attr("src", "./../../image/steak-full.png");
    steak2.attr("src", "./../../image/steak-full.png");
  }

  else if ((showSteak1 && showSteak2) && !(showSteak3 || showSteak4 || showSteak5)) {
    showSteak1 = false;
    showSteak2 = false;
    showSteak3 = false;
    showSteak4 = false;
    showSteak5 = false;
    steak1.attr("src", "./../../image/steak-empty.png");
    steak2.attr("src", "./../../image/steak-empty.png");
    steak3.attr("src", "./../../image/steak-empty.png");
    steak4.attr("src", "./../../image/steak-empty.png");
    steak5.attr("src", "./../../image/steak-empty.png");
  }

  else {
    showSteak1 = true;
    showSteak2 = true;
    showSteak3 = false;
    showSteak4 = false;
    showSteak5 = false;
    steak1.attr("src", "./../../image/steak-full.png");
    steak2.attr("src", "./../../image/steak-full.png");
    steak3.attr("src", "./../../image/steak-empty.png");
    steak4.attr("src", "./../../image/steak-empty.png");
    steak5.attr("src", "./../../image/steak-empty.png");
  }
});

var steak3 = $(".steak-3");
var steakLabel3 = $(".steak-label-3");
var showSteak3 = false;

steakLabel3.click(function() {
  if (!showSteak3) {
    showSteak1 = true;
    showSteak2 = true;
    showSteak3 = true;
    steak1.attr("src", "./../../image/steak-full.png");
    steak2.attr("src", "./../../image/steak-full.png");
    steak3.attr("src", "./../../image/steak-full.png");
  }

  else if ((showSteak1 && showSteak2 && showSteak3) && !(showSteak4 || showSteak5)) {
    showSteak1 = false;
    showSteak2 = false;
    showSteak3 = false;
    showSteak4 = false;
    showSteak5 = false;
    steak1.attr("src", "./../../image/steak-empty.png");
    steak2.attr("src", "./../../image/steak-empty.png");
    steak3.attr("src", "./../../image/steak-empty.png");
    steak4.attr("src", "./../../image/steak-empty.png");
    steak5.attr("src", "./../../image/steak-empty.png");
  }

  else {
    showSteak1 = true;
    showSteak2 = true;
    showSteak3 = true;
    showSteak4 = false;
    showSteak5 = false;
    steak1.attr("src", "./../../image/steak-full.png");
    steak2.attr("src", "./../../image/steak-full.png");
    steak3.attr("src", "./../../image/steak-full.png");
    steak4.attr("src", "./../../image/steak-empty.png");
    steak5.attr("src", "./../../image/steak-empty.png");
  }
});

var steak4 = $(".steak-4");
var steakLabel4 = $(".steak-label-4");
var showSteak4 = false;

steakLabel4.click(function() {
  if (!showSteak4) {
    showSteak1 = true;
    showSteak2 = true;
    showSteak3 = true;
    showSteak4 = true;
    steak1.attr("src", "./../../image/steak-full.png");
    steak2.attr("src", "./../../image/steak-full.png");
    steak3.attr("src", "./../../image/steak-full.png");
    steak4.attr("src", "./../../image/steak-full.png");
  }

  else if ((showSteak1 && showSteak2 && showSteak3 && showSteak4) && !showSteak5) {
    showSteak1 = false;
    showSteak2 = false;
    showSteak3 = false;
    showSteak4 = false;
    showSteak5 = false;
    steak1.attr("src", "./../../image/steak-empty.png");
    steak2.attr("src", "./../../image/steak-empty.png");
    steak3.attr("src", "./../../image/steak-empty.png");
    steak4.attr("src", "./../../image/steak-empty.png");
    steak5.attr("src", "./../../image/steak-empty.png");
  }

  else {
    showSteak1 = true;
    showSteak2 = true;
    showSteak3 = true;
    showSteak4 = true;
    showSteak5 = false;
    steak1.attr("src", "./../../image/steak-full.png");
    steak2.attr("src", "./../../image/steak-full.png");
    steak3.attr("src", "./../../image/steak-full.png");
    steak4.attr("src", "./../../image/steak-full.png");
    steak5.attr("src", "./../../image/steak-empty.png");
  }
});

var steak5 = $(".steak-5");
var steakLabel5 = $(".steak-label-5");
var showSteak5 = false;

steakLabel5.click(function() {
  if (!showSteak5) {
    showSteak1 = true;
    showSteak2 = true;
    showSteak3 = true;
    showSteak4 = true;
    showSteak5 = true;
    steak1.attr("src", "./../../image/steak-full.png");
    steak2.attr("src", "./../../image/steak-full.png");
    steak3.attr("src", "./../../image/steak-full.png");
    steak4.attr("src", "./../../image/steak-full.png");
    steak5.attr("src", "./../../image/steak-full.png");
  }

  else {
    showSteak1 = false;
    showSteak2 = false;
    showSteak3 = false;
    showSteak4 = false;
    showSteak5 = false;
    steak1.attr("src", "./../../image/steak-empty.png");
    steak2.attr("src", "./../../image/steak-empty.png");
    steak3.attr("src", "./../../image/steak-empty.png");
    steak4.attr("src", "./../../image/steak-empty.png");
    steak5.attr("src", "./../../image/steak-empty.png");
  }
});

// ---------------------------------------------
// If the currently logged in user is authenticated,
// then log this user out of the system.
// ---------------------------------------------
function logoutUser() {
  firebase.auth().onAuthStateChanged(function (user) {
    var promise = firebase.auth().signOut();
    promise.then(function () {
      // Sign-out successful.
      //alert("User has been signed out.");
      location.href = "./index.html";
    }).catch(function(error){
      // An error happened.
    });
  });
}

function showUserName(n){
  firebase.auth().onAuthStateChanged(function (user){
    db.collection("users").doc(user.uid).onSnapshot(function(d) {
      console.log("Current Name: ", d.data());
      var x = d.data().name;
      console.log(x);
      document.getElementById("test").innerHTML = x;
    });
  })
}

function welcome() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant1").get().then(
      function(doc){
        document.getElementById("restaurant-info-container").innerHTML = doc.data().name;
      }
    )
  })
}

showUserName();

// var showStar = false;
// for (var i = 1; i < 6; i++) {
//   $(".star-label-" + i).click(function() {
//     if (!showStar) {
//       showStar = true;
//       $(".star-" + i).attr("src", "./../../image/star_yellow.png");
//     } else {
//       showStar = false;
//       $(".star-" + i).attr("src", "./../../image/star_gray.png");
//     }
//   });
// }
