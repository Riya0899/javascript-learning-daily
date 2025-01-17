//IMMEDIATELY INVOKED FUNCTION EXPRESSION
(function hello(){
console.log("database connected");

})();//semi colon to stop the context or to separate the previous function from the next one
(function another(){ //named IIFE
    console.log("one more");
    
})();
    //to remove the pollution of declared variables or anything IIFE is used

    ((name)=>{
        console.log(`${name},hello please`);
        
    })("riya")