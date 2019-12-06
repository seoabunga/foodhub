function writeComment() {
    $('#submit').click(function(){
      var title = document.getElementById("title").value;
      var content = document.getElementById("comment").value;

      console.log(title);

      db.collection("restaurants").doc("restaurant1")
      .collection("comments").add({
          Title: title,
          Comment: content
      }).then(function(docRef){
          console.log("Document created with generated ID: "
          , docRef.id);
          location.href = './togo_sushi.html'
      }).catch(function(error) {
          console.error("Error adding document: ", error);
      });
    })
}

writeComment();
