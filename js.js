const password = document.querySelector('#password');

const toggleVisibility = document.querySelector('.password__toggle');
let state = new Map([
    ['password', 'text'],
    ['text', 'password']
]);
toggleVisibility.addEventListener('click', () => {
    password.setAttribute('type', state.get(password.getAttribute('type')))

});
const password_reg = document.querySelector('#register_password');
const regToggleVisibility = document.querySelector('.register_password__toggle');

regToggleVisibility.addEventListener('click', () => {
    password_reg.setAttribute('type', state.get(password_reg.getAttribute('type')))

});

const formSwitch = document.querySelector('.form__switch');
const tabs = document.querySelectorAll('.form__switch_btn');
const formEl = document.querySelectorAll('#login');
const formElReg = document.querySelector('#register');


formSwitch.addEventListener('click', () => {
    console.log(123)
    tabs.forEach((tabs) => {
        tabs.classList.toggle('active')
    })
    formEl.forEach((formEl) => {
        formEl.classList.toggle('active')
    })
    formEl.forEach((formEl) => {
        formElReg.classList.toggle('active')
    })
})
