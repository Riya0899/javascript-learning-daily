//reduce

const mynums=[1,2,3,4,5]
const total=mynums.reduce( function(acc,cv){
    return acc+cv
},0)
console.log(total );

//function(accumulator,current value)
// {
//     return any operation
// },initial Value
// print the result

//using arrow function

const number=[1,2,3,4,5]
const totals=number.reduce( (acc,cv)=>acc+cv,0)
console.log(totals);


//another examplee

const cart=[
    {
        item:"data science",
        price:2000
        
    },
    {
        item:"android",
        price:2000
        
    },
    {
        item:"mern",
        price:2000
        
    }
]
const shopping=cart.reduce((acc,item)=>acc+item.price,0)
console.log(shopping);
