// function to create new document in users collection

function createUser() {
  // if the current user is logged in
  // user is authenticated, then grab "uid" "displayName" and "email"
  // use "set()" with merge (if document did not exist it will create)
  firebase.auth().onAuthStateChanged(function(user)){
    db.collection("users").doc(user.uid).set(
      {
        "name" : user.displayName,
        "email" : user.email,
      }, { merge: true });
  });
}
