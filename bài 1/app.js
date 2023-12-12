// CHECK PRIME NUMBER
function checkPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function result() {
  let a = parseInt(document.getElementById("number1").value);
  let b = parseInt(document.getElementById("number2").value);

  // CHECK IF a < b
  if (a > b) {
    alert("Please enter a < b");
    return false;
  }

  // from a to b display all prime numbers
  let result = "";
  for (let i = a; i <= b; i++) {
    if (checkPrime(i)) {
      result += i + " ";
    }
  }
  document.querySelector(".Primenum").innerHTML =
    "các số nguyên tố trong khoảng từ " + a + " tới " + b + " là " + result;

  let sum = 0;
  for (let i = a; i <= b; i++) {
    if (checkPrime(i)) {
      sum += i;
    }
  }
  document.querySelector(".Primesum").innerHTML =
    "tổng các số nguyên tố trong khoảng từ " + a + " tới " + b + " là " + sum;
}
