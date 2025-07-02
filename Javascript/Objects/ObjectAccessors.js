const person1 = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
        return this.language;
    },
};

//** Getter

// This example uses a lang property to get the value of the language property.

console.log(person1.lang);

//** setter

const person2 = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
        this.language = lang;
    },
};
person2.lang = "en";

//  this example uses setter property to set a value to the language property
