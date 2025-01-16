//function definition

function myname(){
    console.log("r");
    console.log("i");
    console.log("y");
    console.log("a");
}
myname()//function executing

function add(number1,number2){//parameters
console.log(number1+number2);

}
add(3,5)//arguments

//using return keyword
function product(number1,number2){
    let result=number1*number2
    return result
    //can also be written as
    //return number1*number2
}
//anything written after the return keyword will never be reachable
const result=product(2,7)
console.log("product is",result);

function loggedInMessage(username){
    if(!username){
        console.log("please enter the username");
        return
    }
    return `${username} just logged in`
}
console.log(loggedInMessage());
