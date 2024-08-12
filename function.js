// add() //hoistinng - calling the function before it is declared is called hoisting. supports function only in javascript

// function add(){
//     var num1=5
//     var num2=10 
//     var sum=num1+num2
//     console.log(sum);
// }   

// add()

//function without arguement


// function add(num1,num2){
//     sum=num1+num2
//     console.log(sum);
// }

// add(5,10)                           ///function with arguement, here num1 and num2 values are not always fixed so they are the arguement  nd we call the function using the arguements
//any variable declared in the function can only be printed in the function


//factorial

// function fact(num1){
//     var factorial=1
//     for(;num1>1;num1--){
//         factorial=factorial*num1
//     }
//     console.log(factorial);
// }

// fact(4);

// prime check
// function prime(num2){
//     for(i=2;i<num2;i++){
//         if(num2%i==0){
//             break
//         }
//     }
//     if(num2==i){
//         console.log(num2,"is prime");
//     }
//     else{
//         console.log(num2,"is not prime");
//     }
// }

// prime(2)

//fibonacci
// function fibo(n){
//     num1=0
//     num2=1
//     for(var i=1;i<=n;i++){
//         console.log(num1);
//         num3=num1+num2
//         num1=num2
//         num2=num3
//     }
// }

// fibo(11)

//sum of non prime numbers from range1 to range 2

// function nonprime(range1,range2){
//     sum=0
//     for(;range1<=range2;range1++){
//         for(i=2;i<range1;i++){
//             if(range1%i==0){
//                 sum=sum+range1
//                 break
//             }
//         }
//     }
//     console.log(sum);
// }

// nonprime(2,10)

// function demo(){
//     n=5 //global variable (to make it global variable so that it works outside the function also, just simply put n=5)
//     console.log("inside fn",n);
// }
// demo()
// console.log("outside fn",n);

//return type - very lazy so stops function after return is used even once, only one return in one function , and return should be used last

// function add(num1,num2){
//     var sum=num1+num2
//     return "the sum is "+sum
// }
// console.log(add(5,6));
// var a=add(100,500)
// console.log(a);

// function display(){
//     for(i=1;i<=5;i++){
//         return i                    //only displays 1 since return is lazy, so loop doesnt work with return type
//     }
// }
// console.log(display());

// function factorial(num1){
//     fact=1
//     for(;num1>=1;num1--){
//         fact=fact*num1
//     }
//     return fact
    
// }
//  function rangeFactorial(r1,r2){    //callback function        //here we used the previous factorial function to find the factorial of numbers from range 1 to range2, this is only possible with the help of return type
//     for(;r1<=r2;r1++){
//         console.log(factorial(r1));
//     }
//  }

//  rangeFactorial(1,5)

// greatest among two

// function great(num1,num2){
//     if(num1>num2){
//         return "n1 is greater"+num1
//     }
//     else if(num2>num1){
//         return  "is greater"+num2
//     }
//     else{
//         return "equal"
//     }
// }

// console.log(great(7,6));

// prime check
// function prime(n){
//     for(i=2;i<n;i++){
//         if(n%i==0){
//             break
//         }
//     }
//     if(n==i){
//         return n
//     }
// }

// console.log(prime(4));

// // //callback for prime number range1 to range2

// function primerange(range1,range2){
//     for(;range1<=range2;range1++){
//         if(typeof(prime(range1)) =='number'){
//         console.log(prime(range1));
//         }
//     }
// }
// primerange(2,15)


//recursive function
// function hello(){
//     console.log("hello");
//     hello()
// }
// hello()



// //sum of n numbers using recursive function
// function sum(n){
//     if(n==0){
//         return n;
//     }
//     else{
//         return n+sum(n-1)
//     }
// }
// console.log(sum(5));

// //factorial of n numbers using recursive function
// function fact(n){
//     if(n==1){
//         return n;
//     }
//     else{
//         return n*fact(n-1)
//     }
// }
// console.log(fact(5));

// //fibonacci series using recursive function
// function fibonacci(n){
//     if(n<=1){
//         return n
//     }
//     else{
//         return fibonacci(n-1)+fibonacci(n-2)
//     }
// }
// for(i=0;i<10;i++){
//     console.log(fibonacci(i));
// }

function sum(n){
    var sum=0
    for(i=1;i<=n;i++){
        sum=sum+i;
    }
    console.log(sum);
}

sum(5);