const coding=["c++","java","c","python"]
coding.forEach(function(item){
    console.log(`the programming language is ${item}`);
    
})

coding.forEach((item)=>{  //foreach in arrow function
    console.log(item);
    
})

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})

const language=[
    {
        name:"jv",
        field:"java"
    },
    {
        name:"c",
        field:"c language"
    },
    {
        name:"cpp",
        field:"c++"
    }
]
language.forEach((item)=>{
    console.log(item.name);
    console.log(item.field);
    
    
})