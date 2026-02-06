
function pat5(num) {

    for (let i = 0; i <= num; i++) {
        let row = "";

        for (let j = num; j >= i; j--) {

            row += "* ";
        }
        console.log(row);
    }
}

let num = 6;
pat5(num);