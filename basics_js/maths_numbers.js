const number=200

const score=new Number(300)
console.log(score);
console.log(number);

console.log(score.toString());//converted into number
console.log(score.toFixed(2));//precesion value after the decimal

const othernumber = 23.6588
console.log(othernumber.toPrecision(4));//precised value on the focused upto digit 

const onemore=10000
console.log(onemore.toLocaleString('en-IN'));//separate the zeroes account to the standards


//++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++//
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.7));
console.log(Math.ceil(9.1));//give the top number
console.log(Math.floor(8.9));//give the low value

console.log(Math.random());//gives the value between 0 and 1//

const min=10
const max=30
console.log(Math.floor((Math.random()*(max-min+1)))+min );







