//IMMEDIATELY INVOKED FUNCTION EXPRESSION
(function hello(){
console.log("database connected");

})();//semi colon to stop the context
(function another(){ //names IIFE
    console.log("one more");
    
})();
    //to remove the pollution of declared variables or anything IIFE is used

    ((name)=>{
        console.log(`${name},hello please`);
        
    })("riya")