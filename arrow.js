// Arrow functions är en kortare syntax för att skapa funktioner i JavaScript. Kom med ES6.
// const add = (a, b) => a + b;

// Slippa skriva "function" så j-a många gånger!


//Exempel 1 - två parametrar med en return
const add = (a, b) =>  a + b;


// const add = function(a, b) {
//     return a + b;
// }

// Exempel 2 - en parameter behöver inga parenteser

const square = x => x * x;

// const square = function(x) {
//     return x*x;
// } 


// Exempel 3 - Returnera ett objekt  - omsluter return-värdet med ()

const createUser = (name, age) =>  ({name, age});


// const createUser = function(name, age) {
//     return {name, age}
// }


// Exempel 4: Arrow -funktioner fungerar bra ihop med array-metoder som map, filter, reduce
const numbers = [1,2,3,4];

const doubled = numbers.map(num => num * 2);
 
console.log(add(1, 2));
console.log(square(3));
console.log(createUser("Sandra", 25));
console.log(doubled)