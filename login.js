// step-1 submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2 email cheek
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    // step-3 password

    const passwordField =document.getElementById('user-password');
    const password = passwordField.value;
    // step 4 cheek

    if(email === 'sontan@baap.com' && password === 'secret'){
       window.location.href = 'bank.html';
    } else{
        alert('ja tui ei khan htheke. vul password dicos');
    }
    
})