
function pat5(num) {

    for (let i = 1; i <= num; i++) {
        let row = "";

        for (let j = 1; j <= num - i ; j++) {

            row += j;
        }
        console.log(row);
    }
}

let num = 6;
pat5(num);