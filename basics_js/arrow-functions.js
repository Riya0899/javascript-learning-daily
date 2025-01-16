const user={
    username:"riya",
    age:21,
    displayMessage:function(){
        console.log(`${this.username},welcome to my website`); //this keyword is used to refer to the current context
        console.log(this);
        
    }
}
user.displayMessage()
user.username="sam"
user.displayMessage() //this will print sam as we used this keyword which points to the current context

console.log(this); //this will return empty object as no currect context is there  globally 
 
function thiss(){
    console.log(this);
    
}
thiss()

//arrow function
const arrow=()=>{
    let username="riya"
    console.log(this.username);
}
arrow()

const add=(num1,num2)=>num1+num2 //implicit return used when there is one line of code

console.log(add(2,7));

const add1=(num1,num2)=>{
  return  num1+num2 //explicit return 
}
console.log(add(2,7));

//to return objects in arrow functions
const ob=()=>({name:"riya"})
console.log(ob());

