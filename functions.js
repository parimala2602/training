// & types of functions
// ! 1) named functions
function hello(){
    console.log("hello");
}
hello();
// ! 2) anonymus function
//unction(){
    //console.log("hello"); //(function that does not have a name to declare) can not be executed independently hence we get an error
//}
// !  3) function expression
//function declaration is assigned as a value and the same function will be invokes when required
let x = function() {
    console.log("Function Expression");
};
//console.log(x); 
x();
// ! 4) immediate invoke functions 
//once the function is created immediatly it should be invoked
// ^ (anonymus function another way of execution)
(
    function(){ 
        console.log("IIFE"); 
    }
)(); //can not be called multiple times although does'nt show an error during development time
// ! 5) arrow functions
//introduce by ECMA european computer manufacturing association
//mainly to concise the code of normal functions
// ^ arrow function is similar to anonymus function
let A = _ =>{console.log("arrow function");} 
A(); //to concise it even more () this can be changed and use an ' _ ' instead
// ! 6) higher order functions
//its a function that accepts another functions values or returns a function
function hof(a) {
    return a;
}
//let x5 = hof([1,2,3,4,5]); //array in js in non premetive data type 
let x5 = hof(function(){return "This is a call back function"})
console.log(x5); 
// ! 7) callback functions
//is a function that is passed as an argument/value to another function
//builtin functions in java script popularly uses higher order and callback functions
function add1(callback){
    return callback(1,3);
}
let x6 = add1(function(a,b){return a+b});
console.log(x6);

let users = ["navya", "vishnu", "keshav", "shravan"];
/*console.log(users[0]); 
console.log(users[1]); 
console.log(users[2]); 
console.log(users[3]);*/

/*for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}*/

users.map((user)=> {
    console.log(user);
    //return user;
}); // ^arrow function useage in callback function
// ? this can be done with for each but when you return the function we get undefined

let users1 = ["navya", "vishnu", "keshav", "shravan"];
let x7 = users1.map((user)=> {
    return user;
});
console.log(x7);

//& return statements
//^ it will either return expression or variables or a value
function add(a,b) {
    return a+b; // ~ explicit return statement
}
let y = add(10,20);
console.log(y); 

let z = (a,b) => a+b;
console.log(z(10,30)); // ~ implicit return statement these are used in arrow function only 

let z1 = (a,b) => { return a+b} ;
console.log(z(10,10));

// ^ Closure
// & memory created by functions bundled together
//by giving accessibility to innermost function to access the variables of outermost function
var a = 10;
let b = 20;
function x8 () {
    var user = "Shravan";
    let comapany = "Amazon";
    const sal = 10000;
    console.log(user);
    console.log(comapany);
    console.log(sal);

    console.log(a , b);
}
x8();