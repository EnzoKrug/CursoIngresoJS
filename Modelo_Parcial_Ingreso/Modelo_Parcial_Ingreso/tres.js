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
    var mensaje ="";
    var cantTempImpar=0;
    var paisConTempMaxima;
    var cantPaises=0;
    var paisConMasHabitantes;
    var cantPaisesMenos20=0;
    var acumuladorHabitantes=0;
    var promedioDeHabitantes=0;
    var tempMaxima=0;


    //2-Inicializo las variables y las valido.
    do {
        
        pais=prompt("Ingrese el nombre de un país:");
        cantHabitantes=prompt("Ingrese la cantidad de habitantes, en millones, de ese país (entre 1 y 270):");
        cantHabitantes=parseInt(cantHabitantes);
        while(isNaN(cantHabitantes) || cantHabitantes <1 || cantHabitantes >270)
        {
            cantHabitantes=prompt("ERROR. reingrege la cantidad de habitantes en millones (entre 1 y 270):");
            cantHabitantes=parseInt(cantHabitantes);
        }
        temperaturaMin=prompt("Ingrese la temperatura mínima que se registra en el territorio de ese país (entre -50 y 50):");
        temperaturaMin=parseInt(temperaturaMin);
        while(isNaN(temperaturaMin) || temperaturaMin<-50 || temperaturaMin>50)
        {
            temperaturaMin=prompt("ERROR. Reingrese la temperatura mínima que se registra en ese territorio (entre -50 y 50):");
            temperaturaMin=parseInt(temperaturaMin);
        }
        respuesta=prompt("Quiere seguir ingresando datos de otros paises (si/no):").toLowerCase();
        while(respuesta!="no" && respuesta!="si")
        {
            respuesta=prompt("ERROR. Reingrese si o no:").toLowerCase();
        }
        // Punto A
        if(temperaturaMin %2 !=0)
        {
            cantTempImpar++;
        }
        else
        {
            mensaje+="No se a ingresado ningún número impar." + ".<br>";
        }
        // Punto B

        // Punto C
        if(temperaturaMin<20)
        {
            cantPaisesMenos20++;
        }
        else
        {
            mensaje+="No se a ingresado ningún país, por debajo de los 20º." + ".<br>";
        }
        // Punto D
        if(cantHabitantes>=1)
        {
            acumuladorHabitantes+=cantHabitantes;
            cantPaises++;
            promedioDeHabitantes = acumuladorHabitantes/cantPaises;

        }
        //  Punto E
        if(temperaturaMin>tempMaxima)
        {
            tempMaxima=temperaturaMin;
            paisConTempMaxima=pais;
        }

    } while (respuesta=="si");

    //3-Proceso de datos.

    //A) 
    mensaje+="La cantidad de temperaturas impares son: " + cantTempImpar + ".<br>";
    //B)
    mensaje
    //C) 
    mensaje+="La cantidad de paises por debajo de los 20 grados son: " + cantPaisesMenos20 + ".<br>";
    //D)
    mensaje+="El promedio de habitantes entre los paises ingresados son: " + promedioDeHabitantes + " millones." + ".<br>";
    //E)
    mensaje+="La temperatura máxima ingresada, y nombre del pais que registro esa temperatura son: " + paisConTempMaxima + " y " + tempMaxima + "º" + ".<br>";


    //4-Muestro los resultados.
    document.write(mensaje);



}
