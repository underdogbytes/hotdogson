// Usuário antigo
function showOldUser(){
    document.getElementById('welcome-back-login-text').style.display = 'initial';
    document.getElementById('not-me').style.display = 'initial';
}
function hideOldUser(){
    document.getElementById('welcome-back-login-text').style.display = 'none';
    document.getElementById('not-me').style.display = 'none';
}

// Box Login
function showLogin(){ document.getElementById('box-login').style.display = 'initial'; }
function hideLogin(){ document.getElementById('box-login').style.display = 'none'; }

// Box de boas-vindas ao logar
function showWelcomeBox(){ document.getElementById('welcome-box').style.display = 'initial'; }
function hideWelcomeBox(){ document.getElementById('welcome-box').style.display = 'none'; }

// Preencher campo
function fillInputDataWithLocalStorage(){
    document.getElementById('user-email').placeholder = localStorage.email;
    document.getElementById('user-email').value = localStorage.email;
    document.getElementById('user-password').value = '';
}
// Limpeza
function cleanLocalStorage(){localStorage.removeItem('email');}
function cleanInputs(){
    document.getElementById('user-email').placeholder = 'Digite seu e-mail';
    document.getElementById('user-email').value = '';
}

// Decidindo qual div-login será mostrada
if(localStorage['email']){
    showOldUser()
    fillInputDataWithLocalStorage()
}else{
    hideOldUser()
}


// Login
document.getElementById('login').onclick = function(){

    if(localStorage['email']){
        hideLogin()
        showWelcomeBox()
        fillInputDataWithLocalStorage()
    }
    else{
        var email = document.getElementById('user-email').value;
        localStorage.setItem('email', email);
        hideLogin()
        showWelcomeBox()
    }

}

// Não sou eu
document.getElementById('not-me').onclick = function(){
    cleanLocalStorage()
    cleanInputs()
    hideOldUser()
    showLogin()
}

// Logout
function logout(){
    hideWelcomeBox();
    if(localStorage['email']){
        showLogin()
        showOldUser()
        fillInputDataWithLocalStorage()
    }else{
        hideOldUser()
    }
}
document.getElementById('logout').onclick = function(){
    logout()
}