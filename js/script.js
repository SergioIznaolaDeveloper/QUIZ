// HOOVER CHECKED

// var radioButTrat = document.querySelectorAll(".radio");
// for (var x = 0; x < radioButTrat.length; x++) {
//   if (radioButTrat[x].checked === true) {
//     let preguntas1 = document.getElementsByName("activos");
//     for (var y = 0; y < preguntas1.length; y++) {
//       preguntas1[y].className = "marcados";
//     }
//   }
// }

//MASTER FUNCTION

function evalQuiz(event) {
  event.preventDefault();
  let respuestasCorrectas = ["b", "b", "b", "c", "d", "c", "b", "c", "d", "a"];
  let respuestasUsuario = [];
  let respuestasPregunta = [];
  let aciertos = 0;
  let preguntasRespondidas = [];
  let form = document.querySelector(".form");

  for (let preguntas = 1; preguntas < 11; preguntas++) {
    respuestasPregunta = document.getElementsByName("p" + preguntas);
    for (let j = 0; j < 4; j++) {
      if (respuestasPregunta[j].checked === true) {
        respuestasUsuario[
          preguntas - 1
        ] = `${preguntas}-${respuestasPregunta[j].value}  `;
        preguntasRespondidas.push(respuestasPregunta[j].checked);
        if (
          respuestasPregunta[j].value === respuestasCorrectas[preguntas - 1]
        ) {
          aciertos++;
        }
      }
    }
  }
  if (preguntasRespondidas.length < 10) {
    /* PROMPT APARECE Y DESAPARECE IMPRIMIENDO NºPREGUNTAS QUE FALTAN */

    document.querySelector("#alertNoCheck").style.display = "block";
    document.querySelector(".form").style.filter = "blur(5px)";
    document.querySelector(
      "#alertNoCheck"
    ).innerHTML = `HAS OLVIDADO RESPONDER A ${
      10 - preguntasRespondidas.length
    } PREGUNTAS`;
    document
      .querySelector("#alertNoCheck")
      .addEventListener("click", function (n) {
        document.querySelector("#alertNoCheck").style.display = "none";
        document.querySelector(".form").style.filter = "blur(0px)";
      });
  } else {
    /* PROMPT APARECE Y DESAPARECE IMPRIMIENDO VARIOS */
    /* RESULTADOS */
    if (aciertos === 0) {
      document.querySelector("#alertOk1").style.display = "block";
      document.querySelector(".form").style.filter = "blur(5px)";
      document
        .querySelector("#alertOk1")
        .addEventListener("click", function (n) {
          document.querySelector("#alertOk1").style.display = "none";
          document.querySelector(".form").style.filter = "blur(0px)";
          form.reset();
        });
    } else if (aciertos === 1) {
      document.querySelector("#alertOk2").style.display = "block";
      document.querySelector(".form").style.filter = "blur(5px)";
      document
        .querySelector("#alertOk2")
        .addEventListener("click", function (n) {
          document.querySelector("#alertOk2").style.display = "none";
          document.querySelector(".form").style.filter = "blur(0px)";
          form.reset();
        });
    } else if (aciertos === 2) {
      document.querySelector("#alertOk3").style.display = "block";
      document.querySelector(".form").style.filter = "blur(5px)";
      document
        .querySelector("#alertOk3")
        .addEventListener("click", function (n) {
          document.querySelector("#alertOk3").style.display = "none";
          document.querySelector(".form").style.filter = "blur(0px)";
          form.reset();
        });
    } else if (aciertos === 3) {
      document.querySelector("#alertOk4").style.display = "block";
      document.querySelector(".form").style.filter = "blur(5px)";
      document
        .querySelector("#alertOk4")
        .addEventListener("click", function (n) {
          document.querySelector("#alertOk4").style.display = "none";
          document.querySelector(".form").style.filter = "blur(0px)";
          form.reset();
        });
    } else if (aciertos === 4) {
      document.querySelector("#alertOk5").style.display = "block";
      document.querySelector(".form").style.filter = "blur(5px)";
      document
        .querySelector("#alertOk5")
        .addEventListener("click", function (n) {
          document.querySelector("#alertOk5").style.display = "none";
          document.querySelector(".form").style.filter = "blur(0px)";
          form.reset();
        });
    } else if (aciertos === 5) {
      document.querySelector("#alertOk6").style.display = "block";
      document.querySelector(".form").style.filter = "blur(5px)";
      document
        .querySelector("#alertOk6")
        .addEventListener("click", function (n) {
          document.querySelector("#alertOk6").style.display = "none";
          document.querySelector(".form").style.filter = "blur(0px)";
          form.reset();
        });
    } else if (aciertos === 6) {
      document.querySelector("#alertOk7").style.display = "block";
      document.querySelector(".form").style.filter = "blur(5px)";
      document
        .querySelector("#alertOk7")
        .addEventListener("click", function (n) {
          document.querySelector("#alertOk7").style.display = "none";
          document.querySelector(".form").style.filter = "blur(0px)";
          form.reset();
        });
    } else if (aciertos === 7) {
      document.querySelector("#alertOk8").style.display = "block";
      document.querySelector(".form").style.filter = "blur(5px)";
      document
        .querySelector("#alertOk8")
        .addEventListener("click", function (n) {
          document.querySelector("#alertOk8").style.display = "none";
          document.querySelector(".form").style.filter = "blur(0px)";
          form.reset();
        });
    } else if (aciertos === 8) {
      document.querySelector("#alertOk9").style.display = "block";
      document.querySelector(".form").style.filter = "blur(5px)";
      document
        .querySelector("#alertOk9")
        .addEventListener("click", function (n) {
          document.querySelector("#alertOk9").style.display = "none";
          document.querySelector(".form").style.filter = "blur(0px)";
          form.reset();
        });
    } else if (aciertos === 9) {
      document.querySelector("#alertOk10").style.display = "block";
      document.querySelector(".form").style.filter = "blur(5px)";
      document
        .querySelector("#alertOk10")
        .addEventListener("click", function (n) {
          document.querySelector("#alertOk10").style.display = "none";
          document.querySelector(".form").style.filter = "blur(0px)";
          form.reset();
        });
    } else {
      document.querySelector("#alertOk11").style.display = "block";
      document.querySelector(".form").style.filter = "blur(5px)";
      document
        .querySelector("#alertOk11")
        .addEventListener("click", function (n) {
          document.querySelector("#alertOk11").style.display = "none";
          document.querySelector(".form").style.filter = "blur(0px)";
          form.reset();
        });
    }
  }
}

document.querySelector(".form").addEventListener("submit", evalQuiz);
