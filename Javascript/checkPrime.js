function checkPrime(num) {

    if (num <= 1) {
        console.log(num + " is not prime");
        return;
    }


    let isPrime = true;

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num + " is prime");
    } else {
        console.log(num + " is not prime");
    }
}

checkPrime(1);
checkPrime(2);
checkPrime(3);
checkPrime(4);