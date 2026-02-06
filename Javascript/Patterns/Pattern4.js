

function pat4(num) {

    for (let i = 0; i < num; i++) {
        let row = " ";

        for (let j = 0; j < i; j++) {

            row += i;
        }

        console.log(row);
    }

}
let num = 6;
pat4(num);