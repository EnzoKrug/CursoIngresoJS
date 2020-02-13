/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numeroUno;
    var numeroDos;

    numeroUno= document.getElementById("numeroUno").value;
    numeroDos= document.getElementById("numeroDos").value;

    numeroUno= parseInt(numeroUno);
    numeroDos= parseInt(numeroDos);
 
    alert("Su suma es: " + (numeroUno + numeroDos));
}

function restar()
{
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno= document.getElementById("numeroUno").value;
    numeroDos= document.getElementById("numeroDos").value;

    numeroUno= parseInt(numeroUno);
    numeroDos= parseInt(numeroDos);      

    resultado= (numeroUno - numeroDos);
    
    alert("Su resta es: " + (resultado));	
}

function multiplicar()
{ 
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno= parseInt(numeroUno);
    numeroDos= parseInt(numeroDos);

    numeroUno= document.getElementById("numeroUno").value;
    numeroDos= document.getElementById("numeroDos").value;

    numeroUno= parseInt(numeroUno);
    numeroDos= parseInt(numeroDos);
S
    resultado= (numeroUno * numeroDos);
    
    alert("Su multiplicación es: " + resultado);	
}

function dividir()
{
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno= document.getElementById("numeroUno").value;
    numeroDos= document.getElementById("numeroDos").value;

    numeroUno= parseInt(numeroUno);
    numeroDos= parseInt(numeroDos);

    resultado= (numeroUno / numeroDos);
    
    alert("Su divición es: " + resultado);	
}

