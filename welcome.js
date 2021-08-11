function logout(){



firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      location.replace("index.html")
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  firebase.auth().signOut();
}