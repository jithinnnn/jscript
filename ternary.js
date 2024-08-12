// //positive or neg
// n=10
// n>0?console.log("positive"):n<0?console.log("neg"):console.log("zero");  
// // OR
// console.log(n>0?"positive":n<0?"neg":"");
// -----------------------------------------------------------------------
// var age=17
// console.log(age>=18?"eligible for vaccination":"not eligible for vaccination")
//------------------------------------------------------------------------
// var num=11
// console.log(num>10&&num%2!=0?num**2:"");
//----------------------------------------------------------------------
// var num1=30
// console.log(num1%15==0?"fizzbuzz":num1%5==0?"buzz":num1%3==0?"fizz":"invalid");
//------------------------------------------------------------------------
// var num=11
// for(i=2;i<num;i++){
//     if(num%i==0){
//         break;
//     }
// }
// console.log(num==i?"Prime number":"not prime");
// -------------------------------------------------------------------------
var range1=5                                //sum of prime numbers from range 1 to range 2
var range2=10
var sum=0
for(range1;range1<=range2;range1++){
    for(i=2;i<range1;i++){
        if(range1%i==0){
            break
        }
    }
    range1==i?sum+=range1:""
}
console.log(sum);

//--------------------------------------------------------------------------
var range1=5                                    //sum of non prime numbers from range 1 to range 2
var range2=10
var sum=0
for(range1;range1<=range2;range1++){
    for(i=2;i<range1;i++){
        if(range1%i==0){
            sum=sum+range1
            break
        }
    }
}
console.log(sum);

