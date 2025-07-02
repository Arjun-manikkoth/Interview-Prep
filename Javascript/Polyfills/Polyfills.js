//generate a polyfill for map
let array = [1, 2, 3, 4, 5];
Array.prototype.myMap = function (cb) {
    let result = [];
    console.log(this);
    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i]));
    }
    return result;
};

function callback(value) {
    //this logic we have to write currently multipling by 2
    return value * 2;
}
console.log(array.myMap(callback));
