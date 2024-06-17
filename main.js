// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCzrv8XGPHg4lh5NyP5RhudnAoHRGyialw",
    authDomain: "loginpage1-cf655.firebaseapp.com",
    projectId: "loginpage1-cf655",
    storageBucket: "loginpage1-cf655.appspot.com",
    messagingSenderId: "22773214357",
    appId: "1:22773214357:web:ca8d712c0feb0f3d47bf9c"    
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function

const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}