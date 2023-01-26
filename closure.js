
// Review the add() function show below. notice that a module is used to create a private 
//variable called counter.
var add = (function () {
    var counter = 0;
    function add() {
        return counter += 1;
    }
    function reset() {
        return counter = 0;
    }
    return {
        add: add,
        reset: reset
    };
})();

console.log(add.add());
console.log(add.reset());
console.log(add.add());
console.log(add.reset());




// In the definition of the add() function in the code for the question 1, identify the “free” 
// variable. Also write down a definition of what “free” variables are.

function make_adder(value) {
    var result = 0;
    return function(){
        return result += value;
    }
}

var add5 = make_adder(5);
add5();
add5()
console.log(add5());


var add7 = make_adder(7);
add7();
add7()
console.log(add7());


// Using the Revealing Module Pattern, write a JavaScript definition of a Module that creates an 
// Employee Object with the following fields and methods:


var employee = (function(){
    let name = 'Long';
    let age = '26';
    let salary= 1000;

    function getName() {
        return name;
    }

    function getAge() {
        return age;
    }

    function getSalary() {
        return salary;
    }

    function setName(newName) {
        name = newName;
    }

    function setAge(newAge) {
        age = newAge;
    }

    function setSalary(salary) {
        this.salary = salary;
    }



    return{
        setName:setName,
        setAge:setAge,
        setSalary:setSalary
    };


})();

employee.extension = (function () {
    let address = '1000 N 4th';

    function setAddress(newAddress) {
        address = newAddress;
    }

    function getAddress() {
        return address;
    }

    return {
        getAddress : getAddress,
        setAddress: setAddress
    }

})();
employee.extension.setAddress("414 NB St")
console.log(employee.extension.getAddress());


