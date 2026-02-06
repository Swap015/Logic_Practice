

function countEle(arr) {

    
    let freq = {};

    for (let i = 0; i < arr.length; i++) {

        let dupli=false;
     
        for (let j = 0; j < freq.length; j++) {
            if (arr[i] === freq[j]) {
                dupli=true;
                break;
            }
        }

        if(!dupli){
            freq.push(arr[i]);
        }

    }

    return freq;

}

console.log(countEle([1, 2, 2, 1, 3, 4, 5]));