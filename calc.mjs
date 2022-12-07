function add(a, b, ...c) {
  if (!c) {
    return a + b;
  }
  let sum = 0;
  for (let i = 0; i < c.length; i++) {
    sum += c[i];
  }
  sum += a;
  sum += b;
  return sum;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
export { add, subtract, multiply, divide };
