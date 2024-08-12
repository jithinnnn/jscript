//try catch - resolve errors
function display(){
    console.log("function working");
}

try{    //tries to check if there is error or not in the part which is entered into the try block 
display()
}
catch{  //if error is found, then code in the catch block is executed
    console.log("error occured");
}
finally{
    console.log("finally");
}
//-----------------------------------------------
