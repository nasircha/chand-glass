import { auth } from './firebaseauth.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      localStorage.setItem("userEmail", user.email);
      window.location.href = "index.html"; // ✅ Redirect after login
    })
    .catch(error => {
      document.getElementById("loginMessage").textContent = "Login failed: " + error.message;
    });
});
