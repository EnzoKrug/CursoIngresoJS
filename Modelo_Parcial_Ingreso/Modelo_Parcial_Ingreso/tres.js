/*Realizar el algoritmo que permita ingresar el nombre de un país,
cantidad de habitantes en millones entre 1 y 270 (validar que sea un número en ese rango),
y la temperatura mínima que se registra en su territorio (validar que sea un número entre -50 y 50)
hasta que el usuario quiera
e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas impares.
b) El nombre del pais con más habitantes.
c) La cantidad de paises por debajo de los 20 grados.
d) El promedio de habitantes entre los paises ingresados.
f) La temperatura máxima ingresada, y nombre del pais que registro esa temperatura.
*/
function mostrar()
{
    //1-Declaro variables.
    var pais;
    var cantHabitantes;
    var temperaturaMin;
    var respuesta;

    //2-Inicializo las variables y las valido.
    do {
        
        pais=prompt("Ingrese el nombre de un país:");
        cantHabitantes=prompt("Ingrese la cantidad de habitantes, en millones, de ese país (entre 1 y 270):");
        cantHabitantes=parseInt(cantHabitantes);
        while(cantHabitantes<1 && cantHabitantes>270)
        {
            cantHabitantes=prompt("ERROR. reingrege la cantidad de habitantes en millones (entre 1 y 270):");
            cantHabitantes=parseInt(cantHabitantes);
        }
        temperaturaMin=prompt("Ingrese la temperatura mínima que se registra en el territorio de ese país (entre -50 y 50):");
        temperaturaMin=parseInt(temperaturaMin);
        while(temperaturaMin<-50 && temperaturaMin>50)
        {
            temperaturaMin=prompt("ERROR. Reingrese la temperatura mínima que se registra en ese territorio (entre -50 y 50):");
            temperaturaMin=parseInt(temperaturaMin);
        }
        if(temperaturaMin)
        {

        }


    } while (respuesta);

    //3-Proceso de datos.




    //4-Muestro los resultados.



}
