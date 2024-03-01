const valorDolar = 1.2;
const valorEuro = 0.8;


function convertirEurosADolares(euros) {
  const dolares = euros * (valorDolar / valorEuro);
  return dolares;
}

const euros = 100;
const resultado = convertirEurosADolares(euros);

console.log(`${euros} euros son ${resultado} dólares`);
