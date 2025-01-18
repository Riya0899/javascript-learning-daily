const numbers=[1,2,3,4,5,6,7]
const new_num=numbers.map((num)=>num+10)
console.log(new_num);

 //chaining => using two or more methods directly at one go

 const one=[1,2,3,4,5,6,7]
 const two=one.map( (item)=>item*10)
               .map( (item)=>item+3)
                .filter((item)=>item>30)
                console.log(two);
                
//map => returns everything given
//filter => returns if true 