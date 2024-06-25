/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */


const fizz = "fizz"
const buzz = "buzz"

function multiploTres(index){
    if(index%3==0){
        return fizz
    }
    return ""
}

function multiploCinco(index){
    if(index%5==0){
        return buzz
    }
    return ""
}


for (let index = 1; index <= 100; index++) {
    multiplo3 = multiploTres(index)
    multiplo5 = multiploCinco(index)

    console.log(index+'.-  '+multiplo3+multiplo5)

}

