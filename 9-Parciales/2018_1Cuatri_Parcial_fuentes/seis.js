function mostrar()
{
    var hora;
    hora=document.getElementById("laHora").value;
    hora=parseInt(hora);

    switch(hora)
    {
        case hora:
        {
            if (hora>=6 && hora<=11)  
            {
                alert("Es de mañana");
            }     
            else if (hora>11 && hora<20)
            {
                alert("Es de tarde");
            }
            else if (!(hora>=0 && hora<=24))
            {
                alert("Esta hora no es valida");
            }
            else 
            {
                alert("Es de noche, a dormir");
            }
            break;
        }
    }

}
