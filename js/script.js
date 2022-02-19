function evalQuiz(event) {
  event.preventDefault();
  let respuestasCorrectas = ["a", "b", "b", "c", "d", "c", "b", "c", "d", "a"];
  let respuestasUsuario = [];
  let respuestasPregunta = [];
  let aciertos = 0;
  let preguntasRespondidas = [];

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
    console.log(`Has olvidado responder a ${10-preguntasRespondidas.length} preguntas`)
  } else {
    console.log(
      `Resultados: ${respuestasUsuario.join(
        ""
      )}, has acertado ${aciertos} preguntas `
    );
  }
}

document.querySelector(".form").addEventListener("submit", evalQuiz);
