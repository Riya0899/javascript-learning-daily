let a=200 //global scope
if(true){
    let a=10
    const b=20   //local scope
    var c=30
}
console.log(a);
// console.log(b);will not run since scope is inside the if block
console.log(c); //it will run as var does not take consider scopes 

function one(){
    const username="riya"
    function two(){
        const age=21
        console.log(username);
        
    }
    // console.log(age); //will not execute as it is out of scope 
    
    two()
}
one()
//in nested functions , child functions can access the variables of the parent functions
//similar case with if else statements
if(true){
    const username="riya"
    if(username=="riya"){
        const age=21
        console.log(username + age);
    }
    // console.log(age);  this will not work as out of scope 
    
}

add(5)
function add(value){
    return value+1
}// this will get executed even if calling is done before initialization

addtwo(5) //this will not get executed as in here function is holded inside a variable
const addtwo=function(value){
    return value + 2
}

