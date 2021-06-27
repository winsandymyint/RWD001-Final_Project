import { user } from './MockData.js';

var attempt = 3; // Variable to count number of attempts.

// logIn
var submit = document.getElementById('submit');
submit.addEventListener('click',function validate(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if ( email == user.email && password == user.password){
    alert ("Login successfully");
    window.location = "Profile.html"; // Redirecting to Profile page.
    window.localStorage.setItem('email',JSON.stringify(email));
    window.localStorage.setItem('password',JSON.stringify(password));
    return false;
  }
  else{
    attempt --;// Decrementing by one.
    alert("You have left "+attempt+" attempts!Please log in again!");
    // Disabling fields after 3 attempts.
    if( attempt == 0){
      document.getElementById("email").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
  }
)