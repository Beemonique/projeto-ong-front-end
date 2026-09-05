document.addEventListener("DOMContentLoaded", function () {

  // Formulário de cadastro
  const formulario = document.querySelector("form");

  if (formulario) {
    formulario.addEventListener("submit", function (event) {
      event.preventDefault();

      alert("Cadastro realizado com sucesso!");

      formulario.reset();
    });
  }

  // Links com navegação suave
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const destino = document.querySelector(this.getAttribute("href"));

      if (destino) {
        event.preventDefault();
        destino.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

});
