const number = Number(prompt("Nhập vào một số nguyên dương: "));


let factorial = 1;
for (let i = 2; i <= number; i++) {
  factorial *= i;
}


alert("Giai thừa của " + number + " là: " + factorial);