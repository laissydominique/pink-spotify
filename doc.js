document.addEventListener("DOMContentLoaded", function (event) {
  const blocoPrincipal = document.querySelector(".bloco_principal");
  const segundoBloco = document.querySelector(".ja_tem_conta");
  const login = document.querySelector(".login");
  const ja_tem_conta = document.querySelector(".ja_tem_conta");
  const google = document.querySelector(".google");
  const face = document.querySelector(".face");
  const apple = document.querySelector(".apple");
  const telefone = document.querySelector("#usar_tel");
  const end_de_email = document.querySelector(".end_de_email");

  const email = document.querySelector(".input_email");

  telefone.addEventListener("click", () => {
    if (
      email.placeholder === "nome@dominio.com" &&
      telefone.textContent === "Usar número de telefone" 
    ) {
      email.placeholder = "(XX) xxxxx-xxxx";
      telefone.innerHTML = "Usar email";
    } else {
      email.placeholder = "nome@dominio.com";
      telefone.innerHTML = "Usar número de telefone";
    }

    
  });
});
