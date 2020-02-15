function mostrar()
{
//Genero el número RANDOM entre 1 y 10 
	
	var numero;

	nota=Math.floor(Math.random()*11-1)+1  ;

	nota=parseInt(nota);
	if(nota>=9)
	{
		alert(nota + " EXCELENTE");
	}
	else if (nota<=3)
	{
		alert(nota +" Mejor suerte la proxima");
	}
	else
	{
		alert(nota +" Aprobado");
	}
}
//FIN DE LA FUNCIÓN