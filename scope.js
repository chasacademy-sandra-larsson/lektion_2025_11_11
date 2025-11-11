// Scope - var är mina deklarerade variabler synliga eller går att använda?
// Global - hela filen 
// Local eller function scope ("samma" i Javascript)
// Block {} - alla andra block if/else, for, osv..

// let och const är bundna till blocket de är deklarerade till

// Innan ES6 användes "var" och finns fortfarande i gamla kodbaser.
// Det sättet är bundet till function/local scope

// Lexical scope - 
// Ett inre scope (t.ex. en funktion eller ett block) kan se alla 
// variabler i sina yttre scope genom scope-kedjan, men det omvända 
// gäller inte: det yttre scopet kan inte nå de variabler som 
// deklarerats i det inre.


// Global variabel
let x = 1;

function myFunction() {

    let y = 2;
    var old_var = "test";

    //console.log("z", z); // Uncaught ReferenceError: y is not defined

    // Ett block
    if(true) {

        let z = 3;
        // Vi deklarerar var i ett block-scope
        // var old_var = "test";

         console.log("Inne i funktionen");
         console.log("x", x);
         console.log("y", y);
    }

    console.log("Inne i funktionen");
    console.log("x", x);
    console.log("y", y);
   // console.log("z", z); // ReferenseError
    console.log("old_var", old_var); // funkar efter var har inte block-scope utan function/local scope!

}


myFunction();

console.log("I filen");
//console.log("y", y); // Uncaught ReferenceError: y is not defined
//console.log("z", z); //Uncaught ReferenceError: y is not defined
console.log("old_var", old_var); //Uncaught ReferenceError: old_var is not defined
