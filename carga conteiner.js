 /*c)Se pide la carga de datos de un contenedor  de alimento canino con un máximo de 
 carga de 1000kg, cargar hasta que el cliente quiera o se llene el contenedor.
    se pide:
    marca
    kilos por bolsa
    cantidad de bolsa
    importe por bolsa
    
    a-que marca tiene más kilos en el contenedor
    b-que marca tiene más bolsas de alimento en el contenedor
    c-que marca tiene el mayor importe por bolsa de alimento
    d-el importe y la marca de la bolsa de alimento menos pesada.*/
 function mostrar()
{
   var marca;
   var kilosPorBolsa;
   var cantidadDeBolsa;
   var importePorBolsa;
   var respuesta;
   var mensaje="";


   do {
        marca=prompt("Ingrese la marca de la bolsa:");
        kilosPorBolsa=prompt("Ingrese la cantidad de kilos por bolsa:");
        kilosPorBolsa=parseInt(kilosPorBolsa);
        while(isNaN(kilosPorBolsa) || kilosPorBolsa<1)
        {
            kilosPorBolsa=prompt("ERROR. Reingrese la cantidad de kilos:");
            kilosPorBolsa=parseInt(kilosPorBolsa);
        } 
    




   } while (respuesta=="si");











}
    
