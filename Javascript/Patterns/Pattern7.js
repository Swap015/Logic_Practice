
function pat5(num) {

    for (let i = 0; i < num; i++) {
        let row = "";

        for (let j = 0; j <= num - i ; j++) {
            row += " ";
        }

        for (let j = 1; j <= 2 * i + 1; j++) {

            row += "*";
        }
        console.log(row);

        for (let j = 0; j < num - i; j++) {
            row += " ";
        }
    }
}

let num = 5;
pat5(num);