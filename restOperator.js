//rest 
//...

//accepts all the arguements given to the function and makes it work, does not have any fixed number of arguements
//COLLECT MULTIPLE ELEMENTS AND MAKE A SINGLE ARRAY 

// function add(n1,n2){
//     console.log(n1+n2);
// }

// add(100,20,100)


// function add(...n){
//     console.log(n.reduce((a,b)=>a+b));
// }
// add(10,20,30,40)  //THIS IS THE USE OF REST OPERATOR


// ... - spread
// s='hello'
// console.log([...s]);  //CONVERTING STRING INTO ARRAY USING SPREAD OPERATOR


// a=[1,2,3,4]
// b=[6,7,8,9]
// console.log([...a,...b]);

obj={1:10,2:20}
console.log({...obj,3:30});
console.log({...obj,1:100});