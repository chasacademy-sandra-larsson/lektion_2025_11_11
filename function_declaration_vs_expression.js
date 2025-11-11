// 1. En funktionsdeklaration (`function namn() {}`) gör funktionen tillgänglig 
// i hela aktuell scope genom hoisting redan innan koden körs.

// Hoisting betyder att JavaScript först läser igenom filen, hittar
// funktionsdeklarationen och sparar den i minnet. När koden sedan börjar
// köras rad för rad känns funktionen redan igen, så anropet kan stå före
// själva funktionen i filen.

//fnDeclaration(); // Funkar innan funktion deklareras mha hoisting

function fnDeclaration() {
    console.log("Hi from function declaration");
}



// 2. Ett funktionsuttryck (`const namn = function() {}` eller arrow-funktion) 
// skapas först när tolkningen når raden, så det kan inte anropas innan dess.



fnExpression(); // Uncaught ReferenceError: Cannot access 'fnExpression'


const fnExpression = function() {
    console.log("Hi from function expression!");
}

//fnExpression();
