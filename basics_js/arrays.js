const myarray=[1,2,3,4,5]
const myarray2=new Array(1,2,3,4)
console.log(myarray[0]);

//array methods

 myarray.push(6)//insert at last
 console.log(myarray);

 myarray.pop()//remove the last element in the array
 console.log(myarray);

 myarray.unshift(2)//add in the starting of the array
 console.log(myarray);
//use less as the values need to shift in order to add in the front 
 
myarray.shift()//remove the starting value
console.log(myarray);

console.log(myarray.includes(9));
console.log(myarray.indexOf(8));

const newarr=myarray.join()//changes the datatype to the string 
console.log(newarr);

// slice and splice
console.log("A",myarray);
const new1=myarray.slice(1,3)//slice do not include the last range and there is not any change in the original array
console.log(new1);

console.log("B",myarray);
const new2=myarray.splice(1,3)//splice do include the last range and the spliced value is eliminated from the original array
console.log(new2);
console.log("c",myarray);

//arrays can also take arrays inside them
const Alphabets=["a","b","c","d","e"]
const numbers=[1,2,3,4,5,6]
Alphabets.push(numbers)
console.log(Alphabets);
//whole array is consider as a single element in the array
//in order to access the element from that array
console.log(Alphabets[5][3]);

const all=Alphabets.concat(numbers)//combine two or more arrays and return a new array
console.log(all);

//another way to add the values of two arrays
const all2=[...Alphabets,...numbers]
console.log(all2);
//vales comes out to be spread 
//... is spead operator

//in case of nested arrays
array1=[1,2,3[4,5],6,[7,8[9,10]]]
const real=array1.flat(2)//merge the nested arrays into the single array
console.log(real);

console.log(Array.isArray("riya"));//to check if it is array or not
console.log(Array.from("riya"));//convert into array
console.log(Array.from({name:"riya"}));//gives the empty array if it cannot be able to convert into the array
