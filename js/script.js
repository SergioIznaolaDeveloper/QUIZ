// Haber chekeado los 10 para submit
// si check en correcto valor 1 si no valor 0 añadir a variable contador
let contador = 0;

document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault(); // Frena el envío de formulario

  let correctos = document.querySelectorAll("#correcto");

  for (i = 0; i < correctos.length; i++) {
    if (event.target.correcto[i].checked) {
      contador++;
    }
  }
});
