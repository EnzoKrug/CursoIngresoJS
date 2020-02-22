function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while(respuesta=='si')
	{
		numero=parseInt(prompt("Ingrese sus notas:"));
		acumulador=numero+acumulador; 
		contador++;	
		respuesta=prompt("Desea continuar?").toLowerCase();
		while(respuesta!='si' && respuesta!='no')
		{
			respuesta=prompt("si o no?").toLowerCase();
		}
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN