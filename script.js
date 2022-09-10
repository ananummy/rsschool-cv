let codeBtn = document.querySelector('.code')
let code = document.querySelector('.code-example')

codeBtn.addEventListener('click', () => {
    codeBtn.classList.toggle('open')
    code.classList.toggle('open')
})