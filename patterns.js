// for(row=1;row<=4;row++){
//     s=""
//     for(col=1;col<=row;col++){
//         s=s+"* "
//     }
//     console.log(s);
// }

// for(row=1;row<=4;row++){
//     s=""
//     for(col=4;col>=row;col--){
//         s=s+"* "
//     }
//     console.log(s);
// }

// for(row=1;row<=4;row++){
//     s=""
//     for(col=1;col<=row;col++){
//         if(row==3 && col==2){
//             s=s+"  "
//         }
//         else{
//             s=s+"* "
//         }
//     }
//     console.log(s);
// }

// for(row=1;row<=5;row++){
//     s=""
//     for(col=1;col<=5;col++){
//         s=s+"* "
//     }
//     console.log(s);
//  }
//                                                         *
//                                                         *  *
//                                                         *     *                 
//                                                         *       *           
//                                                         *     *
//                                                         *  *
//                                                         *
// for(row=1;row<=4;row++){
//     s=""
//     for(col=1;col<=row;col++){
//         if(row==3 && col==2 || row==4 && col==2 || row==4 && col==3){
//         s=s+"  "
//         }
//         else{
//             s=s+"* "
//         }
//     }
//     console.log(s);
// }
// for(row=1;row<=5;row++){
//     s=""
//     for(col=5;col>=row;col--){
//         if(row==1 && col==2 || row==1 && col==3 || row==1 && col==4 || row==2 && col==3 || row==2 && col==4 || row==3 && col==4){
//         s=s+"  "
//     }
//     else{
//         s=s+"* "
//     }
//     }
//     console.log(s);
// }                                                 

// space=5
// for (i=1;i<=4;i++) {
//   s=""
//   for (k=space; k>0; k--) {
//     s=s+" "
//   }
//   space--
// for(j=1;j<=i;j++){
//     s=s+"* "
// }
// console.log(s);
// }

// for(row=1;row<=5;row++){
//     s=""
//     for(k=1;k<=row;k++){
//         s=s+" "
//     }
//     for(col=1;col<=5;col++){
//         s=s+"* "
//     }
//     console.log(s);
// }


// for(row=1;row<=4;row++){
//     s=""
//     for(col=1;col<=row;col++){
//             s=s+row
//         }
//         console.log(s);
//     }

// for(row=1;row<=4;row++){
//     s=""
//     for(col=1;col<=row;col++){
//             s=s+col
//         }
//         console.log(s);
//     }

    // for(row=1;row<=4;row++){
    //     s=""
    //     for(col=1;col<=row;col++){
    //             s=s+col*row+" "
    //         }
    //         console.log(s);
    //     }

    // num=1
    // for(row=1;row<=4;row++){
    // s=""
    // for(col=1;col<=row;col++){
    //         s=s+num+" "
    //     num++
    //     }
    //     console.log(s);
    // }
// space=0
// for(row=4;row>0;row--){
//     s=""
//     for(k=0;k<=space;k++){
//         s=s+" "
//     }
//     space++
//     for(col=1;col<=row;col++){
//         if(row==3 && col==2){
//             s=s+"  "
//         }
//         else{
//             s=s+0+" "
//         }
        
//     }
//     console.log(s);
// }

space=10
for(i=1;i<=4;i++){
    s=""
    for(k=space;k>0;k--){
        s=s+" "
    }
    space=space-2
    for(j=1;j<=i;j++){
        s=s+"* "
    }
    console.log(s);
}


