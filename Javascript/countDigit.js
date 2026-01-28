let num = 12345678;

let count = 0;

while (num > 0) {
    let lastDigit = num % 10;
    count++;
    num = (num - lastDigit) / 10;
}

console.log("Count is: " + count);