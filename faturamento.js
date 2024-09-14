// Faturamento diário

let faturamento = [1800, 800, 1300, 500, 5000, 4000, 3500];
let menor = faturamento[0];
let maior = faturamento[0];

let soma = 0;
let diasFaturamento = 0;

for (let valor of faturamento) {
    if (valor > 0) {
        if (valor < menor) menor = valor;
        if (valor > maior) maior = valor;
        soma += valor;
        diasFaturamento++;
    }
}
let mediaFaturamento = soma / diasFaturamento;
let diasAcimaDaMediafaturamento = 0;

for (valor of faturamento) {
    if (valor > mediaFaturamento) diasAcimaDaMediafaturamento++;
}

console.log(`O menor valor é ${menor}`);
console.log(`O maior valor é ${maior}`);
console.log(`Os dias com faturamento acima da média:  ${diasAcimaDaMediafaturamento}`);

