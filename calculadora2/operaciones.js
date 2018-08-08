const Math = {};

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplica(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

Math.suma = suma;
Math.resta = resta;
Math.multiplica = multiplica;
Math.divide = divide;

module.exports = Math;
