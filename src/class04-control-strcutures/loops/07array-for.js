// "for" is a native method to run a piece of code a finite number of times.


// for (1º count ; 2º condition ; 3º increment )
for (var i = 0   ; i < 10       ; i++) {
    console.log("Valor de i >>>", i)
}


const arrayNumbers = [10, 20, 30, 40, 50, 60]
const doubleOfNumbers = []

for (var c = 0 ; c > arrayNumbers.length ; c++) {
    doubleOfNumbers.push( arrayNumbers[c] )
}

console.log(doubleOfNumbers)


