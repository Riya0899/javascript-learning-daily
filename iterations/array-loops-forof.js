//for of loops
// ["","","",""]
// [{},{},{},{}]

const arr=[1,2,3,4,5]
for (const element of arr) {
    console.log(element);
    
}

const greetings="hello! welcome to my world"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
    
}

//maps
const map=new Map()   //remembers the order of the key value pair  ///stores unique value
map.set("name","riya")
map.set("age",21)
map.set("city","ludhiana")
map.set("country","india")
console.log(map);
for (const [key,value] of map) {   //[key,value] => destructure of the data
    console.log(key ,"=>" ,value);
    
}
