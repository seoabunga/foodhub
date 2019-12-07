// Create the name, location, and phone number for
// Bob's Burgers
function createRestaurant4() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant4").get().then(
      function(doc){
        // console.log(doc.data().motto);
        document.getElementById("restaurant4-name").innerHTML = doc.data().Name;
        document.getElementById("restaurant4-address").innerHTML = doc.data().Location;
        document.getElementById("restaurant4-phone-number").innerHTML = doc.data().PhoneNumber;
      }
    )
  })
}

// Get the 1st Menu item for Bob's Burgers
function getMenu1() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant4")
    .collection("menu").doc("menuItem1")
    .get().then(
      function(doc){
        document.getElementById("menu1-name").innerHTML = doc.data().Name;
        document.getElementById("menu1-price").innerHTML = doc.data().Price;
      }
    )
  })
}

// Get the 2nd Menu Item for Bob's Burgers
function getMenu2() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant4")
    .collection("menu").doc("menuItem2")
    .get().then(
      function(doc){
        document.getElementById("menu2-name").innerHTML = doc.data().Name;
        document.getElementById("menu2-price").innerHTML = doc.data().Price;
      }
    )
  })
}

// Get the 3rd menu item for Bob's Burgers
function getMenu3() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant4")
    .collection("menu").doc("menuItem3")
    .get().then(
      function(doc){
        document.getElementById("menu3-name").innerHTML = doc.data().Name;
        document.getElementById("menu3-price").innerHTML = doc.data().Price;
      }
    )
  })
}

// Get the 4th menu item for Bob's burgers
function getMenu4() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant4")
    .collection("menu").doc("menuItem4")
    .get().then(
      function(doc){
        document.getElementById("menu4-name").innerHTML = doc.data().Name;
        document.getElementById("menu4-price").innerHTML = doc.data().Price;
      }
    )
  })
}

// Get the 5th menu item for Bob's Burgers
function getMenu5() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant4")
    .collection("menu").doc("menuItem5")
    .get().then(
      function(doc){
        document.getElementById("menu5-name").innerHTML = doc.data().Name;
        document.getElementById("menu5-price").innerHTML = doc.data().Price;
      }
    )
  })
}

// Create a comment and posts the title, comment and date
// in the comment card.
function createComment() {
  var count = 0;
  var title = "";
  var comment = "";
  var timestamp = "";

  db.collection("restaurants").doc("restaurant4")
  .collection("comments").orderBy("Timestamp")
  .get().then(function(snap) {
    snap.forEach(function(doc) {
      title = doc.data().Title;
      comment = doc.data().Comment;
      timestamp = doc.data().Timestamp;

      // formats the date to mm/dd/yyyy
      let postedDate = doc.data().Timestamp.toDate();
      var date = postedDate.getDate();
      var month = postedDate.getMonth(); // jan is 0 not 1
      var year = postedDate.getFullYear();
      // function to add 0 to a day or a month < 10
      function pad(n) {
          return n<10 ? '0'+n : n;
      }
      // display date
      var dateString = pad(month + 1) + "/" + pad(date) + "/" + year;
      console.log(dateString)

      count++;
      console.log(count);
      console.log(comment + "\n" + title);
      createCommentCards(comment, title, dateString);
    })

  })
}

// Create comment cards that comment
function createCommentCards(comment, title, dateString) {
    $('.comments-container').append("<div class = 'comment-card'>"
                                    + "<h3 id = 'comment" + title + "-title'>" + title + "</h3>"
                                    + "<h3 id = 'comment" + comment + "'>" + comment + "</h3>"
                                    + "<h3 id = 'timestamp'>" + dateString + "</h3>"
                                    + "</div>");
}
