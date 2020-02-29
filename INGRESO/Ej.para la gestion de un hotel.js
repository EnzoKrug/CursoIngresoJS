
/*b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

a-informar el huésped que trajo más personas en una sola reserva.
b-la cantidad de personas que se quedaron más días
c-la forma de pago más utilizada.
d-el promedio de cantidad de días por reserva*/


    // 1) Declaro variables
    function mostrar()
{

    var nombreHuesped;
    var cantPersonas;
    var cantidadDias;
    var formaDePago;
    var respuesta;
    var mensaje="";
    var huespedConMasPersonas;
    var cantDePersonasMasDias=0;
    var contadorDeReserva=0;
    var maxicoCantidadPersonas=0;
    var maxicoCantidadPersonasHuesped=0;
    var maximoDias=0;
    var contadorReservas=0;
    var contadorEfectivo=0;
    var contadorTarjeta=0;
    var contadorQR=0;
    var acumuladorDias=0;
    var promedio;
    var formaDePagoMasUsada;


    
    
    // 2) Inicializo variables y valido
    do 
    {
        contadorDeReserva++;
        nombreHuesped=prompt("Ingrese el nombre del huesped: ");
        while(!isNaN(nombreHuesped))
        {
            nombreHuesped=prompt("ERROR. Reingrese el nombre en letras:")
        }
        cantPersonas=prompt("Ingrese la cantidad de personas:")
        cantPersonas=parseInt(cantPersonas);
        while(isNaN(cantPersonas) || cantPersonas<0)
        {
            cantPersonas=prompt("ERROR. Reingrese la cantidad de personas (En números):")
            cantPersonas=parseInt(cantPersonas);
        }
        cantidadDias=prompt("Ingrese la cantidad de días de estadía:");
        cantidadDias=parseInt(cantidadDias);
        while(isNaN(cantidadDias) || cantidadDias<1)
        {
            cantidadDias=prompt("ERROR. Reingrese la cantidad de dias que se va/n a quedar:");
            cantidadDias=parseInt(cantidadDias);
        }
        formaDePago=prompt("Ingrese la forma de pago (efectivo, tarjeta o QR) :");
        while(formaDePago.toLowerCase()!="efectivo" && formaDePago.toLowerCase()!="tarjeta" && formaDePago.toUpperCase()!="QR")
        {
            formaDePago=prompt("ERROR. Reingrese la forma de pago correcta (efectivo, tarjeta o QR) :");
        }
        respuesta=prompt("Desea seguir ingresando datos (si/no): ");

        while(respuesta.toLowerCase()!="si" && respuesta.toLowerCase()!="no")
        {
            respuesta=prompt("ERROR. Reingrese si o no: ").toLowerCase;
        }

        //Punto A) el huésped que trajo más personas en una sola reserva.
        if(contadorDeReserva==1 || maxicoCantidadPersonas<cantPersonas )
        {
            maxicoCantidadPersonas=cantPersonas;
            huespedConMasPersonas=nombreHuesped;
        }
        //Punto B) la cantidad de personas que se quedaron más días.
        if(contadorDeReserva==1 || maximoDias<cantidadDias )
        {
            maximoDias=cantidadDias;
            cantDePersonasMasDias=cantPersonas;
            
        }
        //Punto C) la forma de pago más utilizada.
        switch(formaDePago)
        {
            case "efectivo":
            contadorEfectivo++;
            break;

            case "qr":
            contadorQR++;
            break;

            default:
            contadorTarjeta++;
            break;
        }
            
       acumuladorDias=acumuladorDias+cantidadDias;    

    } while (respuesta=="si");

    //Parte del punto C.
    if(contadorQR > contadorEfectivo && contadorQR > contadorTarjeta)
    {
        formaDePagoMasUsada= "QR";
    }
    else
    {
        if(contadorTarjeta>contadorEfectivo)
        {
            formaDePagoMasUsada="tarjeta";
        }
        else
        {
            formaDePagoMasUsada="efectivo";
        }
    }
    
    //D) el promedio de cantidad de días por reserva.
    promedio=acumuladorDias/contadorDeReserva;


    // 3) Proceso los datos.

    // MENSAJE A)
    mensaje+="El huésped que trajo más personas en una sola reserva fue: " + huespedConMasPersonas + " y la cantidad: " + maxicoCantidadPersonas + ".<br>";
    // MENSAJE B)
    mensaje+="La cantidad de personas que se quedaron más días fue: " + cantDePersonasMasDias + " y los días fueron: " + maximoDias + ".<br>";

    // MENSAJE C)
    mensaje+="La forma de pago más utilizada fue: " + formaDePagoMasUsada + ".<br>";

    // MENSAJE D)
    mensaje+="El promedio de cantidad de días por reserva fue: " + promedio + ".<br>";

    // 4) Muestro los resultados
    document.write(mensaje);
    
}
