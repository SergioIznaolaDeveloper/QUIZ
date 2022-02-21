function evalQuiz(event) {
  event.preventDefault();
  let respuestasCorrectas = ["b", "b", "b", "c", "d", "c", "b", "c", "d", "a"];
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
    console.log(
      `Has olvidado responder a ${10 - preguntasRespondidas.length} preguntas`
    );
  } else {
    console.log(
      `Resultados: ${respuestasUsuario.join(
        ""
      )}, has acertado ${aciertos} preguntas `
    );
  }


  //Qué animal eres según las respuestas acertadas:

  let flexear= document.getElementById("animalesAsignados").style.display = "flex";
  
  let animalesAsignados = document.getElementById("animalesAsignados");
  let crearParrafo = document.createElement("p");
  

  

  if(aciertos==0){
    flexear;    
    animalesAsignados.appendChild(crearParrafo).appendChild(document.createTextNode("No has acertado ninguna pregunta...Tu animal es un pez gota. Sabes muy poco de animales, te recomendamos ver la 2 de vez en cuando."));
  } else if(aciertos==1){
    flexear;
    
    animalesAsignados.appendChild(crearParrafo).appendChild(document.createTextNode("Has acertado 1 pregunta. Tu animal es el topo. Se nota que te dormías en clase"));
  } else if(aciertos==2){
    flexear;
    animalesAsignados.appendChild(crearParrafo).appendChild(document.createTextNode("Lograste 2 aciertos.. Tu animal es un perezoso. Andas flojito en naturales"));
  } else if(aciertos==3){
    flexear;
    animalesAsignados.appendChild(crearParrafo).appendChild(document.createTextNode("Lograste 3 aciertos. Eres una rata. Te recomiendo un par de libros sobre animales para que vayas mejorando "));
  } else if(aciertos==4){
    flexear;
    animalesAsignados.appendChild(crearParrafo).appendChild(document.createTextNode("Tienes 4 aciertos. Eres un orangután. No está mal, pero hay que mejorar"));
  } else if(aciertos==5){
    flexear;
    animalesAsignados.appendChild(crearParrafo).appendChild(document.createTextNode("Has acertado 5 preguntas. Tu animal es el caballo. Vas por buen camino pero aún te falta"));
  } else if(aciertos==6){
    flexear;
    animalesAsignados.appendChild(crearParrafo).appendChild(document.createTextNode("Conseguiste 6 aciertos! Eres un zorro. No está nada mal, se nota que atendiste en clase."));
  } else if(aciertos==7){
    flexear;
    animalesAsignados.appendChild(crearParrafo).appendChild(document.createTextNode("Lograste 7 aciertos. Eres un elefante. Se nota que viste todos los capítulos de Frank de la Jungla."));
  } else if(aciertos==8){
    flexear;
    animalesAsignados.appendChild(crearParrafo).appendChild(document.createTextNode("Wow, 8 aciertos. Tu animal es el lobo. Vaya vaya, tenemos aquí al nuevo Felix Rodriguez de la Fuente."));
  } else if(aciertos==9){
    flexear;
    animalesAsignados.appendChild(crearParrafo).appendChild(document.createTextNode("9 aciertos!!Eres un jaguar. Estás al nivel de Frank de la Jungla."));
  } else if(aciertos==10){
    flexear;
    animalesAsignados.appendChild(crearParrafo).appendChild(document.createTextNode("Acertaste todas las preguntas!! Eres un león. Se nota que vas al baño con un libro de National Geographic"));
  }

window.scrollTo(0,9000);
document.getElementById("animalesQuiz").style.display= "none";

}

document.querySelector(".form").addEventListener("submit", evalQuiz);