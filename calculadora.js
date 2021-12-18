function calcu(Numero1,Numero2) {
    return(
        `
        primer numero ${Numero1}\n
        se gundo numero ${Numero2}\n
        suma ${Numero1+Numero2}\n
        Resta ${Numero1-Numero2}\n
        Multiplicacion ${Numero1*Numero2}\n
        Divicion ${Numero1/Numero2}\n
        Elcaudrado  del modulo de la división de los valores es:${ (Numero1%Numero2)**2}\n
        El incremento de los valores ${Numero1+1} ${Numero2+1}\n
        El decremento de los valores ${Numero1-1} ${Numero2-1} 
        `
    )
}
console.log(calcu(10,3))