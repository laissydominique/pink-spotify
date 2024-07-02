const blocoPrincipal = document.querySelector('.bloco_principal');
const segundoBloco = document.querySelector('.ja_tem_conta');
const login = document.querySelector('.login');
const ja_tem_conta = document.querySelector('.ja_tem_conta');

ja_tem_conta.addEventListener('click', () =>{
    blocoPrincipal.classList.add("hidden");
    segundoBloco.classList.add("hidden");

    login.classList.remove("hidden");
})