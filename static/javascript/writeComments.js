// Writes a comment to the database for restaurant 1
function writeCommentR1() {
    $('#submit').click(function(){
      var title = document.getElementById("title").value;
      var content = document.getElementById("comment").value;

      console.log(title);

      db.collection("restaurants").doc("restaurant1")
      .collection("comments").add({
          Title: title,
          Comment: content,
          Timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }).then(function(docRef){
          console.log("Document created with generated ID: "
          , docRef.id);
          location.href = './togo_sushi.html'
      }).catch(function(error) {
          console.error("Error adding document: ", error);
      });
    })
}

// Writes a comment to the database for restaurant 2
function writeCommentR2() {
    $('#submit').click(function(){
      var title = document.getElementById("title").value;
      var content = document.getElementById("comment").value;

      console.log(title);

      db.collection("restaurants").doc("restaurant2")
      .collection("comments").add({
          Title: title,
          Comment: content,
          Timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }).then(function(docRef){
          console.log("Document created with generated ID: "
          , docRef.id);
          location.href = './daeji.html'
      }).catch(function(error) {
          console.error("Error adding document: ", error);
      });
    })
}

// Writes a comment to the database for restaurant 3
function writeCommentR3() {
    $('#submit').click(function(){
      var title = document.getElementById("title").value;
      var content = document.getElementById("comment").value;

      console.log(title);

      db.collection("restaurants").doc("restaurant3")
      .collection("comments").add({
          Title: title,
          Comment: content,
          Timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }).then(function(docRef){
          console.log("Document created with generated ID: "
          , docRef.id);
          location.href = './jimoco.html'
      }).catch(function(error) {
          console.error("Error adding document: ", error);
      });
    })
  }

  // Writes a comment to the database for restaurant 4
  function writeCommentR4() {
      $('#submit').click(function(){
        var title = document.getElementById("title").value;
        var content = document.getElementById("comment").value;

        console.log(title);

        db.collection("restaurants").doc("restaurant4")
        .collection("comments").add({
            Title: title,
            Comment: content,
            Timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(function(docRef){
            console.log("Document created with generated ID: "
            , docRef.id);
            location.href = './bobs_burgers.html'
        }).catch(function(error) {
            console.error("Error adding document: ", error);
        });
      }
    )
}

// Writes a comment to the database for restaurant 5
function writeCommentR5() {
    $('#submit').click(function(){
      var title = document.getElementById("title").value;
      var content = document.getElementById("comment").value;

      console.log(title);

      db.collection("restaurants").doc("restaurant5")
      .collection("comments").add({
          Title: title,
          Comment: content,
          Timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }).then(function(docRef){
          console.log("Document created with generated ID: "
          , docRef.id);
          location.href = './kimbab_cheonguk.html'
      }).catch(function(error) {
          console.error("Error adding document: ", error);
      });
    }
  )
}
