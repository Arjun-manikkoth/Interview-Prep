function factory(name, age) {
    return {
        name,
        age,
        greet: function () {
            console.log(`hi,${this.name}`);
        },
    };
}

const f1 = factory("arjun", 32);

f1.greet();

//What are factory functions?

// Factory functions in JavaScript are functions that create and return objects.
// They provide a way to encapsulate object creation logic, promoting code reusability and maintainability.
// Unlike constructor functions or classes, factory functions do not require the new keyword.
