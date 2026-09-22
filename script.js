const form = document.querySelector("form");
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const mensagemInput = document.getElementById("mensagem");

if (form) {
  form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nomeValor = nomeInput.value.trim();
    if (nomeInput.nextElementSibling) {
      nomeInput.nextElementSibling.remove();
    }

    if (nomeValor === "" || nomeValor.length < 3) {
      const aviso = document.createElement("span");
      aviso.textContent = "O campo está vazio ou muito curto";
      nomeInput.insertAdjacentElement("afterend", aviso);
      return;
    }

    const emailValor = emailInput.value.trim();
    if (emailInput.nextElementSibling) {
      emailInput.nextElementSibling.remove();
    }

    if (emailValor === "" || emailValor.length < 3) {
      const aviso = document.createElement("span");
      aviso.textContent = "O campo está vazio ou muito curto";
      emailInput.insertAdjacentElement("afterend", aviso);
      return;
    }

    const mensagemValor = mensagemInput.value.trim();
     if (mensagemInput.nextElementSibling) {
  mensagemInput.nextElementSibling.remove();
}

  if(mensagemValor === "" || mensagemValor.length < 3) {
  const aviso = document.createElement("span");
aviso.textContent = "O campo está vazio ou muito curto";
mensagemInput.insertAdjacentElement("afterend", aviso);
return;
  }

    console.log("Nome: ", nomeValor);
    console.log("Email: ", emailValor);
    console.log("Mensagem: ", mensagemValor);
  });
}