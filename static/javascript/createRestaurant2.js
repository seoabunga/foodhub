// Create the name, location, and phone number
// for daeji
function createRestaurant2() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant2").get().then(
      function(doc){
        // console.log(doc.data().motto);
        document.getElementById("restaurant2-name").innerHTML = doc.data().Name;
        document.getElementById("restaurant2-address").innerHTML = doc.data().Location;
        document.getElementById("restaurant2-phone-number").innerHTML = doc.data().PhoneNumber;
      }
    )
  })
}

// Get menu item 1 from database
function getMenu1() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant2")
    .collection("menu").doc("menuItem1")
    .get().then(
      function(doc){
        document.getElementById("menu1-name").innerHTML = doc.data().Name;
        document.getElementById("menu1-price").innerHTML = doc.data().Price;
      }
    )
  })
}

// Get menu item 2 from database
function getMenu2() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant2")
    .collection("menu").doc("menuItem2")
    .get().then(
      function(doc){
        document.getElementById("menu2-name").innerHTML = doc.data().Name;
        document.getElementById("menu2-price").innerHTML = doc.data().Price;
      }
    )
  })
}

// Get menu item 3 from database
function getMenu3() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant2")
    .collection("menu").doc("menuItem3")
    .get().then(
      function(doc){
        document.getElementById("menu3-name").innerHTML = doc.data().Name;
        document.getElementById("menu3-price").innerHTML = doc.data().Price;
      }
    )
  })
}

// Get menu item 4 from database
function getMenu4() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant2")
    .collection("menu").doc("menuItem4")
    .get().then(
      function(doc){
        document.getElementById("menu4-name").innerHTML = doc.data().Name;
        document.getElementById("menu4-price").innerHTML = doc.data().Price;
      }
    )
  })
}

// Get menu item 5 from database
function getMenu5() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant2")
    .collection("menu").doc("menuItem5")
    .get().then(
      function(doc){
        document.getElementById("menu5-name").innerHTML = doc.data().Name;
        document.getElementById("menu5-price").innerHTML = doc.data().Price;
      }
    )
  })
}

// Create a comment that gets posted into a comment card.
// It converts the timestamp into mm/dd/yyyy
function createComment() {
  var count = 0;
  var title = "";
  var comment = "";
  var timestamp = "";

  db.collection("restaurants").doc("restaurant2")
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
