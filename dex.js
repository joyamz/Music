document.getElementById("login").addEventListener("submit",(event)=> {
    event.preventDefault()
});

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      location.replace("welcome.html")
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  function login(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email,password)
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message

    })
}

function signup(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
  
  .catch((error) => {
    document.getElementById("error").innerHTML = error.message

  });
}