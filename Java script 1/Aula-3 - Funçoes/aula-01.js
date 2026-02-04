function incrementarJuros(valor, percentualJuros) {
    const valorJuros = (percentualJuros / 100) * valor;
    return valor + valorJuros;
}

console.log(incrementarJuros(100, 10)); // 110
console.log(incrementarJuros(200, 15)); // 230
console.log(incrementarJuros(50, 5));   // 52.5