const car = { type: "Fiat", model: "500", color: "white" };

//** PREVENT EXTENSIONS :- prevents adding properties but can edit and delete */

//Object.preventExtensions(car);
//car.height = 19;
// console.log(car);
// console.log(Object.isExtensible(car));

//----------------------------------------------------------------------------------------------------------------------

//** SEAL :- prevents object from addition as well a removal */

Object.seal(car);
console.log(Object.isSealed(car));
car.model = "600";
car.height = 23;
console.log(car);

//** FREEZE :- prevents object from adding ,removing ,editing  */

// Object.freeze(car);
// car.model = "500";
// car.height = 234;
// console.log(Object.isFrozen(car));
// console.log(car);

//ALL THESE METHODS ARE IRREVERSIBLE
