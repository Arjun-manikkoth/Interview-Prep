let myObj = {
    name: "John",
    age: 30,
    car: null,
    greet: function () {
        console.log(`Hi ${this.name}`);
    },
};
//-------------------------------------------------------------------------------------------------------------

//** OBJECT.ASSIGN :- assigns object to a new object

const target = {};
Object.assign(target, myObj);
//console.log(target); //{name: "John",age: 30,car: null,greet: function () {console.log(`Hi ${this.name}`)}

//--------------------------------------------------------------------------------------------------------------

//** OBJECT.CREATE :- creates a new object from an existing object

const obj1 = Object.create(myObj);
obj1.name = "arjun";
//obj1.greet(); //hi arjun
//console.log(obj1); //{}

//--------------------------------------------------------------------------------------------------------------

//** OBJECT.ENTRIES :- creates a nested array of key value pairs

const entries = Object.entries(myObj);
//console.log(entries); [[ 'name', 'John' ],[ 'age', 30 ], [ 'car', null ],[ 'greet', [Function: greet] ]]

//--------------------------------------------------------------------------------------------------------------

//** OBJECT.KEYS :- creates an array of key's

const keys = Object.keys(myObj);
//console.log(keys); //[ 'name', 'age', 'car', 'greet' ]

//--------------------------------------------------------------------------------------------------------------

//** OBJECT.VALUES :- creates an array of values

const values = Object.values(myObj);
//console.log(values);[ 'John', 30, null, [Function: greet] ]

//---------------------------------------------------------------------------------------------------------------

//** FROM ENTRIES :- creates an object from an iterable or list of key value pairs
const fromEntries = Object.fromEntries([
    ["pear", "arjun"],
    ["age", 34],
]);
//console.log(fromEntries);

//----------------------------------------------------------------------------------------------------------------

//** GROUPBY :- creates a group from an array of objects

const fruits = [
    { name: "apples", quantity: 300 },
    { name: "bananas", quantity: 500 },
    { name: "oranges", quantity: 200 },
    { name: "kiwi", quantity: 150 },
];

function callback(each) {
    return each.quantity > 200 ? "ok" : "low";
}

const result = Object.groupBy(fruits, callback);
//console.log(result);
// {
//     ok: [
//       { name: 'apples', quantity: 300 },
//       { name: 'bananas', quantity: 500 }
//     ],
//     low: [
//       { name: 'oranges', quantity: 200 },
//       { name: 'kiwi', quantity: 150 }
//     ]
//   }
