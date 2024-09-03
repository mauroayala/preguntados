var categorias=[];
var categoriasTitulos=["Historia","Geografía","Arte y Literatura","FIN"];
var categoriaActual=0;
var header = document.getElementById("header");


		
function validarRespuesta(estado, respuesta, pregunta) {
    let feedback = "";
    var botonRespuestaSeleccionada = document.getElementById("respuesta" + respuesta);

    // Limpiar las clases anteriores de todos los botones en la pregunta actual
    var botones = document.querySelectorAll("#pregunta" + pregunta + " .btn");
    botones.forEach(boton => boton.classList.remove("correcto", "incorrecto"));

    // Añadir la clase correspondiente al botón seleccionado
    if (estado === 1) {
        botonRespuestaSeleccionada.classList.add("correcto");
        feedback = "Correcto";
    } else {
        botonRespuestaSeleccionada.classList.add("incorrecto");
        feedback = "Incorrecto";
    }

    document.getElementById("feedback").textContent = feedback;
    muestraPreguntaSiguiente(pregunta);
}

function muestraPreguntaSiguiente(pregunta) {
    setTimeout(() => {
        var preguntaSiguiente = pregunta + 1;		
		
		cambiarCategoriaArray(pregunta);
        // Cambiar el número de la pregunta en el header
        document.getElementById("numeroPregunta").textContent = "Pregunta número: " + preguntaSiguiente;

        // Ocultar la pregunta actual y mostrar la siguiente
        document.getElementById("feedback").textContent = "";
        document.getElementById("pregunta" + pregunta).style.display = "none";
        document.getElementById("pregunta" + preguntaSiguiente).style.display = "block";
    }, 5000);
}


function iniciarPreguntados(){ 
		cargarClasesCategorias(); 
		muestroCategoria(); 

}


function cargarClasesCategorias(){
	categorias.push("historia");
	categorias.push("geografia");
	categorias.push("arte");
	categorias.push("fin"); 
}


function cambiarCategoriaArray(numeroPreguntaActual){
			cambiarColorCategoria(numeroPreguntaActual);
			muestroCategoria();
}


function cambiarColorCategoria(numeroPreguntaActual){
			header.className = ""
			let posicion=numeroPreguntaActual;
            header.classList.add(categorias[categoriaActual]);
}


function muestroCategoria(){
document.getElementById("tituloCategoria").textContent =categoriasTitulos[categoriaActual];
categoriaActual++;
}