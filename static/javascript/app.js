var ramen1 = $(".ramen-1");
var label1 = $(".ramen-label-1");
var showRamen1 = false;

label1.click(function() {
  if (!showRamen1) {
    showRamen1 = true;
    ramen1.attr("src", "./../../image/ramen-full.png");
  } else {
    showRamen1 = false;
    ramen1.attr("src", "./../../image/ramen-empty.png")
  }
});

var ramen2 = $(".ramen-2");
var label2 = $(".ramen-label-2");
var showRamen2 = false;

label2.click(function() {
  if (!showRamen2) {
    showRamen2 = true;
    ramen2.attr("src", "./../../image/ramen-full.png");
  } else {
    showRamen2 = false;
    ramen2.attr("src", "./../../image/ramen-empty.png")
  }
});

var ramen3 = $(".ramen-3");
var label3 = $(".ramen-label-3");
var showRamen3 = false;

label3.click(function() {
  if (!showRamen3) {
    showRamen3 = true;
    ramen3.attr("src", "./../../image/ramen-full.png");
  } else {
    showRamen3 = false;
    ramen3.attr("src", "./../../image/ramen-empty.png")
  }
});

var ramen4 = $(".ramen-4");
var label4 = $(".ramen-label-4");
var showRamen4 = false;

label4.click(function() {
  if (!showRamen4) {
    showRamen4 = true;
    ramen4.attr("src", "./../../image/ramen-full.png");
  } else {
    showRamen4 = false;
    ramen4.attr("src", "./../../image/ramen-empty.png")
  }
});

var ramen5 = $(".ramen-5");
var label5 = $(".ramen-label-5");
var showRamen5 = false;

label5.click(function() {
  if (!showRamen5) {
    showRamen5 = true;
    ramen5.attr("src", "./../../image/ramen-full.png");
  } else {
    showRamen5 = false;
    ramen5.attr("src", "./../../image/ramen-empty.png")
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
