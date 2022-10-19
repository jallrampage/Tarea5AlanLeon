var a;
var b;
a = prompt('Ingresa el primer numero', '')
b = prompt('Ingresa el segundo numero', '')
var num1=parseInt(a);
var num2=parseInt(b);
if (num1 > num2) {
    alert(num1 + " Es mayor que que " + num2)
} else if (num2 > num1) { 
    alert(num2+" Es mayor que "+num1)
} else if(num1==num2){
    alert(num1+" Es igual que "+num2)
}