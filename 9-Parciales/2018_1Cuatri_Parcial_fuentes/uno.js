
function mostrar()
{
    var ancho;
    var largo;

    ancho=prompt("Ingrese el ancho del rectángulo: ");
    ancho=parseInt(ancho);
    largo=prompt("Ingrese el largo del rectángulo: ");
    largo=parseInt(largo);

    var perimetro=2*(ancho + largo);

    alert(perimetro);
}
