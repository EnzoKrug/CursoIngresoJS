
function mostrar()
{
    var ladoA=0;
    var ladoB=0;
    var angRectos="Sí";

    ladoA=document.getElementById("ladoA").value;
    ladoB=document.getElementById("ladoB").value;
    ladoA=parseInt(ladoA);
    ladoB=parseInt(ladoB);

    document.getElementById("angulosRectos").value=angRectos;

    if(ladoA!=ladoB && angRectos=="No")
        {
            alert("Lado A: " + ladoA + ", Lado B: "+ ladoB+" " +"Lados concatenados: " + ladoA+""+ladoB + " La superficie es: " + ladoA*ladoB);
        }
    else
    {
        if (ladoA!=ladoB && angRectos=="Sí")
        {
            alert("Lado A: " + ladoA + ", Lado B: "+ ladoB+" "+"Lados concatenados: " + ladoA+""+ladoB+ " El perimetro: "+ (ladoA*2)+(ladoB*2));
        }
        if(ladoA=ladoB && angRectos=="Sí")
            {
                alert("Lado A: " + ladoA + ", Lado B: "+ ladoB+" "+"Lados concatenados: " + ladoA+""+ladoB+ " La multiplicaión de los lados es: "+ (ladoA)*(ladoB));
            }
        else if(ladoA=ladoB && angRectos=="No")
            {
                alert("Lado A: " + ladoA + ", Lado B: "+ ladoB+" "+"Lados concatenados: " + ladoA+""+ladoB+ "  La suma de sus lados es: "+ladoA+ladoB);
            }
    }  
}

