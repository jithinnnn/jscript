//for
//for(initial value, condition, incre/decre){
    // code
// }

// for(var i=1;i<=5;i++){
//     console.log("hello",i);
// }

// console.log(i);
// --------------------------------------------
// for(var j=1;j<=10;j++){
//     console.log(j);
// }                           //1-10
// ----------------------------------------------------
// for(var k=10;k>=1;k--){
//     console.log(k);         //10-1
// }
//-----------------------------------------------------
// for(var l=2;l<=8;l+=2){
//     console.log(l);
// }                          //2 4 6 8 
// ----------------------------------------------------

//mutilplication table
// const num=2
// for(i=1;i<=10;i++){
//     console.log(i,"*",num,"=",i*num);
// }
// ------------------------------------------------------
// var range1=10
// var range2=35
// for(range1;range1<=range2;range1++){
//     if(range1%2==0){
//         console.log(range1,"is even");
//     }
//     else{
//         console.log(range1,"is odd");
//     }
// }
// //---------------------------------------------------------------------
// var range1=10
// var range2=35
// //divisible by 4
// for(range1;range1<=range2;range1++){
//     if(range1%4==0){
//         console.log(range1,"is divisible by 4");
//     }
// }
//----------------------------------------------------------------------
// var num1=5
// var num2=15
// for(num2;num2>=num1;num2--){        //descending cube
//     console.log(num2**3);    
// }
//---------------------------------------------------------------------
// n=5
// sum=0
// for(i=1;i<=n;i++){
//     sum=sum+i;
//  }
//  console.log(sum);   //ascending adding numbers 1-5
// --------------------------------------------------------------------
// for(;n>0;n--){
//     sum+=n;
// }
// console.log(sum);       //descending adding numbers 1-5
// --------------------------------------------------------------------


//factorial
// var n=3
// factorial=1
// // 3*2*1 =6

// for(;n>=1;n--){
//     factorial=n*factorial;
// }
// console.log(factorial);
//--------------------------------------------
// var n=10
// //find factors of n   1 2 5 10

// for(i=1;i<=n;i++){
//     if(n%i==0){
//         console.log(i);
//     }
// }
//--------------------------------------------

// var n=30
// // find even factors of n 

// for(i=0;i<=n;i++){
//     if(n%i==0 && i%2==0){
//         console.log(i);
//     }
// }
// ---------------------------------------------
// var r1=1
// var r2=5                     //factorial of numbers 1-5
// for(r1;r1<=r2;r1++){
//     fact=1
//     for(let i=r1; i>1;i--){
//         fact=fact*i;
//     }
//     console.log(fact);

// }
//-------------------------------------------------------------
//fibonacci series
// 0 1 1 2 3 5 8 ...
//10 terms

var num1=0
var num2=1

for(let i=1;i<=10;i++){
    console.log(num1);
    num3=num1+num2;
    num1=num2;
    num2=num3;
}
//-------------------------------------------------------------

// const sum=6
// for(i=1;i<=5;i++){
//     for(j=1;j<=5;j++){
//         if(i+j==sum){
//             console.log(i,j);
//         }
//     }
// }