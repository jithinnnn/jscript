var range1=1
var range2=10

for(;range1<=range2;range1++){
    if(range1%2==0){
        fact=1
        for(let i=range1; i>1;i--){
            fact*=i;
        }
        console.log(fact);
    }
}                               //finding factorial of even numbers from 1 - 10

//  for(i=-5;i<=5;i++){
//     if(i%2!=0 && i>2){
//         console.log(i);
//     }                           //positive odd numbers from -5 to 5
//  }

// var n=5
// var sum=0
//  for(i=1;i<=n;i++){
//     if(n%i==0){                     // sum of factors of n
//         sum+=i;
//     }
//  }
//  console.log(sum);


//  num1=5
//  num2=15

//  for(num1;num1<=num2;num1++){
//     if(num1%2==0){
//         console.log(num1**3);
//     }                                   // cube of even numbers from range 5-15
//  }