// //for 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];                                   //basic syntax
    
// }

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element==5){
        console.log("this is number 5");
        
    }
    console.log(element); 
}

for (let index = 0; index < 10; index++) {
    for (let j = 0; j < 10; j++) {
        console.log(`inner loop ${j} and inner loop${index}`);
    }
    console.log(`outer loop ${index }`);
     
}

//printing a simple table
for (let i = 4; i < 5; i++) {
    for (let j = 0; j  <=10; j++) {
       console.log(`${i} * ${j} = ${i*j}`);
      
    }
}
//for loop on array
const MyArray=["riya1","riya2","riya3","riya4"]
console.log(MyArray.length);
for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
    console.log(element);
      
}


//break //continue

for (let index = 0; index <=20; index++) {
    const element =index;
    if(index==5){
        console.log("5 is best number");
        break;  //using break statement control flow will go out of the block
    }
    console.log(element);
    
    
}
for (let index = 0; index <=20; index++) {
    const element =index;
    if(index==5){
        console.log("5 is best number");
        continue;  //condition is skipped for once and then continue executing
    }
    console.log(element);
    
}