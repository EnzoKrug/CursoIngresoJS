function mostrar()
{
    var precio;
    var descuento=descuento;
    var precioFinal;

    precio=parseInt(prompt("Ingrese el precio:"));
    descuento=parseInt(prompt("Ingrese el descuento en %:"));

    precioFinal=precio*(descuento/100);
    precioFinal=parseInt(precioFinal);
    document.getElementById("elPrecioFinal").value=precioFinal;
}
