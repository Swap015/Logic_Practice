
function removeDupli(arr) {
    let dupli = [];

    for (let i = 0; i < arr.length; i++) {

        let isDuplicate = false;

        for (let j = 0; j < dupli.length; j++) {
            if (arr[i] === dupli[j]) {
                isDuplicate = true;
                break;
            }

            
        }
        if (!isDuplicate) {
            dupli.push(arr[i]);
        }
    }
    return dupli;
}


const result = removeDupli([1, 2, 5, 3, 2, 4, 5, 2, 1, 3, 5, 2, 5]);
console.log(result);
