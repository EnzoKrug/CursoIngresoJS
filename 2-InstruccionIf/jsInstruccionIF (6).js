function mostrar()
{
//tomo la edad  

    var edad;
        
    edad= document.getElementById("edad").value;

    edad=parseInt(edad);

    if (edad<=13)
    {
        alert("Usted es niño/a");
    }
    else if (edad>=13 && edad<=17)
    {
        alert("Usted es adolescente");
    }
    else 
    {
        alert("Usted es mayor de edad");
    }

}//FIN DE LA FUNCIÓN