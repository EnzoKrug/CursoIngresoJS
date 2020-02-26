function mostrar()
{
	var numero=0
	var contador=0;
	var numMax;
	var numMin;
	var continuar;
	// declarar variables

	do{
		numero=parseInt(prompt("Ingresar numero:"));
		if(contador == 0)
		{
			numMax=numero;
			numMin=numero;
		}
		else{
				if(numMax<numero)
				{
					numMax= numero;
				}
				if(numMin>numero)
				{
					numMin=numero;
				}
		}
		continuar=prompt("Desea seguir ingresando? si o no")

		contador++;
	}while(continuar=="si");

	document.getElementById("maximo").value=numMax;
	document.getElementById("minimo").value=numMin;
}//FIN DE LA FUNCIÓN