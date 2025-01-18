numbers=[1,2,3,4,5,6,7,8,9,10]
let new_nums=numbers.filter((num)=>num>4)   //filter method
console.log(new_nums);         //takes callback function in it 

number=[1,2,3,4,5,6,7,8,9,10]
let nums=number.filter((num)=>{
    return num>4
})
console.log(nums);  

const books=[
    {
        title:"book1",genre:"science",publish:1921
    },
    {
        title:"book2",genre:"science-fiction",publish:1821
    },
    {
        title:"book3",genre:"science",publish:1951
    },
    {
        title:"book4",genre:"comedy",publish:1821
    },
    {
        title:"book5",genre:"science",publish:1921
    },
    {
        title:"book6",genre:"fiction",publish:1321
    },
    {
        title:"book7",genre:"non-fiction",publish:1921
    },
    {
        title:"book8",genre:"science",publish:1927
    },
    {
        title:"book9",genre:"science",publish:1621
    
    }
]
const user_books=books.filter((bk)=>bk.genre="fiction")
console.log(user_books);

const user_book=books.filter((bk)=>bk.publish>1800)
console.log(user_books);

