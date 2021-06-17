/**
 * 1.1 Validation for user login with pre-defined user info
 * 1.2 If auth success, Login into the admin panel 
 * 1.3 If auth fail, display error message
 * 1.4 Store auth info to the local storage until user logout
 */

let email, password; // Declare the variable
let isEmailSuccessed, isPasswordSuccessed = false;
let predefinedData = {
    email: 'loki@gmail.com',
    password: '12345678',
}

function submit() {
    // When user click the submit button
    // Validation for user login with pre-defined user info
    console.log('USER CLICK ME');
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    if (predefinedData.email == email) {
        // Check email success 
        isEmailSuccessed = true;
    }
    
    if (predefinedData.password == password) {
        // Check password success
        isPasswordSuccessed = true; 
    }
    
    if (true/false) {
        // If auth success, Login into the admin panel 
        // window.location.replace('/final_project_RWD1234/admin_panel.html');
    
        // Store auth info to the local storage until user logout
        
        window.localStorage.setItem('email', JSON.stringify(email));
        window.localStorage.setItem('password', JSON.stringify(password));
    } else {
        // 1.3 If auth fail, display error message
        console.log('Show Error Message to User');
    }
}
