//**CLOSURES */

function outer() {
    let a = 10;
    inner();
    function inner() {
        var a = 11;

        console.log("inside", a);
    }
    console.log("outside", a);
}
outer();
