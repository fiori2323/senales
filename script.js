const signs = [
    { name: "Altura limitada", img: " alturalimitada.png" },
    { name: "Ambas direcciones permitidas", img: "signals/ambasdireccionespermitidas.png" },
    { name: "Ancho limitado", img: "signals/ancholimitado.png" },
    { name: "Animales sueltos", img: "signals/animalessueltos.png" },
    { name: "Atencion", img: "signals/atencion.png" },
    { name: "Baden", img: "signals/baden.png" },
    { name: "Baderillero", img: "signals/banderillero.png" },
    { name: "Bifurcacion", img: "signals/bifurcacion.png" },
    { name: "Bifurcacion", img: "signals/bifurcacion1.png" },
    { name: "Bifurcacion permitida", img: "signals/bifurcacionpermitida.png" },
    { name: "Calle sin salida", img: "signals/callesinsalida.png" },
    { name: "Calle transitable", img: "signals/calletransitable.png" },
    { name: "Calzada dividida", img: "signals/calzadadividida.png" },
    { name: "Calzada resbaladiza", img: "signals/calzadaresbaladiza.png" },
    { name: "Camino sinuoso", img: "signals/caminosinuoso.png" },
    { name: "Ceda el paso", img: "signals/cedaelpaso.png" },
    { name: "Ciclistas", img: "signals/ciclistas.png" },
    { name: "Circulacion exclusiva de bicicletas", img: "signals/circulacionexclusivabicicletas.png" },
    { name: "Circulacion exclusiva de jinetes", img: "signals/circulacionexclusivajinetes.png" },
    { name: "Circulacion exclusiva de motos", img: "signals/circulacionexclusivamotos.png" },
    { name: "Circulacion exclusiva de peatones", img: "signals/circulacionexclusivapeatones.png" },
    { name: "Circulacion exclusiva de transporte publico", img: "signals/circulacionexclusivatransportepulico.png" },
    { name: "Comienzo de autopista", img: "signals/comienzodeautopista.png" },
    { name: "Comienzo de doble mano", img: "signals/comienzodedoblemano.png" },
    { name: "Contramano", img: "signals/contramano.png" },
    { name: "Corredor aereo", img: "signals/corredoraereo.png" },
    { name: "Cruce de peatones", img: "signals/crucedepeatones.png" },
    { name: "Cruce ferroviario", img: "signals/cruceferroviario.png" },
    { name: "Cruz de san andres", img: "signals/cruzdesanandres.png" },
    { name: "Cruz de san andres", img: "signals/cruzdesanandres1.png" },
    { name: "Curva", img: "signals/curva.png" },
    { name: "Curva cerrada", img: "signals/curvacerrada.png" },
    { name: "Curva contracurva", img: "signals/curvacontracurva.png" },
    { name: "Cruva en S", img: "signals/curvaens.png" },
    { name: "Derrumbes", img: "signals/derrumbes.png" },
    { name: "Desvio", img: "signals/desvio.png" },
    { name: "Direccion permitida a la derecha", img: "signals/direccionpermitidadch.png" },
    { name: "Direccion permitida de igual sentido o derecha", img: "signals/direccionpermitidaigualsentidoodch.png" },
    { name: "Direccion permitida de igual sentido o izquierda", img: "signals/direccionpermitidaigualsentidooizquierda.png" },
    { name: "Direccion permitida a la izquierda", img: "signals/direccionpermitidaizq.png" },
    { name: "Encrucijada Cruce", img: "signals/encrucijadacruce.png" },
    { name: "Encrucijada empalme", img: "signals/encrucijadaempalme.png" },
    { name: "Equipo pesado en via", img: "signals/equipopesadoenvia.png" },
    { name: "Escolares", img: "signals/escolares.png" },
    { name: "Esquema de recorrido", img: "signals/esquemaderecorrido.png" },
    { name: "Estacionamiento exclusivo", img: "signals/estacionamientoexclusivo.png" },
    { name: "Estrechamiento en dos manos", img: "signals/estrechamientodosmanos.png" },
    { name: "Estrechamiento en una mano", img: "signals/estrechamientounamano.png" },
    { name: "Fin de autopista", img: "signals/findeautopista.png" },
    { name: "Fin de prescripcion", img: "signals/findeprescripcion.png" },
    { name: "Fin de prescripcion", img: "signals/findeprescripcion1.png" },
    { name: "Fin de prevencion", img: "signals/findeprevencion.png" },
    { name: "Fin de prevencion", img: "signals/findeprevencion1.png" },
    { name: "Flecha direccional", img: "signals/flechadireccional.png" },
    { name: "Giro obligatorio a la derecha", img: "signals/giroobligatoriodch.png" },
    { name: "Giro obligatorio a la izquierda", img: "signals/giroobligatorioizq.png" },
    { name: "Personas trabajando", img: "signals/hombrestrabajando.png" },
    { name: "Incorporacion de transito lateral", img: "signals/incorporaciondetransitolateral.png" },
    { name: "Indicador de carriles", img: "signals/indicadordecarriles.png" },
    { name: "Inicio de doble circulacion", img: "signals/iniciodedoblecirculacion.png" },
    { name: "Jinetes", img: "signals/jinetes.png" },
    { name: "Limitacion de altura", img: "signals/limitaciondealtura.png" },
    { name: "Limitacion de ancho", img: "signals/limitaciondeancho.png" },
    { name: "Limitacion de largo", img: "signals/limitaciondelargo.png" },
    { name: "Limitacion de peso", img: "signals/limitaciondepeso.png" },
    { name: "Limitacion de peso por eje", img: "signals/limitaciondepesoporeje.png" },
    { name: "Limite de velocidad maxima", img: "signals/limitedevelocidadmax.png" },
    { name: "Limite de velocidad minima", img: "signals/limitedevelocidadmin.png" },
    { name: "Loma de burro", img: "signals/lomadeburro.png" },
    { name: "Luces bajas encendidas", img: "signals/lucesbajasencendidas.png" },
    { name: "Niños", img: "signals/niños.png" },
    { name: "No avanzar", img: "signals/noavanzar.png" },
    { name: "No estacionar", img: "signals/noestacionar.png" },
    { name: "No estacionar ni detenerse", img: "signals/noestacionarnidetenerse.png" },
    { name: "No girar a la derecha", img: "signals/nogirardch.png" },
    { name: "No girar a la izquierda", img: "signals/nogirarizq.png" },
    { name: "No girar en U", img: "signals/nogiraru.png" },
    { name: "No ruidos molestos", img: "signals/noruidosmolestos.png" },
    { name: "Paneles de prevencion", img: "signals/panelesdeprevencion.png" },
    { name: "Paneles de prevencion de curva", img: "signals/panelesdeprevencioncurva.png" },
    { name: "Paneles de prevencion de curva", img: "signals/panelesdeprevencioncurva1.png" },
    { name: "Paneles de prevencion de obstaculo rigido", img: "signals/panelesdeprevencionobstaculorigido.png" },
    { name: "Pare", img: "signals/pare.png" },
    { name: "Paso obligado a la izquierda", img: "signals/pasoobligadoalaizq.png" },
    { name: "Paso obligado a la derecha", img: "signals/pasoobligadodch.png" },
    { name: "Peatones por la izquierda", img: "signals/peatonesporlaiz.png" },
    { name: "Pendiente ascendente", img: "signals/pendienteasc.png" },
    { name: "Pendiente descendente", img: "signals/pendientedesc.png" },
    { name: "Perfil irregular", img: "signals/perfilirregular.png" },
    { name: "Permitido estacionar", img: "signals/permitidoestacionar.png" },
    { name: "Permitido girar a la derecha", img: "signals/permitidogirardch.png" },
    { name: "Permitido girar a la izquierda", img: "signals/permitidogirarizq.png" },
    { name: "Preferencia de avance", img: "signals/preferenciadeavance.png" },
    { name: "Presencia de ambulancia", img: "signals/presenciadeambulancia.png" },
    { name: "Presencia de tractor", img: "signals/presenciadetractor.png" },
    { name: "Presencia de tranvia", img: "signals/presenciadetranvia.png" },
    { name: "Prohibicion de circular acoplado", img: "signals/prohibiciondecircularacoplado.png" },
    { name: "Prohibicion de circular animales", img: "signals/prohibiciondecircularanimales.png" },
    { name: "Prohibicion de circular autos", img: "signals/prohibiciondecircularautos.png" },
    { name: "Prohibicion de circular bicicletas", img: "signals/prohibiciondecircularbicicletas.png" },
    { name: "Prohibicion de circular camiones", img: "signals/prohibiciondecircularcamiones.png" },
    { name: "Prohibicion de circular carro de mano", img: "signals/prohibiciondecircularcarrodemano.png" },
    { name: "Prohibicion de circular motos", img: "signals/prohibiciondecircularmotos.png" },
    { name: "Prohibicion de circular peatones", img: "signals/prohibiciondecircularpeatones.png" },
    { name: "Prohibicion de circular traccion animal", img: "signals/prohibiciondecirculartraccionanimal.png" },
    { name: "Prohibicion de circular tractor", img: "signals/prohibiciondecirculartractor.png" },
    { name: "Prohibido adelantar", img: "signals/prohibidoadelantar.png" },
    { name: "Prohobido cambiar de carril", img: "signals/prohibidocambiardecarril.png" },
    { name: "Proximidad de pare", img: "signals/proximidaddepare.png" },
    { name: "Proximidad de paso", img: "signals/proximidaddepaso.png" },
    { name: "Proyeccion de piedas", img: "signals/proyecciondepiedras.png" },
    { name: "Puente angosto", img: "signals/puente.png" },
    { name: "Puente movil", img: "signals/puentemovil.png" },
    { name: "Puesto de control", img: "signals/puestodecontrol.png" },
    { name: "Rotonda", img: "signals/rotonda.png" },
    { name: "Ruta nacional", img: "signals/rutanacional.png" },
    { name: "Ruta panamericana", img: "signals/rutapanamericana.png" },
    { name: "Ruta provincial", img: "signals/rutaprovincial.png" },
    { name: "Semaforo", img: "signals/semaforo.png" },
    { name: "Sentido de circulacion alternativa", img: "signals/sentidodecirculacionalternativa.png" },
    { name: "Sentido de circulacion derecha", img: "signals/sentidodecirculaciondch.png" },
    { name: "Sentido de circulacion izquierda", img: "signals/sentidodecirculacionizq.png" },
    { name: "Sentido de circulacion unica", img: "signals/sentidodecirculacionunico.png" },
    { name: "Transito pesado a la derecha", img: "signals/transitopesadoaladch.png" },
    { name: "Tunel", img: "signals/tunel.png" },
    { name: "Uso de cadenas de nieve", img: "signals/usodecadenasdenieve.png" },
    { name: "Velocidades permitidas", img: "signals/velocidadespermitidas.png" },
    { name: "Vientos fuertes laterales", img: "signals/vientosfuerteslaterales.png" },

];

let currentSignIndex = 0;
let correctCount = 0;
let incorrectCount = 0;

const submitButton = document.getElementById("submit-btn");
const imageElement = document.getElementById("sign-image");
const guessInput = document.getElementById("guess");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const resultsDiv = document.getElementById("results");
const correctCountElement = document.getElementById("correct-count");
const incorrectCountElement = document.getElementById("incorrect-count");
const correctAnswerElement = document.getElementById("correct-answer");
const nextButton = document.getElementById("next-btn");

function loadSign() {
    if (currentSignIndex < signs.length) {
        imageElement.src = signs[currentSignIndex].img;
        guessInput.value = "";
        feedbackElement.textContent = "";
        correctAnswerElement.textContent = "";
        correctAnswerElement.classList.add("hidden");
        nextButton.classList.add("hidden");
    } else {
        endGame();
    }
}

function checkGuess() {
    const userGuess = guessInput.value.trim().toLowerCase();
    const correctAnswer = signs[currentSignIndex].name.toLowerCase();

    if (userGuess === correctAnswer) {
        correctCount++;
        feedbackElement.textContent = "✅ Correcto!";
    } else {
        incorrectCount++;
        feedbackElement.textContent = "❌ Incorrecto!";
        correctAnswerElement.textContent = `🔹 La respuesta correcta es: ${signs[currentSignIndex].name}`;
        correctAnswerElement.classList.remove("hidden");
    }

    // Ocultar "Submit" y mostrar "Siguiente"
    submitButton.classList.add("hidden");
    nextButton.classList.remove("hidden");

    guessInput.disabled = true; // Desactivar input hasta avanzar
}

function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // switch items
    }
  }
  
  mezclarArray(signs); // mezcla d preguntas

function nextSign() {
    currentSignIndex++;
    
    if (currentSignIndex < signs.length) {
        guessInput.disabled = false; // Habilitar input nuevamente

        // Mostrar "Submit" y ocultar "Siguiente"
        submitButton.classList.remove("hidden");
        nextButton.classList.add("hidden");

        // Limpiar feedback
        feedbackElement.textContent = "";
        correctAnswerElement.textContent = "";
        correctAnswerElement.classList.add("hidden");

        loadSign();
    } else {
        endGame();
    }
}


function endGame() {
    document.querySelector(".container").style.display = "none";
    resultsDiv.classList.remove("hidden");
    correctCountElement.textContent = `✅ Aciertos: ${correctCount}`;
    incorrectCountElement.textContent = `❌ Errores: ${incorrectCount}`;
}

function restartGame() {
    // Reiniciar valores del juego
    currentSignIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
    scoreElement.textContent = "Score: 0";

    // Mostrar el contenedor del juego y ocultar los resultados
    document.querySelector(".container").style.display = "block";
    resultsDiv.classList.add("hidden");

    // Restablecer la imagen, input y feedback
    guessInput.disabled = false;
    feedbackElement.textContent = "";
    correctAnswerElement.textContent = "";
    correctAnswerElement.classList.add("hidden");

    // Asegurar que el botón "Submit" reaparezca y ocultar "Siguiente"
    submitButton.classList.remove("hidden");
    nextButton.classList.add("hidden");

    // Cargar la primera señal
    loadSign();
}



window.onload = loadSign;
