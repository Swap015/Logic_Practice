

function maxNum(arr) {

    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

    }
    return max;
}

const result = maxNum([2, 5, 7, 9, 2, 3, 22, 4, 55, 88]);
console.log(result);