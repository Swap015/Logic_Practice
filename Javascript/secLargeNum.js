

function secLarge(arr) {

    let max, secMax;
    if (arr[0] > arr[1]) {
        max = arr[0];
        secMax = arr[1];
    }
    else {
        max = arr[1];
        secMax = arr[0];
    }

    for (let i = 2; i < arr.length; i++) {

        if (arr[i] > max) {
            secMax = max;
            max = arr[i];
        }
        else if (arr[i] > secMax && arr[i] !== max) {
            secMax = arr[i];
        }
    }
    return secMax;
}

const result = secLarge([3, 4, 6, 77, 22, 12, 33, 1020, 101]);
console.log(result);