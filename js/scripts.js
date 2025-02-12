<!-- Include Firebase imports -->
<script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

    // Firebase config and initialization
    const firebaseConfig = {
        apiKey: "AIzaSyC8HwlXcTf5iWOSmTDqUAvjrbLjZWXrCPA",
        authDomain: "loginapp-8d0ac.firebaseapp.com",
        projectId: "loginapp-8d0ac",
        storageBucket: "loginapp-8d0ac.firebasestorage.app",
        messagingSenderId: "81023835707",
        appId: "1:81023835707:web:e71e35329a3f8bbdc7861e",
        measurementId: "G-T3GBTYMG95"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    // Toggle to Signup form
    function toggleSignup() {
        document.getElementById("login-toggle").style.backgroundColor = "#fff";
        document.getElementById("login-toggle").style.color = "#222";
        document.getElementById("signup-toggle").style.backgroundColor = "#71C946";
        document.getElementById("signup-toggle").style.color = "#fff";
        document.getElementById("login-form").style.display = "none";
        document.getElementById("signup-form").style.display = "block";
        document.getElementById("forgot-password-form").style.display = "none";
    }

    // Toggle to Login form
    function toggleLogin() {
        document.getElementById("login-toggle").style.backgroundColor = "#71C946";
        document.getElementById("login-toggle").style.color = "#fff";
        document.getElementById("signup-toggle").style.backgroundColor = "#fff";
        document.getElementById("signup-toggle").style.color = "#222";
        document.getElementById("signup-form").style.display = "none";
        document.getElementById("login-form").style.display = "block";
        document.getElementById("forgot-password-form").style.display = "none";
    }

    // Toggle to Forgot Password form
    function toggleForgotPassword() {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("signup-form").style.display = "none";
        document.getElementById("forgot-password-form").style.display = "block";
    }

    // Handle Login
    document.querySelector('.login').addEventListener('click', function () {
        const email = document.querySelector('#login-form input[type="email"]').value;
        const password = document.querySelector('#login-form input[type="password"]').value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Logged in successfully
                const user = userCredential.user;
                alert('Login successful!');
                window.location.href = "dashboard.html"; // Redirect to your dashboard or another page
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`Error: ${errorMessage}`);
            });
    });

    // Handle Signup
    document.querySelector('.signup').addEventListener('click', function () {
        const email = document.querySelector('#signup-form input[type="email"]').value;
        const username = document.querySelector('#signup-form input[type="text"]').value;
        const password = document.querySelector('#signup-form input[type="password"]').value;

        if (email === "" || username === "" || password === "") {
            alert("Please fill out all fields.");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up successfully
                const user = userCredential.user;
                alert('Account created successfully!');
                window.location.href = "login.html"; // Redirect to login page after signup
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`Error: ${errorMessage}`);
            });
    });

    // Handle Forgot Password
    document.querySelector('.forgot-password').addEventListener('click', function () {
        const email = document.querySelector('#forgot-password-form input[type="email"]').value;

        if (email === "") {
            alert("Please enter your email.");
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Password reset email sent. Please check your inbox.');
                window.location.href = "login.html"; // Redirect to login page after password reset
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`Error: ${errorMessage}`);
            });
    });
</script>
