function mostrar()
{

    var planetaDelSistSolar;

    planetaDelSistSolar= prompt("Ingrese el nombre de un planeta");

    switch (planetaDelSistSolar)
    {
        case "tierra":
        {
            alert("Acá vivimos");
            break;
        }
        case "mercurio":
        case "venus":
        {
            alert("Acá hace mas calor");
            break;
        }
        case "marte":
        case "júpiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "plutón":
        {
            alert("Acá hace mas frío");
            break;
        }
        default:
            alert("Este no es un planeta");
            break;
    }
}
