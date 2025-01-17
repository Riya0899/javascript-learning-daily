// //if
// if(condition){
//     //scope
// }
//comparison operators use to check the condition
// <,>,<=,>=,==,!=,===(checks the type also),!==

const temperature=60
if(temperature<70){
    console.log("less temperature");
}
else{
    console.log("more temperature");
}

const score=200
if(score<300){
    let power="fly"
    console.log(`power is ${power}`);   
}
// console.log(`power is ${power}`);   //this will not get excuted as power is not defined outside the scope this will give the error

const balance=200
if(balance==200) console.log("successful");//implicit scope

//nested if
const price=250
if(price<200){
    console.log("less than 200");
    
} else if(price>200){
    console.log("more than 200");
    
}else{
    console.log("equal to 200");
    
}
//to check  multiple conditions

const loggedInFromGoogle=true
const loggedInFromEmail=false
const debitCard=true
const userLoggedIn=true

if(debitCard&&userLoggedIn){ //and operator (&&) will check both of the condition and both conditions need to be true to execute the the if block code
    console.log("allowed to buy course");  
}
if(loggedInFromGoogle||loggedInFromEmail){ //or operator (||) will check both of the condition and either one or both condition need to be true to execute the the if block code
    console.log("allowed to buy course");  
}
