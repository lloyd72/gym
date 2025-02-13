import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8HwlXcTf5iWOSmTDqUAvjrbLjZWXrCPA",
    authDomain: "loginapp-8d0ac.firebaseapp.com",
    projectId: "loginapp-8d0ac",
    storageBucket: "loginapp-8d0ac.appspot.com",
    messagingSenderId: "81023835707",
    appId: "1:81023835707:web:e71e35329a3f8bbdc7861e",
    measurementId: "G-T3GBTYMG95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM Elements
const loginForm = document.getElementById("loginForm");
const signUpForm = document.getElementById("signUpForm");
const loginError = document.getElementById("loginError");
const signUpError = document.getElementById("signUpError");
const showSignUp = document.getElementById("showSignUp");
const showLogin = document.getElementById("showLogin");
const loginFormContainer = document.getElementById("loginFormContainer");
const signUpFormContainer = document.getElementById("signUpFormContainer");

// Toggle between Login and Sign Up forms
showSignUp.addEventListener("click", (e) => {
    e.preventDefault();
    loginFormContainer.style.display = "none";
    signUpFormContainer.style.display = "block";
});

showLogin.addEventListener("click", (e) => {
    e.preventDefault();
    signUpFormContainer.style.display = "none";
    loginFormContainer.style.display = "block";
});

// Login with Email and Password
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginForm.loginEmail.value;
    const password = loginForm.loginPassword.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert("Login successful!");
            console.log("Logged in user:", user);
            // Redirect or perform other actions here
        })
        .catch((error) => {
            loginError.textContent = error.message;
        });
});

// Sign Up with Email and Password
signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = signUpForm.signUpEmail.value;
    const password = signUpForm.signUpPassword.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            alert("Sign up successful!");
            console.log("Signed up user:", user);
            // Redirect or perform other actions here
        })
        .catch((error) => {
            signUpError.textContent = error.message;
        });
});
