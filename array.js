// var numbers=[1,5,6,7,8,9,100,'hello',false,8.9] //heterogernous collection
// console.log(numbers);

// //linear data structure
// console.log(numbers.length);
// console.log(numbers[0]);
// console.log(numbers[numbers.length-1]);

// //mutable - array(means modifiable)

// //add
// numbers.push(3,4,'hi')
// console.log(numbers);

// //remove
// numbers.pop()  //removes the last element only
// console.log(numbers);

// numbers[0]=100   //updating data in array
// console.log(numbers);



// var a=[1,4,7,2,3]
// console.log(a);

// for(let i of a){
//     console.log(i);
// }

// for(let i in a){
//     console.log(i);                 //iterations in array
// }



// var b=[]
// b.push(100,800,900)
// console.log(b);

// squareArray=a=>{
// var num=[]
// for(i of a){
// num.push(i**2)
// }
// return num
// }
// console.log(squareArray([2,5,7,9,3,9]));


// newArray=a=>{
//     b=[]
//     for(i of a){
//         if(i<5){
//             b.push(i-1)
//         }
//         else if(i>5){
//             b.push(i+1)
//         }
//     }
//     return b
// }
// console.log(newArray([1,2,3,4,6,7,8]));


// newArray=a=>{
//     b=[]
//     c=[]
//     for(i of a){
//         if(i>0){
//             b.push(i)
//         }
//         else if(i<0){
//             c.push(i)
//         }
//     }
//     console.log(b);
//     console.log(c);
// }
// newArray([1,-4,2,6,-7,-6,100,-20])


// expenses=[20000,6000,15000,10000,50000,13000]
// // maximum
// var maximum=0
// for( i of expenses){
//     if(i>maximum){
//         maximum=i
//     }
// }
// console.log(maximum);

expenses=[20000,6000,15000,10000,50000,13000]
// //minimum
// var minimum=maximum
// for( i of expenses){
//     if(i<minimum){
//         minimum=i
//     }
// }
// console.log(minimum);

//OR

// minimum=expenses[0]
// for(i of expenses){
//     if(i<minimum){
//         minimum=i
//     }
// }
// console.log(minimum);
// total=0
// for(i of expenses){
//     total=total+i

// }
// console.log(total);

// primeArray=a=>{
//     b=[]
//     c=[]
//     for(i of a){
//         for(j=2;j<i;j++){
//             if(i%j==0){
//                 c.push(i)
//                 break
//             }
//         }
//         if(j==i){
//             b.push(i)       
//         }
//     }
//     console.log(b);
//         console.log(c);
// }
// primeArray([2,3,4,5,6,7,8,9])



// middleElmt=a=>{
//    return a[Math.floor(a.length/2)]
// }

// console.log(middleElmt([5,6,8,3,2]));


// commonArray=(a,b)=>{
//     c=[]
//     for(i of a){
//         for(j of b){
//             if(i==j){
//                 c.push(i)
//             }
//         }
//     }
//     console.log(c);
// }

// commonArray([1,2,3,4,5],[3,4,5,6,7,8]);


// checkElmt=(a,b)=>{
//     for(i of a){
//         if(i==b){
//             return "present"
//         }
//     }
//     return "not present"
// }
// console.log(checkElmt([1,2,55,77,99,23,45,67],67));



// s='hi hello hi luminar'                 //converts string into arraay
// a=s.split(" ")
// console.log(a);


// s="We are focused on providing advanced level software training like Big Data Training, Hadoop Training, Data Science Training, Python Training, Machine Learning Training, Selenium Training in Cochin Kerala."
//     c="t"
//     newArray=[]
//     s=s.toLowerCase()
//     a=s.split(" ")
//     console.log(a);
//     for(i of a){
//         if(i[0]==c){
//             newArray.push(i)
//         }
//     }
//     console.log(newArray);

//find total number of words in s

// s="hello hi hello"
// console.log(s.split(" ").length);

//find the longest word in s
// s="built with compatibility in mind"
// a=s.split(" ")
// console.log(a);
// longest=a[0]
// for(i of a){
//     if(i.length>longest.length){
//         longest=i
//     }
// }
// console.log(longest);


// s=[6,4,2,3,1,5]
// sum=9
// for(i of s){
//     for(j of s){
//         if(i+j==sum){
//             console.log(i,j);
//         }
//     }

// }



// s="We are focused on providing advanced level software training like Big Data Training, Hadoop Training, Data Science Training, Python Training, Machine Learning Training, Selenium Training in Cochin Kerala."
// s=s.toLowerCase();
// a=s.split(" ")
// count=0
// console.log(a);
// for(i of a){
//     if(i[0]=='a' || i[0]=='e'||i[0]=='i'||i[0]=='o'||i[0]=='u'){
//         count++
//     }
// }
// console.log(count);

//BINARY
a=[6,5,2,3,4]  //e=2 flag=0
//sort [2,3,4,5,6]  [2,3]  [2]

//middle Elmnt
//conditions
        // middleElmnt==e  ; flag=1
        // e>middleElmt=[right]
        // e<middleElmt[left]

// console.log(a.sort((n1,n2)=>n1-n2));
// console.log(a.sort((n1,n2)=>n2-n1));

// binarySearch=(a,e)=>{
//     var count=0
//     var flag=0
//     var lower=0
//     var upper=a.length-1
//     //sort
//     a.sort((a,b)=>a-b)
//     while(lower<=upper){
//         middleIndex=Math.floor((lower+upper)/2)
//         if(a[middleIndex]==e){
//             flag=1
//             break
//         }
//         else if(e>a[middleIndex]){
//             lower=middleIndex+1
//         }
//         else if(e<a[middleIndex]){
//             upper=middleIndex-1
//         }
//     }
//     return flag==1?"present":"not present"
// }
// console.log(binarySearch([1,2,55,77,99,23,45,67],100));



// a=[6,4,2,3,1,5]
// a.sort((a,b)=>a-b)
// sum=8
// low=0
// upper=a.length-1
// while(low<upper){
//     s=a[low]+a[upper]
//     if(sum==s){
//         console.log(a[low],a[upper]);
//         low++
//         upper--
//     }
//     else if(s<sum){
//         low++
//     }
//     else{
//         upper--
//     }
// }


//nested array
// greater=a=>{
// for(i of a){
//     for(j of i){
//     if(j>10){
//         console.log(j);
//     }
// }
// }
// }
// console.log(greater([[34,56],[12,87,5],[9,0,3,2,67]]));


employees=[
    [3,"anu","developer","kochi",75000,2],
    [2,"amal","tester","calicut",45000,2],
    [5,"arun","developer","thrissur",65000,1],
    [1,"megha","tester","kochi",50000,3],
    [1,"alex","developer","kochi",25000,1],
]
// for( i of employees){
//     console.log(i[1]);           //names
// }

// for( i of employees){
//     if(i[2]=='tester'){
//      console.log(i[1]);             //names of testers
//     };
//  }

// console.log(employees.sort((a,b)=>a[0]-b[0]));  

//TOTAL SALARY
// console.log(employees.map(i=>i[4]).reduce((a,b)=>a+b));

// console.log(employees.reduce((a,b)=>a[4]<b[4]?a:b)[1]);  //name of person with lowest salary

// console.log(employees.reduce((a,b)=>b[5]>a[5]?b:a)[4]);  //salary of person with highest experience

//   for(i of employees){
//     if(i[1]=="megha"){
//         console.log(i);
//     }
//   } 

//   console.log(employees.find(i=>i[1]=="megha"));      //using filter method because we want to avoid loops          //display details of megha


//   for(i of employees){
//     if(i[2]=="developer" && i[3]=="kochi"){
//         console.log(i[1]);
//     }
//   }                                                      

   console.log(employees.filter(i=>i[2]=="developer"&&i[3]=="kochi").map(i=>i[1]));                       //find developers from kochi

//   console.log(employees.map(i=>i[1]));                                                                //display all employee names


//   console.log(employees.filter(i=>i[2]=='tester').map(i=>i[1]));                   //find testers name


// REDUCE 

// a=[1,2,3,4,5,6]
// console.log(a.reduce((a,b)=>a+b));
// console.log(a.reduce((a,b)=>a>b?a:b)); //highest element in array
// console.log(a.reduce((a,b)=>a>b?b:a));//lowest element in array