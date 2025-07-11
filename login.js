document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Login successful
      const user = userCredential.user;
      console.log("Logged in:", user.email);
      localStorage.setItem("userEmail", user.email); // Optional for later use
      window.location.href = "index.html"; // Redirect after login
    })
    .catch(error => {
      const msg = error.message;
      document.getElementById("loginMessage").textContent = "Login failed: " + msg;
    });
});
