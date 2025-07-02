console.log(5 == "5"); // type conversion happens with ==
console.log(5 === "5"); // strict type checking
console.log(true + -1);

// Conversion Type       Implicit Conversion (Coercion)                      Explicit Conversion

// String + Number       Automatically converts numbers to strings           Manually convert using String() or .toString()

// Number + Boolean      Converts true to 1 and false to 0                   Use Number() to explicitly convert

// String to Boolean     Non-empty strings convert to true, empty to false   Use Boolean() for clarity

// Number from String    Implicit coercion with + operator                   Use Number(), parseInt(), or parseFloat()
