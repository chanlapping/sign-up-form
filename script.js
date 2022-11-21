const passwordInput = document.querySelector('#password');
const confirmInput = document.querySelector('#confirm');
const subscribeBtn = document.querySelector('#subscribe');

subscribeBtn.addEventListener('click', () => {
    let pwd = passwordInput.value;
    let confirmPwd = confirmInput.value;
    if (pwd !== confirmPwd) {
        passwordInput.classList.add('error');
        confirmInput.classList.add('error');
    } else {
        passwordInput.classList.remove('error');
        confirmInput.classList.remove('error');
    }
})