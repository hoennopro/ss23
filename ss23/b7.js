const number = Number(prompt("Nhập vào một số bất kỳ: "));

let isPerfect = false;
for (let i = 1; i < number; i++) {
  if (number % i === 0) {
    isPerfect = true;
    break;
  }
}


if (isPerfect) {
  console.log(number + " là số hoàn hảo");
} else {
  console.log(number + " không phải là số hoàn hảo");
}