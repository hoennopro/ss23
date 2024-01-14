const number = Number(prompt("Nhập vào một số nguyên dương bất kỳ: "));


const primes = [];
for (let i = 2; i < number + 1; i++) {
  let isPrime = true;
  for (let j = 2; j < Math.sqrt(i) + 1; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primes.push(i);
  }
}


primes.forEach(prime => console.log(prime));
