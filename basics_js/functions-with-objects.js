function calculateCartPrice(...num){ //rest operator
    //to pass multiple values in a function
    return num
}
console.log(calculateCartPrice(200,100,200));

//passing objects in function
const user={
    username:"riya",
    price:200
}
function myObject(any){
    console.log(`username is ${any.username} and price is ${any.price}`);
}
myObject(user)

//passing arrays in the function
const myArray=[10,20,30,40]
function returnvalue(getarray){
    return getarray[2]
}
console.log(returnvalue(myArray));

