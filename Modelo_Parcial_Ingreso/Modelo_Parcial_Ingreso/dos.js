function mostrar()
{
    var persona=0;
    var nombre;
    var contador=0;
    var genero=0;
    var edad=0;
    var peso=0;
    var acumulador=0;
    var acumGenero;
    var acumEdad=0;
    var acumPeso=0;
    var cantPersPesoM80=0;
    var personaMenosPesada=0;
    var promedio=0;

    for (contador = 0; contador< 4; contador++) {

        nombre=prompt("Ingrese el nombre de las 4 personas:");
        acumulador=nombre +nombre;
        }
        alert(acumulador);
   
        genero=prompt("Ingrese el genero:");
        while(genero!="masculino" || genero!="femenino" || genero!="otro")
        {
            genero=prompt("Ingrese el genero correcto:");   
            acumgenero=genero;     
        }

        edad=parseInt(prompt("Ingrese la edad:"));
        while(edad<18 && edad>100)
        {
            edad=parseInt(prompt("Ingrese la edad correcta:")); 
            acumEdad=edad;    
        }

        peso=parseInt(prompt("Ingrese el peso:"));
        while(peso=isNaN && peso<1)
        {
            peso=parseInt(prompt("Ingrese el peso correcto:")); 
            acumPeso=peso;       
        }
        
        
}
