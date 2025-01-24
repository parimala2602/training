/*console.log(10);
console.log(20);
//setTimeout(()=>{console.log(30)},5000) // console.l0g(30); //? Syntax : setTimeout(()=>{callback} , time)
console.log(40);
console.log(50);
//^ interpreter of java script checks for errors line by line and hence when 
//^ there is a syntax error encounterd it does'nt move to the next lines of the code

/*setInterval(()=>{
    document.writeln("YOLO") 
},1500)*/

//* Promise
//let p1 = new Promise((resolve , reject)=>{
//console.log(p1);
//})

/*let p2 = new Promise((resolve , reject)=>{
resolve("Success!");
});
console.log(p2);
p2.then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Finally is printing for both!");
})*/

/*console.log(p2);
p2.then((response)=>{
    console.log(response);
    })*/

/*let p3 = new Promise((resolve , reject)=>{
reject("Failure!");
})
console.log(p3);

/*p3.catch((error)=>{
    console.log(error);
})*/

/*p2.finally(()=>{
    console.log("Finally");
})*/



//& for handling the promise we have an instance methods
//& then(), catch(), finally()
//& then is used for success and catch is used for failure
//& catch is used to handle the error
//& finally is used for both success and failure
//& finally is used to execute the code after the promise is resolved or rejected

//^method chaining can include both then and catch

// ! Api fetching
/*function fetchUsers(){
let res = window.fetch("https://jsonplaceholder.typicode.com/users")
//console.log(res);
res.then(val => {
    //console.log(val);
    return val.json().then(data => {
        console.log(data);
        let store = document.getElementById("store");
        //console.log(store);
        data.map((user) => {
            //console.log(user);
            store.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.company.name}</td>
                <td>${user.phone}</td>
                <td>${user.website}</td>
            </tr>
            `
        })
    });
}).catch(err => {
    console.log(err);
})
}
fetchUsers();*/

/*let p = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("Promise Successfully complteing");
    }, 3000)
})
async function demo(){
    /*console.log("hello");
    console.log("hello");
    console.log("bye");   
    console.log("10");
    console.log("20"); 
    console.log("30");*/
    /*console.log("Start");
    let x =await p;
    console.log(x);

    console.log("End");
}
demo();*/

async function fetchUsers(){
    let response= await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
}
fetchUsers();