// for(i=1;i<=5;i++){
//     if(i==3){
//         break                                  //output :- 1,2
//     }
//     console.log(i);
// }
// //----------------------------------
// for(i=1;i<=5;i++){
//     if(i==3){
//         continue
//     }
//     console.log(i);                             //output : 1 , 2, 4, 5
// }
//----------------------------------

// var num=7
// flag=0                                                        // use flag if the output is repeating, so addcondition if flag=1 or not
// for(i=2;i<(num/2);i++){
//     if(num%i==0){
//         flag=1
//         break
//     }
// }
//     if(flag==1){
//         console.log("not prime");
//     }
//     else{
//         console.log("prime");
//     }

//OR

// var num=7                                                       
// for(i=2;i<num;i++){
//     if(num%i==0){
//         break
//     }
// }
//     if(i==num){
//         console.log("prime");
//     }
//     else{
//         console.log("not prime");
//     }
//-----------------------------------------
// var range1=5
// var range2=15
// flag=0

// for(range1;range1<=range2;range1++){
// for(i=2;i<range1;i++){                          //prime numbers to range1 to range2
//     if(range1%i==0){
//         break;
//     }
// }
//     if(range1==i){
//         console.log(range1);
//     }

// }
//------------------------------------------
var range1=5
var range2=15


for(range1;range1<=range2;range1++){
for(i=2;i<range1;i++){                          //none prime numbers to range1 to range2
    if(range1%i==0){
        console.log(range1);
        break;
    }
}
}