const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function (message1, message2) {
        return this.firstName + " " + message1 + " " + message2 + " " + this.lastName;
    },
};

const object = { firstName: "arjun", lastName: "manikkoth" };

//** CALL :- call a function with this context set to object provided as the first argument */

// console.log(person.fullName.call(object, "aka","smes"));

//--------------------------------------------------------------------------------------------------------

//** APPLY :- similar to the call function with first argument as the object and next arguments as an array */

//console.log(person.fullName.apply(object, ["aka", "smes"]));

//----------------------------------------------------------------------------------------------------------------

//** BIND :- binds an object to call the function later */

const bindedFn = person.fullName.bind(object, "aka", "smes");
// console.log(bindedFn());

//these methods are basically reusing the functionality of an object method thats is why it is called as function borrowing.
