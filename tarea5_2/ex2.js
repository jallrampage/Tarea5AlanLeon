var a = parseInt(prompt("Escribe la primer nota",""))
var b = parseInt(prompt("Escribe la primer nota",""))
var c = parseInt(prompt("Escribe la primer nota",""))

function prom(a, b, c) { 
    let x = (a + b + c) / 3
    return x
}

if (prom(a,b,c) >= 5) {
    alert("Aprobado!!")
} else if (prom(a,b,c) < 5) { 
    alert("Reprobado!!")
}
