function validarRespuesta(estado,respuesta,pregunta){
		feedback="";
	    botonrespuestaSeleccionada = document.getElementById("respuesta"+respuesta);
		if(estado==1){
		botonrespuestaSeleccionada.classList.add("correcto");
		feedback="Correcto";
		}else{
		botonrespuestaSeleccionada.classList.add("incorrecto");
		feedback="Incorrecto";
		}
		
		
		document.getElementById("feedback").textContent =feedback;
 		siguiente(pregunta);   
}

 


function siguiente(pregunta){
 		preguntaSiguiente = pregunta+1;
		
		setTimeout(() => {
		document.getElementById("feedback").textContent ="";
	  	document.getElementById("pregunta"+pregunta).style.display = "none";
	  	document.getElementById("pregunta"+preguntaSiguiente).style.display = "block";
		}, 5000);



}