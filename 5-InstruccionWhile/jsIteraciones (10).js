function mostrar()
{
	var contador=0;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadCeros=0;
	var cantidadNumerosPares=0;
	var promedioNegativos=0;
	var promedioPositivos=0;
	var diferenciaEntrePosNeg=0;
	var respuesta;
	var numeroIngresado=0;
	do {
		numeroIngresado = parseInt(prompt("ingrese un numero. Numeros ingresados hasta el momento: "+ contador));
		while(isNaN(numeroIngresado) || numeroIngresado=="") 
		{
			numeroIngresado = parseInt(prompt("No ingreso un numero.Por favor reingrese. Numeros ingresados hasta el momento: "+ contador));
		}
		if(numeroIngresado>0) //positivo
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
			cantidadPositivos++;
		}
		else if(numeroIngresado<0) // negativo
		{
			sumaNegativos = sumaNegativos + numeroIngresado;
			cantidadNegativos++;
		}
		else
		{
			cantidadCeros++;	
		}
		if(numeroIngresado%2==0)
		{
			cantidadNumerosPares++;
		}
		respuesta=prompt("Desea continuar? S / N").toLowerCase();
		while(respuesta!="s" && respuesta !="n")
		{
			respuesta=prompt("Respuesta no valida. Por favor ingrese  S para continuar o  N para salir").toLowerCase();
		}
		contador++;
	} while (respuesta == 's');
	if(cantidadNegativos>0)
	{
		promedioNegativos = sumaNegativos / cantidadNegativos;
	}	
	if(cantidadPositivos>0)
	{
		promedioPositivos = sumaPositivos /cantidadPositivos;
	}
	diferenciaEntrePosNeg = cantidadPositivos-cantidadNegativos;
	//mostrar
	document.write("Suma de los negativos: " + sumaNegativos + " <br>");
	document.write("Suma de los positivos: " + sumaPositivos+ " <br>");
	document.write("cantidad de los negativos: " + cantidadNegativos +" <br>");
	document.write("cantidad de los negativos: " + cantidadPositivos +" <br>");
	document.write("cantidad de ceros: " + cantidadCeros +" <br>");
	document.write("cantidad de los numeros pares: " + cantidadNumerosPares +" <br>");
	document.write("promedio de los positivos: " + promedioPositivos +" <br>");
	document.write("promedio de los negativos: " + promedioNegativos +" <br>");
	document.write("Diferencia de los positivos y negativos: " + diferenciaEntrePosNeg +" <br>");
}//FIN DE LA FUNCIÓN