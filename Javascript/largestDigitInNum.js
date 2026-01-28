let num = 1234567839;

let largest = 0;

while (num > 0) {
    let lastDigit = num % 10;
    if (lastDigit > largest) {
        largest = lastDigit;
    }
    num = (num - lastDigit) / 10;
}

console.log("largest digit is : "+largest)