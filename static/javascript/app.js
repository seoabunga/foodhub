/* Functions for Ramen stickers */
var ramen1 = $(".ramen-1");
var ramenLabel1 = $(".ramen-label-1");
var showRamen1 = false;

ramenLabel1.click(function() {
  if (!showRamen1) {
    showRamen1 = true;
    ramen1.attr("src", "./image/ramen-full.png");
  }

  else if ((showRamen1) && !(showRamen2 || showRamen3 || showRamen4 || showRamen5)) {
    showRamen1 = false;
    showRamen2 = false;
    showRamen3 = false;
    showRamen4 = false;
    showRamen5 = false;
    ramen1.attr("src", "./image/ramen-empty.png");
    ramen2.attr("src", "./image/ramen-empty.png");
    ramen3.attr("src", "./image/ramen-empty.png");
    ramen4.attr("src", "./image/ramen-empty.png");
    ramen5.attr("src", "./image/ramen-empty.png");
  }

  else {
    showRamen1 = true;
    showRamen2 = false;
    showRamen3 = false;
    showRamen4 = false;
    showRamen5 = false;
    ramen1.attr("src", "./image/ramen-full.png");
    ramen2.attr("src", "./image/ramen-empty.png");
    ramen3.attr("src", "./image/ramen-empty.png");
    ramen4.attr("src", "./image/ramen-empty.png");
    ramen5.attr("src", "./image/ramen-empty.png");
  }
});

var ramen2 = $(".ramen-2");
var ramenLabel2 = $(".ramen-label-2");
var showRamen2 = false;

ramenLabel2.click(function() {
  if (!showRamen2) {
    showRamen1 = true;
    showRamen2 = true;
    ramen1.attr("src", "./image/ramen-full.png");
    ramen2.attr("src", "./image/ramen-full.png");
  }

  else if ((showRamen1 && showRamen2) && !(showRamen3 || showRamen4 || showRamen5)) {
    showRamen1 = false;
    showRamen2 = false;
    showRamen3 = false;
    showRamen4 = false;
    showRamen5 = false;
    ramen1.attr("src", "./image/ramen-empty.png");
    ramen2.attr("src", "./image/ramen-empty.png");
    ramen3.attr("src", "./image/ramen-empty.png");
    ramen4.attr("src", "./image/ramen-empty.png");
    ramen5.attr("src", "./image/ramen-empty.png");
  }

  else {
    showRamen1 = true;
    showRamen2 = true;
    showRamen3 = false;
    showRamen4 = false;
    showRamen5 = false;
    ramen1.attr("src", "./image/ramen-full.png");
    ramen2.attr("src", "./image/ramen-full.png");
    ramen3.attr("src", "./image/ramen-empty.png");
    ramen4.attr("src", "./image/ramen-empty.png");
    ramen5.attr("src", "./image/ramen-empty.png");
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
    ramen1.attr("src", "./image/ramen-full.png");
    ramen2.attr("src", "./image/ramen-full.png");
    ramen3.attr("src", "./image/ramen-full.png");
  }

  else if ((showRamen1 && showRamen2 && showRamen3) && !(showRamen4 || showRamen5)) {
    showRamen1 = false;
    showRamen2 = false;
    showRamen3 = false;
    showRamen4 = false;
    showRamen5 = false;
    ramen1.attr("src", "./image/ramen-empty.png");
    ramen2.attr("src", "./image/ramen-empty.png");
    ramen3.attr("src", "./image/ramen-empty.png");
    ramen4.attr("src", "./image/ramen-empty.png");
    ramen5.attr("src", "./image/ramen-empty.png");
  }

  else {
    showRamen1 = true;
    showRamen2 = true;
    showRamen3 = true;
    showRamen4 = false;
    showRamen5 = false;
    ramen1.attr("src", "./image/ramen-full.png");
    ramen2.attr("src", "./image/ramen-full.png");
    ramen3.attr("src", "./image/ramen-full.png");
    ramen4.attr("src", "./image/ramen-empty.png");
    ramen5.attr("src", "./image/ramen-empty.png");
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
    ramen1.attr("src", "./image/ramen-full.png");
    ramen2.attr("src", "./image/ramen-full.png");
    ramen3.attr("src", "./image/ramen-full.png");
    ramen4.attr("src", "./image/ramen-full.png");
  }

  else if ((showRamen1 && showRamen2 && showRamen3 && showRamen4) && !showRamen5) {
    showRamen1 = false;
    showRamen2 = false;
    showRamen3 = false;
    showRamen4 = false;
    showRamen5 = false;
    ramen1.attr("src", "./image/ramen-empty.png");
    ramen2.attr("src", "./image/ramen-empty.png");
    ramen3.attr("src", "./image/ramen-empty.png");
    ramen4.attr("src", "./image/ramen-empty.png");
    ramen5.attr("src", "./image/ramen-empty.png");
  }

  else {
    showRamen1 = true;
    showRamen2 = true;
    showRamen3 = true;
    showRamen4 = true;
    showRamen5 = false;
    ramen1.attr("src", "./image/ramen-full.png");
    ramen2.attr("src", "./image/ramen-full.png");
    ramen3.attr("src", "./image/ramen-full.png");
    ramen4.attr("src", "./image/ramen-full.png");
    ramen5.attr("src", "./image/ramen-empty.png");
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
    ramen1.attr("src", "./image/ramen-full.png");
    ramen2.attr("src", "./image/ramen-full.png");
    ramen3.attr("src", "./image/ramen-full.png");
    ramen4.attr("src", "./image/ramen-full.png");
    ramen5.attr("src", "./image/ramen-full.png");
  }

  else {
    showRamen1 = false;
    showRamen2 = false;
    showRamen3 = false;
    showRamen4 = false;
    showRamen5 = false;
    ramen1.attr("src", "./image/ramen-empty.png");
    ramen2.attr("src", "./image/ramen-empty.png");
    ramen3.attr("src", "./image/ramen-empty.png");
    ramen4.attr("src", "./image/ramen-empty.png");
    ramen5.attr("src", "./image/ramen-empty.png");
  }
});



/* Steak Quality Rating stickers */
var steak1 = $(".steak-1");
var steakLabel1 = $(".steak-label-1");
var showSteak1 = false;

steakLabel1.click(function() {
  if (!showSteak1) {
    showSteak1 = true;
    steak1.attr("src", "./image/steak-full.png");
  }

  else if ((showSteak1) && !(showSteak2 || showSteak3 || showSteak4 || showSteak5)) {
    showSteak1 = false;
    showSteak2 = false;
    showSteak3 = false;
    showSteak4 = false;
    showSteak5 = false;
    steak1.attr("src", "./image/steak-empty.png");
    steak2.attr("src", "./image/steak-empty.png");
    steak3.attr("src", "./image/steak-empty.png");
    steak4.attr("src", "./image/steak-empty.png");
    steak5.attr("src", "./image/steak-empty.png");
  }

  else {
    showSteak1 = true;
    showSteak2 = false;
    showSteak3 = false;
    showSteak4 = false;
    showSteak5 = false;
    steak1.attr("src", "./image/steak-full.png");
    steak2.attr("src", "./image/steak-empty.png");
    steak3.attr("src", "./image/steak-empty.png");
    steak4.attr("src", "./image/steak-empty.png");
    steak5.attr("src", "./image/steak-empty.png");
  }
});

var steak2 = $(".steak-2");
var steakLabel2 = $(".steak-label-2");
var showSteak2 = false;

steakLabel2.click(function() {
  if (!showSteak2) {
    showSteak1 = true;
    showSteak2 = true;
    steak1.attr("src", "./image/steak-full.png");
    steak2.attr("src", "./image/steak-full.png");
  }

  else if ((showSteak1 && showSteak2) && !(showSteak3 || showSteak4 || showSteak5)) {
    showSteak1 = false;
    showSteak2 = false;
    showSteak3 = false;
    showSteak4 = false;
    showSteak5 = false;
    steak1.attr("src", "./image/steak-empty.png");
    steak2.attr("src", "./image/steak-empty.png");
    steak3.attr("src", "./image/steak-empty.png");
    steak4.attr("src", "./image/steak-empty.png");
    steak5.attr("src", "./image/steak-empty.png");
  }

  else {
    showSteak1 = true;
    showSteak2 = true;
    showSteak3 = false;
    showSteak4 = false;
    showSteak5 = false;
    steak1.attr("src", "./image/steak-full.png");
    steak2.attr("src", "./image/steak-full.png");
    steak3.attr("src", "./image/steak-empty.png");
    steak4.attr("src", "./image/steak-empty.png");
    steak5.attr("src", "./image/steak-empty.png");
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
    steak1.attr("src", "./image/steak-full.png");
    steak2.attr("src", "./image/steak-full.png");
    steak3.attr("src", "./image/steak-full.png");
  }

  else if ((showSteak1 && showSteak2 && showSteak3) && !(showSteak4 || showSteak5)) {
    showSteak1 = false;
    showSteak2 = false;
    showSteak3 = false;
    showSteak4 = false;
    showSteak5 = false;
    steak1.attr("src", "./image/steak-empty.png");
    steak2.attr("src", "./image/steak-empty.png");
    steak3.attr("src", "./image/steak-empty.png");
    steak4.attr("src", "./image/steak-empty.png");
    steak5.attr("src", "./image/steak-empty.png");
  }

  else {
    showSteak1 = true;
    showSteak2 = true;
    showSteak3 = true;
    showSteak4 = false;
    showSteak5 = false;
    steak1.attr("src", "./image/steak-full.png");
    steak2.attr("src", "./image/steak-full.png");
    steak3.attr("src", "./image/steak-full.png");
    steak4.attr("src", "./image/steak-empty.png");
    steak5.attr("src", "./image/steak-empty.png");
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
    steak1.attr("src", "./image/steak-full.png");
    steak2.attr("src", "./image/steak-full.png");
    steak3.attr("src", "./image/steak-full.png");
    steak4.attr("src", "./image/steak-full.png");
  }

  else if ((showSteak1 && showSteak2 && showSteak3 && showSteak4) && !showSteak5) {
    showSteak1 = false;
    showSteak2 = false;
    showSteak3 = false;
    showSteak4 = false;
    showSteak5 = false;
    steak1.attr("src", "./image/steak-empty.png");
    steak2.attr("src", "./image/steak-empty.png");
    steak3.attr("src", "./image/steak-empty.png");
    steak4.attr("src", "./image/steak-empty.png");
    steak5.attr("src", "./image/steak-empty.png");
  }

  else {
    showSteak1 = true;
    showSteak2 = true;
    showSteak3 = true;
    showSteak4 = true;
    showSteak5 = false;
    steak1.attr("src", "./image/steak-full.png");
    steak2.attr("src", "./image/steak-full.png");
    steak3.attr("src", "./image/steak-full.png");
    steak4.attr("src", "./image/steak-full.png");
    steak5.attr("src", "./image/steak-empty.png");
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
    steak1.attr("src", "./image/steak-full.png");
    steak2.attr("src", "./image/steak-full.png");
    steak3.attr("src", "./image/steak-full.png");
    steak4.attr("src", "./image/steak-full.png");
    steak5.attr("src", "./image/steak-full.png");
  }

  else {
    showSteak1 = false;
    showSteak2 = false;
    showSteak3 = false;
    showSteak4 = false;
    showSteak5 = false;
    steak1.attr("src", "./image/steak-empty.png");
    steak2.attr("src", "./image/steak-empty.png");
    steak3.attr("src", "./image/steak-empty.png");
    steak4.attr("src", "./image/steak-empty.png");
    steak5.attr("src", "./image/steak-empty.png");
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

// Displays a welcome message on main.html saying "welcome user".
function welcome() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("users").doc(user.uid).get().then(
      function(doc){
        document.getElementById("welcome-message").innerHTML = doc.data().name;
      }
    )
  })
}

// Displays Sign-in or Sign-out in the nav bar
// depending on whether the user is signed in or not.
function authentication() {
  firebase.auth().onAuthStateChanged(function(user){
    if (user){
      console.log("Signed in");
      document.getElementById("login-button").innerHTML = "Sign Out"
      $('#login-button').click(function(){
        console.log("redirect to index");
        logoutUser();
      });
    } else {
      console.log("Signed out");
      document.getElementById("login-button").innerHTML = "Sign In";
      $('#login-button').click(function(){
        console.log("redirect to login page");
        location.href = './login_page.html';
      });
    }
  })
}

welcome();
// showUserName();

// Menu Button Nav Function
var slideIn = {
  "left": "0px",
  "easing": "swing"
};
var slideOut = {
  "left": "-200px",
  "easing": "swing"
};

var menuBTN = $("#menuBTN");
var menuList = $("#menu-btn-menulist");

menuBTN.click(function() {

  menuList.animate(slideIn, 500);
});

var close = $(".close");
close.click(function() {
  menuList.animate(slideOut, 500);
});

// Function for random roulette-ing an item
function reRoll() {
  var rollBTN = $("#rollBTN");
  var randNum = Math.floor(5 * Math.random());
  firebase.auth().onAuthStateChanged(function() {

    var restaurants = db.collection("restaurants");
    var randomRestaurant = restaurants.where("V", "==", randNum);

    randomRestaurant.get().then(function(snap) {
      snap.forEach(function(doc) {
        // console.log(doc.data().Name);
        var restName = doc.data().Name;
        console.log(restName);

        // To Go Sushi
        if (restName == "To Go Sushi") {
          randNum = Math.floor(5 * Math.random());
          var menus = restaurants.doc("restaurant1").collection("menu");
          var randomMenu = menus.where("V", "==", randNum);
          // console.log(randomMenu);
          randomMenu.get().then(function(snap) {
            snap.forEach(function(doc) {
              var menuName = doc.data().Name;
              var priceValue = doc.data().Price;
              $('#menu').text(menuName);
              $('#price').text(priceValue);
            })
          })
        }

        // Dae-Ji Pork Cutlet House
        else if (restName == "Dae-Ji Pork Cutlet House") {
          randNum = Math.floor(6 * Math.random());
          var menus = restaurants.doc("restaurant2").collection("menu");
          var randomMenu = menus.where("V", "==", randNum);
          // console.log(randomMenu);
          randomMenu.get().then(function(snap) {
            snap.forEach(function(doc) {
              var menuName = doc.data().Name;
              var priceValue = doc.data().Price;
              $('#menu').text(menuName);
              $('#price').text(priceValue);
            })
          })
        }

        // Jimoco Café and Pasta
        else if (restName == "Jimoco Café and Pasta") {
          randNum = Math.floor(5 * Math.random());
          var menus = restaurants.doc("restaurant3").collection("menu");
          var randomMenu = menus.where("V", "==", randNum);
          // console.log(randomMenu);
          randomMenu.get().then(function(snap) {
            snap.forEach(function(doc) {
              var menuName = doc.data().Name;
              var priceValue = doc.data().Price;
              $('#menu').text(menuName);
              $('#price').text(priceValue);
            })
          })
        }

        // Bob's Burgers
        else if (restName == "Bob's Burgers") {
          randNum = Math.floor(5 * Math.random());
          var menus = restaurants.doc("restaurant4").collection("menu");
          var randomMenu = menus.where("V", "==", randNum);
          // console.log(randomMenu);
          randomMenu.get().then(function(snap) {
            snap.forEach(function(doc) {
              var menuName = doc.data().Name;
              var priceValue = doc.data().Price;
              $('#menu').text(menuName);
              $('#price').text(priceValue);
            })
          })
        }

        // Kimbab Cheonguk
        else {
          randNum = Math.floor(5 * Math.random());
          var menus = restaurants.doc("restaurant5").collection("menu");
          var randomMenu = menus.where("V", "==", randNum);
          // console.log(randomMenu);
          randomMenu.get().then(function(snap) {
            snap.forEach(function(doc) {
              var menuName = doc.data().Name;
              var priceValue = doc.data().Price;
              $('#menu').text(menuName);
              $('#price').text(priceValue);
            })
          })
        }

        $('#restaurant').text(restName);

      })
    })
  })
}



var $fastfood = ['In N Out', 'Mitsuwa', 'The Habit', 'Chipotle', 'Lil\' Pickle', 'Buffalo Wild Wings', 'Dominos', 'Haus of Pizza', 'Baja Fish', 'Chic Fil A', 'Flame Broiler', 'Jerry\'s Dogs', 'Jersey Mike\'s', 'Panera', 'Rooster Cafe', 'Corner Bakery', 'Laventinas', 'Bagelmania', 'Tommy\'s Pastrami', 'Costco'];

var $fastRandom = Math.floor($fastfood.length * Math.random());

var $randomFast = $fastfood[$fastRandom];

var $restaurant = ['In N Out', 'Mitsuwa', 'The Habit', 'Chipotle', 'Souplantation', 'Baja Fish', 'Panera', 'Shinsengumi', 'Ajisen', 'Tokyo Table', 'Coco Ichibanya', 'IHOP', 'KBBQ', 'Pizza D\'Oro', 'Lucille\'s','Wahoo\'s', 'TGIF', 'Claim Jumper', 'Yardhouse', 'Mimis Cafe', 'Stonefire Grill', 'Anqi', 'California Pizza Kitchen', 'Acapulco', 'Haute Cakes'];

var $restRandom = Math.floor($restaurant.length * Math.random());

var $randomRest = $restaurant[$restRandom];

var $dessert = ['Donuts', 'Frostbites', 'That Boba Place', 'Confetti', 'Yorgurtland', 'Alta', "Choco XO", 'Keane'];

var $dessertRandom = Math.floor($dessert.length * Math.random());

var $randomDest = $dessert[$dessertRandom];


$(document).ready(function(){
});
