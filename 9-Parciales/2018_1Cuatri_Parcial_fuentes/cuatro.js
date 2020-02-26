function mostrar()
{
    var num1;
    var num2;

    num1=parseInt(prompt("Ingrese el primer numero:"));
    num2=parseInt(prompt("Ingrese el segundo numero:"));

    if(num1==num2)
    {
        alert(num1+ "" +num2);
    }
    else if (num1>num2)
    {
        alert(num1-num2);
    }
    else if (num1+num2>10)
    {
        alert("La suma es " + (num1+num2) + " y supero el 10.");
    }
    else
    {
        alert(num1+num2);
    }
}
