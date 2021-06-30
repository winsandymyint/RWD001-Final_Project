import { user } from "./MockData.js";

var logout = document.getElementById('logout');
logout.addEventListener('click',function profileOpen(){
localStorage.clear();
window.location = 'LogIn.html';
})
if( `"${user.email}"` == localStorage.getItem('email') && `"${user.password}"` == localStorage.getItem('password')){
  var name_for_h3 = document.getElementById('name_for_h3');
  var name_for_h2 = document.getElementById('name_for_h2');
  var email_front = document.getElementById('email_front');
  var email_back = document.getElementById('email_back');

  name_for_h3.textContent = user.name;
  name_for_h2.textContent = user.name;
  email_front.textContent = user.email;
  email_front.style.fontSize = '12px';
  email_back.textContent = user.email;
  email_back.style.fontSize = '12px';
  email_back.style.color = 'white';

}else {
  logout.textContent = 'LogIn';
  logout.addEventListener('click',function profileOpen(){
    window.location = 'LogIn.html';
    })
}
