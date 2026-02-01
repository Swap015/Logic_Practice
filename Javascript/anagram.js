

function anagram(str1, str2) {

    if (str1.length !== str2.length) { return false; }

    let freq = {};

    for (let i = 0; i < str1.length; i++) {

        let char = str1[i];

        if (freq[char] === undefined) {
            freq[char] = 1;
        }
        else {
            freq[char] = freq[char] + 1;
        }


    }


    for (let j = 0; j < str2.length; j++) {
        let char = str2[j];
        if (freq[char] === undefined || freq[char] === 0) {
            return false
        }
        else {
            freq[char] = freq[char] - 1;
        }
    }
    return true;
}

console.log(anagram("tea", "eat"));
console.log(anagram("hello", "bello"));