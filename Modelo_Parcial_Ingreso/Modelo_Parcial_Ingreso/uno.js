
function mostrar()
{
    // 1) Declaro variables;
    var ladoA;
    var ladoB;
    var tieneAngulosRectos; 
    var mensaje;

    // 2) Inicializo las variables y valido;
    ladoA = document.getElementById("ladoA").value;
    ladoA = parseInt(ladoA);
    
    while(isNaN(ladoA) || ladoA < 0) {
        ladoA = prompt("Error. Ingrese un nùmero positivo para el lado A:");
        ladoA = parseInt(ladoA);
    }
    
    ladoB = document.getElementById("ladoB").value;
    ladoB = parseInt(ladoB);

    while(isNaN(ladoB) || ladoB < 0) {
		ladoB = prompt("Error. Ingrese un nùmero positivo para el lado B:");
        ladoB = parseInt(ladoB);
    }

    tieneAngulosRectos = document.getElementById("angulosRectos").value;
   
    mensaje = "Lados concatenados: " + ladoA + ladoB + ".";

    // 3) Proceso los datos
    if (tieneAngulosRectos == "SI") {
        if(ladoA === ladoB) {
            var multiplicacion = ladoA * ladoB;
            mensaje += " Es un cuadrado y sus lados multiplicados dan " + multiplicacion + ".";
        }
        else {
            var superficie = ladoA * ladoB;
            mensaje += " Es un rectángulo con una superficie de " + superficie + ".";
        }
    } 
    else {
        if(ladoA === ladoB) {
            var suma = ladoA + ladoB;
            mensaje += " Es un rombo y la suma de los lados es " + suma + ".";    
        }
        else {
            var perimetro = 2* (ladoA + ladoB);
            mensaje += " Es un romboide con un perímetro de " + perimetro + ".";
        }
    }

    //4) Muestro los resultados
    alert(mensaje);
}