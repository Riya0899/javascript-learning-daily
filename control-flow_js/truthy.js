const email="riya@gmail.com"
if(email){                        //no comparison is being done in the if condition block //it is assumed that the string value is true value
    console.log("GOT THE EMAIL");     //it is known as truthy value   
    
}else{
    console.log("DIDNOT RECEIVED YOUR EMAIL");
    
}

//falsy values=>
// false,0,-0,bigInt 0n,"",null,undefined,NaN

//truthy value=>
    // "0",'false'," ",[],{},function(){}

//to check if array is empty
const arrays=[]
if(arrays.length===0){
    console.log("empty array");
    
}

//to check if objects are empty
const objects={}
if(Object.keys(objects).length===0){
    console.log("empty objects");
    
}


// Nullish coalescing operator(??) :null undefined

let val;
val=null ?? 5 //null check//gives output 5
// val=10 ?? 5 //gives output which is written first
// val=undefined?? 5 //gives output which is other than undefined
console.log(val);

//terniary operator

// condition ? true:false
const price=100
price >=80?console.log("greater than 80") : console.log("more than 80");

