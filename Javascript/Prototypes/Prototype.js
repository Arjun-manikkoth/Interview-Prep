// what is prototype
// prototype is the method by which object inherit features from one another

//eg :-
const Person = function Person(name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.height = 12;
const obj1 = new Person("arjun", 23);
console.log(obj1);
console.log(obj1.__proto__.__proto__ === Object.prototype);

// Thing	                             What it is

// Person	                             A constructor function
// obj1	                                 An instance of Person
// Person.prototype	                     An object (not the function itself) — it contains shared properties/methods
// obj1.__proto__	                     A reference to Person.prototype

// prototype It is just an object attached to constructor functions (like Person).

// When you do:

// const obj1 = new Person("arjun", 23);
// JavaScript does 3 things automatically:

// Creates a new empty object → {}

// Sets obj1.__proto__ = Person.prototype

// Calls Person with this = obj1
// → So this.name = name and this.age = age are set on obj1
