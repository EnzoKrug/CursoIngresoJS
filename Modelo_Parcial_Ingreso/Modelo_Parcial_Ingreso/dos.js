function mostrar()
{
//Declaro variables
    var contador=0;
    var nombre;
    var genero;
    var edad;
    var peso;
    var acumulador=0;
    var acumGenero;
    var acumEdad=0;
    var acumPeso=0;
    var cantEdadMayor25=0;
    var cantPersPesoM80=0;
    var personaMenosPesada;
    var pesoMinimo;
    var promedioEdad=0;
    var esPrimeraIteracion;
    var cantpersonas=0;
//Inicicalizo variables y valido
    for (contador = 0; contador< 4; contador++) {

        nombre=prompt("Ingrese el nombre de las 4 personas:");

        genero=prompt("Ingrese el genero (femenino/masculino/otros):").toLowerCase;

        while(genero!="masculino" && genero!="femenino" && genero!="otro")
        {
            genero=prompt("Ingrese el genero correcto:").toLowerCase;      
        }

        edad=parseInt(prompt("Ingrese la edad (entre 18 y 100):"));

        // Entiendo que se incluya al 18 y al 100 en los valores permitidos.
        while(isNaN(edad) || edad<18 || edad>100)
        {
            edad=parseInt(prompt("Ingrese la edad correcta:")); 
   
        }

        peso=parseInt(prompt("Ingrese el peso:"));

        // Entiendo que no se incluya al 1.
        while(isNaN(peso) || peso<= 1)
        {
            peso=parseInt(prompt("Ingrese el peso correcto:")); 

        }    
        //Punto A
        if(edad>=25)
        {
            acumEdad += edad;
            cantEdadMayor25++;
        }
        //Punto B
        if(esPrimeraIteracion || peso< pesoMinimo)
        {
            pesoMinimo=peso;
            personaMenosPesada=nombre;
        }
        //entiendo que 80 no esta incluido.
        if(genero!="masculino" || peso>80)
        {
            cantpersonas ++;
        }
        esPrimeraIteracion=false;
        }

        //proceso los datos
        if(cantEdadMayor25>0)
        {
            promedioEdad= acumEdad/cantEdadMayor25;
            respuesta += "El promedio de edades mayores a 25 es " + promedioEdad;
        }
        else
        {
            respuesta +="No se ingresaron edades mayores a 25";
        }
        respuesta += personaMenosPesada + "Es la persona menos pesada y pesa: " +pesoMinimo +"kg.<br>";
        respuesta +="La cantidad de personas de genero distinto de masculino o peso mayor a 80 es: " + cantpersonas;


        //muestro los resultados
        document.write(respuesta);
     
}
