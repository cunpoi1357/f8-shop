const modal = document.getElementById('modal')
const registerForm = document.getElementById('register-form')
const loginForm = document.getElementById('login-form')
const registerBtn = document.getElementById('register-btn')
const loginBtn = document.getElementById('login-btn')

let currentForm = ''

function getBackBtn(currentForm) {
    return currentForm.querySelector('.auth-form__control-back')
}

function addFormListener(currentForm) {
    const BackBtn = currentForm.querySelector('.auth-form__control-back')
    BackBtn.addEventListener('click', () => {
        currentForm.classList.remove('auth-form--active')
        modal.classList.remove('modal--active')
    })
}

function showRegisterForm() {
    modal.classList.add('modal--active')
    registerForm.classList.add('auth-form--active')
    addFormListener(registerForm)
}

function showLoginForm() {
    modal.classList.add('modal--active')
    loginForm.classList.add('auth-form--active')
    addFormListener(loginForm)
}

registerBtn.addEventListener('click', showRegisterForm)
loginBtn.addEventListener('click', showLoginForm)