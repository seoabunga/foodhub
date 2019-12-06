function createRestaurant1() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant1").get().then(
      function(doc){
        // console.log(doc.data().name);
        document.getElementById("restaurant1-name").innerHTML = doc.data().Name;
        document.getElementById("restaurant1-address").innerHTML = doc.data().Location;
        document.getElementById("restaurant1-phone-number").innerHTML = doc.data().PhoneNumber;
      }
    )
  })
}

function getMenu1() {
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

function getMenu2() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant1")
    .collection("menu").doc("menuItem2")
    .get().then(
      function(doc){
        document.getElementById("menu2-name").innerHTML = doc.data().Name;
        document.getElementById("menu2-price").innerHTML = doc.data().Price;
      }
    )
  })
}

function getMenu3() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant1")
    .collection("menu").doc("menuItem3")
    .get().then(
      function(doc){
        document.getElementById("menu3-name").innerHTML = doc.data().Name;
        document.getElementById("menu3-price").innerHTML = doc.data().Price;
      }
    )
  })
}

function getMenu4() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant1")
    .collection("menu").doc("menuItem4")
    .get().then(
      function(doc){
        document.getElementById("menu4-name").innerHTML = doc.data().Name;
        document.getElementById("menu4-price").innerHTML = doc.data().Price;
      }
    )
  })
}

function getMenu5() {
  firebase.auth().onAuthStateChanged(function(user){
    db.collection("restaurants").doc("restaurant1")
    .collection("menu").doc("menuItem5")
    .get().then(
      function(doc){
        document.getElementById("menu5-name").innerHTML = doc.data().Name;
        document.getElementById("menu5-price").innerHTML = doc.data().Price;
      }
    )
  })
}

function createCommentCards() {
    db.collection("restaurants").doc("restaurant1")
    .collection("comments").get().then(snap=> {
        size = snap.size;
        // console.log(size);
        for (var i = 1; i <= size; i++){
            $('.comments-container').append("<div class = 'comment-card'>"
                                            + "<h3 id = 'comment" + i + "-title'></h3>"
                                            + "<h3 id = 'comment" + i + "'></h3>"
                                            + "</div>");
        }
    });
}

function createComment() {
  db.collection("restaurants").doc("restaurant1")
  .collection("comments").get().then(function(querySnapshot){
      // get comment content and put in comments cards
      querySnapshot.forEach(function(doc){
          console.log(doc.id, " => ", doc.data());
          document.getElementById("comment1-title").innerHTML = doc.data().Title;
          document.getElementById("comment1").innerHTML = doc.data().Comment;
          document.getElementById("comment2-title").innerHTML = doc.data().Title;
          document.getElementById("comment2").innerHTML = doc.data().Comment;
          document.getElementById("comment3-title").innerHTML = doc.data().Title;
          document.getElementById("comment3").innerHTML = doc.data().Comment;
          document.getElementById("comment4-title").innerHTML = doc.data().Title;
          document.getElementById("comment4").innerHTML = doc.data().Comment;
          document.getElementById("comment5-title").innerHTML = doc.data().Title;
          document.getElementById("comment5").innerHTML = doc.data().Comment;
          document.getElementById("comment6-title").innerHTML = doc.data().Title;
          document.getElementById("comment6").innerHTML = doc.data().Comment;
          document.getElementById("comment7-title").innerHTML = doc.data().Title;
          document.getElementById("comment7").innerHTML = doc.data().Comment;
          document.getElementById("comment8-title").innerHTML = doc.data().Title;
          document.getElementById("comment8").innerHTML = doc.data().Comment;
      });

  })
}
