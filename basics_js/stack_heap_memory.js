//Two types of memories
//stack(primitive)--you get the copy of the declared variable
//heap (non-primitive)--you get the reference of the declared variable

let myname="riya"
let anotherName=myname
console.log(anotherName);
anotherName="priya"
console.log(anotherName);

//stored in stack memory//a copy of the value is changed 

let myaccount={
    name:"riya",
    upi:"riya@ypl"
}
let anotherAccount=myaccount
console.log(anotherAccount);
anotherAccount.name="priya"
console.log(anotherAccount);
console.log(myaccount);

//stored in heap memory//since the reference is there in the memory so whatever changed is doen to either of the variable the changes are done in  the reference so both the variables will get the updated value