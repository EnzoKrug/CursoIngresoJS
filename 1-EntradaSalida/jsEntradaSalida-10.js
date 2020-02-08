/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    var importeConAumento;

    importe= parseInt(importe);
    importeConAumento= parseInt(importeConAumento);

    importe= document.getElementById("importe").value;

    importeConAumento= importe - (importe * 0.25);

    document.getElementById("resultado").value= importeConAumento;	
}
