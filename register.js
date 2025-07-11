document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log("Registered:", user.email);
      window.location.href = "login.html"; // Redirect to login after successful registration
    })
    .catch(error => {
      const msg = error.message;
      document.getElementById("registerMessage").textContent = "Error: " + msg;
    });
});
