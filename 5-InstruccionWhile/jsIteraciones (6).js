function mostrar()
{
	var contador=0;
	var acumulador=0;
	var numero;

	while(contador<5)
	{
		numero=parseInt(prompt("Ingrese sus notas:"));
		acumulador=numero+acumulador; 
		contador++;	
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;


}//FIN DE LA FUNCIÓN