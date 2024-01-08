document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('input-email')
    const email = emailField.value
    
    const passField = document.getElementById('input-pass')
    const pass = passField.value
    
    if(email === 'hello@gmail.com' && pass === '12345678'){
        window.location.href = 'bank.html';
    }else{
        alert('invalid user');
    }
})