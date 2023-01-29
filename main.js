num = +prompt("Введіть число");
while (num === "" || Number(isNaN(num))) {
  num = +prompt("Введіть  число ще раз:");
}

function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(num));
