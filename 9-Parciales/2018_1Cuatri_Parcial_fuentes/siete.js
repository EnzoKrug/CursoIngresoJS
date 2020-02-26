function mostrar()
{
    var contador=0;
    var acumulador=0;
    var nota;
    var alumnos=0;
    var sexo;

    alumnos=parseInt(prompt("Ingrese la cantidad de alumnos:"));
    do {

        nota=parseInt(prompt("Ingrese las notas de los " + alumnos + " alumnos:"));
        while (nota=isNaN || (!(nota>0 && nota<10))
        {
            nota=parseInt(prompt("Caracter ingresado incorrecto, por favor ingrese una nota valida: "));

        }


        contador++;
    } while (contador<=alumnos);
}
