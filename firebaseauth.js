// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
  import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
  import {getFirestore, setDoc, doc} from"https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDZ53-DS9qq321QjA5t2ec3cSYkIRrhZhs",
    authDomain: "chand-glass.firebaseapp.com",
    projectId: "chand-glass",
    storageBucket: "chand-glass.firebasestorage.app",
    messagingSenderId: "575790157934",
    appId: "1:575790157934:web:b8abdeb055864ee19e567f",
    measurementId: "G-F01MQ16LFW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  function showMessage(message,divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000);
  }
  
  const signUp=document.getElementById('submitSingnUp');
  signUp.addEventListener('click',(event)=>{event.preventDefault();
    const email=document.getElementById('rEmail').value;
    const password=document.getElementById('rPassword').value;
    const firstName = document.getElementById('fName').value;
    const  lastName=document.getElementById('lName')
const auth=getAuth();
const db=getFirestore();

createUserWithEmailAndPassword(auth,email,password)
.then((userCredential)=>{
    const user=userCredential.user;
    const userData={
        email: email,
        firstName:firstName,
        lastName: lastName,

    };
    showMessage('Account Created Successfully','signUpMessage');
    const docRef=doc(db,"users",user.uid);
    setDoc(docRef, userData)
    .then(()=>{
        window.location.href="index.html";
    })
    .catch((error)=>{
        console.error("error writing document",error);
    });
   })
   .catch((error)=>{
    const errorCode=error.code;
    if(errorCode=='auth/email-already-in-use'){
        showMessage('Email Address Already Exist !!!','signUpMessage');    
    }
    else{
        showMessage('unable to create User','signUpMessage');
    }
   })
});