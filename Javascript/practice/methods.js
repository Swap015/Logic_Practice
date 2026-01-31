
const person = { name: "Swapnil" };

function greet(age, city) {

    console.log("Hi " + this.name +" "+ age + " yrs old me living in " + city);

}

greet.call(person, 24, "pune");