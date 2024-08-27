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
		detenerRespuestas();	
		siguiente(pregunta);   
}

function detenerRespuestas(){
	for(i=1;i<=4;i++){
  		document.getElementById("respuesta" + i).disabled = true;
	}
	
}


function siguiente(pregunta){
 		preguntaSiguiente = pregunta+1;
		
		setTimeout(() => {
	  	document.getElementById("pregunta"+pregunta).style.display = "none";
	  	document.getElementById("pregunta"+preguntaSiguiente).style.display = "block";
		}, 5000);



}