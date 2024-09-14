// Sequência de Fibonacci

let n = 12;
let a = 0, b = 1, temp;

while (b < n) {
    temp = a + b;
    a = b;
    b = temp;
}

if (b === n || n === 0) {
    console.log(`${n} pertence a sequencia Fibonacci.`)
} else {
    console.log(`${n} não pertence a sequencia Fibonacci.`)
}