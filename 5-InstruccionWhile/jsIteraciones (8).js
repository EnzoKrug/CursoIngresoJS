function mostrar()
{

	var acumlador=0;
	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';

	while(respuesta='si')
	{
		acumulador=parseInt(prompt("Ingrese un numero:"));
		if(acumulador>=0)
		{
			positivo=acumulador+positivo;
		}
		else 
		{
			negativo=acumulador*negativo;
		}
		respuesta=prompt("Desea continuar?").toLowerCase();
		while(respuesta!='si' && respuesta!='no')
		{
			respuesta=prompt("si o no:").toLowerCase();
		} 
	}
	respuesta=prompt("Desea continuar?").toLowerCase();
	while(respuesta!='si' && respuesta!='no')
	{
		respuesta=prompt("si o no?").toLowerCase();
	}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN