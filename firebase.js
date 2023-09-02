window.onload = function() {
    render()
}

function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render()
}

let codeResult;

function phoneAuth() {
    // отримуємо номер 
    let number = document.getElementById('number').value;
    firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function(confirmationResult){
        window.confirmationResult = confirmationResult;
        codeResult = confirmationResult;
        console.log(codeResult)
        alert("Повідомлення надіслано!")
    }).catch(function(error){
        alert(error.message)
    });
}

function codeVerify() {
    let code = document.getElementById('verificationCode').value;
    if(codeResult) {
        codeResult.confirm(code).then(function(result){
            alert("Все гуд")
            let user = result.user
            console.log(user)
        }).catch(function(error){
            alert(error.messag)
        })
    }
}