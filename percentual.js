let faturamentoEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
}

let valorTotal = 67836.43 + 36678.66 + 29229.88 + 27165.48 + 19849.53;


console.log("SP: " + (faturamentoEstado["SP"] / valorTotal * 100).toFixed(2) + "%");
console.log("RJ: " + (faturamentoEstado["RJ"] / valorTotal * 100).toFixed(2) + "%");
console.log("MG: " + (faturamentoEstado["MG"] / valorTotal * 100).toFixed(2) + "%");
console.log("ES: " + (faturamentoEstado["ES"] / valorTotal * 100).toFixed(2) + "%");
console.log("Outros: " + (faturamentoEstado["Outros"] / valorTotal * 100).toFixed(2) + "%");