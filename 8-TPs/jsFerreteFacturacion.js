/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
    var precio1;
    var precio2;
    var precio3;
    var resultado;

    precio1=document.getElementById("PrecioUno").value;
    precio2=document.getElementById("PrecioDos").value;
    precio3=document.getElementById("PrecioTres").value;

    precio1=parseInt(precio1);
    precio2=parseInt(precio2);
    precio3=parseInt(precio3);

    resultado= precio1+precio2+precio3;
    resultado= parseInt(resultado);

function Sumar () 
{
    alert("Su suma es: " + resultado);
}
function Promedio () 
{
	alert("Su promedio es: " + (resultado/3));
}
function PrecioFinal () 
{
	alert("Su precio final es: " + (resultado*1.21));
}