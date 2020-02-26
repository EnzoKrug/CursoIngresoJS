/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

function CalcularPrecio () 
{
     var cantidadLamparas;
     var marca;
     var precioDescuento=1;
     precio=0;
     var precio=cantidadLamparas*35;
     var precioFinal=precio*precioDescuento;

     cantidadLamparas=document.getElementById("Cantidad").value;
     cantidadLamparas=parseInt(cantidadLamparas);
     precio=parseInt(precio);
     marca= document.getElementById("Marca").value;


     switch(cantidadLamparas)
     {
        case 1:
        case 2:
          precioDescuento=1;
          break;
        case 3:  
          if(marca=="ArgentinaLuz")
          {
               precioDescuento=0.85;
          }
          else if(marca=="FelipeLamparas")
          {
               precioDescuento=1.1
          }
          else
          {
               precioDescuento=0.95;
          }
          break;
        case 4:
          if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
          {
               precioDescuento=0.75;
          }
          else 
          {
               precioDescuento=0.80;
          }
          break;
        case 5:
          if(marca=="ArgentinaLuz")
          {
               precioDescuento=0.60;
          }
          else
          {
               precioDescuento=0.70;
          }
          break;
        case 6:
          if(cantidadLamparas>=6)
          {
               precioDescuento=0.50;
          }
          break;
     }
     if(precioFinal>120)
     {
          precioFinal=precioFinal*0.90;
          alert("Usted pago " + precioFinal + " de IIBB.");
     }    
     document.getElementById("precioDescuento").value=precioFinal;
     precioFinal=parseInt(precioFinal);  
}
