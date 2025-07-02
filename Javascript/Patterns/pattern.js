const fruits = [
    { name: "apple", color: "green" },
    { name: "banana", color: "yellow" },
    { name: "grape", color: "green" },
    { name: "orange", color: "orange" },
    { name: "pear", color: "green" },
    { name: "blueberry", color: "blue" },
];

//find the total number of green fruits

// const result = fruits.reduce((acc, each) => {
//     if (each.color === "green") {
//         return (acc += 1);
//     }
//     return acc;
// }, 0);
// console.log(result);

const students = [
    { id: 1, name: "Alice", score: 85, class: "A" },
    { id: 2, name: "Bob", score: 92, class: "B" },
    { id: 3, name: "Charlie", score: 78, class: "A" },
    { id: 4, name: "David", score: 95, class: "C" },
    { id: 5, name: "Eva", score: 89, class: "A" },
    { id: 6, name: "Freddy", score: 90, class: "C" },
];

// //find the student with largest score, print its name only

console.log(
    students.reduce((highest, student) => {
        if (highest.score < student.score) {
            return student;
        } else {
            return highest;
        }
    }).name
);
