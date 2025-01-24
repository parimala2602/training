//^ Document object model
//^dom is a web api used to manipulate the html content
//^dom is used to asserts, remove, update the content inside the html document

//& methods of dom:
//~ document.getElementById() 
//? target the html element based on id attribute value
//? with the id attribute you can select only one element
//~ document.getElementsByClassName()
//? class name can be used for multiple elements
//? with class attribute we can select multiple values with same class name
//~ document.getElementsByTagName()
//? used to target values with tag name
//? target element based on name attribute
//~ document.getElementsByName()
//? used to target values with name
//~ document.querySelector()
//? used to target values with css selector
//? this methods selects only one element
//~ document.querySelectorAll()
//? used to target values with css selector
//? this methods selects multiple elements


//! document.getElementById() 
/*let element =document.getElementById("demo");
element.innerText = "DOM"; //^ used to manipulate the text (property)
console.log(element);

let div = document.getElementById("test");
div.innerHTML = "<h1>Header</h1>"
console.log(div);*/

//! document.getElementsByClassName()
/*let ele = document.getElementsByClassName("test")
//console.log(ele);
//console.log(Array.isArray(ele));
//ele.map();
ele[0].style.backgroundColor = "yellow";
//! Spread operator
//^ used to take out each and every value from the original array and store it in one more new array
//& syntax : [...Variable]
let x = [...ele];
console.log(x, Array.isArray(x));
x.map((element)=>{
    //console.log(element);
    element.style.color = "red";
}) */
//! document.getElementsByTagName()
/*let ele = document.getElementsByTagName("div");
console.log(ele);*/

//! document.getElementsByName
/*let ele = document.getElementsByName("username");
//console.log(ele);
[...ele].map(element=> {
    console.log(element);
})*/

//! document.querySelectorAll()
/*let ele = document.querySelectorAll(".test");
//console.log(ele);
[...ele].map(element=>{
    console.log(element.innerText);
    element.style.color="green"
})*/

