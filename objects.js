// st1={college: 'Luminar', name:'amal',rollno: 1,0:7}
// for(i in st1){  //FOR ITERATING OBJECTS, ONLY IN WORKS AND OF DOES NOT WORK
//     console.log(i);
// }
// for(i in st1){
//     console.log(st1[i]);
// }

// //data access
// console.log(st1["college"]); //in objects, we access the keys instead of the indexes
// console.log(st1["name"]);
// console.log(st1[0]);
// //OR 
// console.log(st1.name);
// // console.log(st1.0); not possible in case of numbers as key

// //add new data
// st1['place']='kochi'
// console.log(st1);
// st1.age=23
// console.log(st1);


// //update //already existing key gets new value, then value gets updated
// st1['name']='anu'
// console.log(st1);

// //check a key present or not in object
// console.log("name" in st1);


// car={name:"Honda City",manufacture:"honda",price:1300000}

//find the name of the car
//check manufacture present or not
//increment price by 100000
//add property variant manual/automatic
//add colors - white,black,grey

// console.log(car.name);
// // console.log("manufacture" in car);
// console.log(car.price=car.price+100000);
// car.variant='manual'
// console.log(car);
// car['colors']=['white','black','grey']
// console.log(car);


a=[10,20,20,10,10,30]
count={}
for(i of a){
    if(i in count){
        count[i]+=1
    }
    else{
        count[i]=1
    }
}


console.log(count);

// s='hi hello luminar hello'
// //{hi:1,hello:2,luminar:1} should be the output
// s=s.split(" ")
// count={}
// s.map(i=>i in count?count[i]+=1:count[i]=1)
// console.log(count);


s='abcabcd' 
count={}
r=''
s=s.split("")
s.map(i=>i in count?r+=i:count[i]=1)
console.log(r);

s='hello hi hello'
console.log(s.split(" ").join(""));  //GETS RID OF THE SPACE hellohihello

// function recursive(s){
// obj={}
// //write a function to find first and last recursive elements in s
// rec=""  //rec={}
// s=s.toLowerCase().split("").map(i=>i in obj?rec+=i:obj[i]=1);
// console.log(rec[0]);
// console.log(rec[rec.length-1]);
// }
// r=Object.keys(rec)
// console.log(r);
// console.log(r[0]);
// console.log(r[r.length-1]);

// recursive('Luminar Technolab')

//array of objects
// var mobiles=[
//     {name:"nokia",price:30000,display:'lcd',nw:'4g'},
//     {name:"apple",price:100000,display:'led',nw:'5g'},
//     {name:"samsung",price:80000,display:'led',nw:'5g'},
//     {name:"oppo",price:15000,display:'lcd',nw:'4g'},
//     {name:"mi",price:25000,display:'lcd',nw:'4g'},
// ]
// console.log(mobiles);

// //find total number of mobiles
// console.log(mobiles.length);
// //display all mobiles name
// console.log(mobiles.map(i=>i['name']));
// //find mobiles with 4g network
// console.log(mobiles.filter(i=>i['nw']=='4g').map(i=>i['name']));
// //find display of samsung
// console.log(mobiles.find(i=>i['name']=='samsung').display);
// //find mobile with highest price
// console.log(mobiles.reduce((a,b)=>a.price>b.price?a:b).name);
// //total price
// console.log(mobiles.map(i=>i['price']).reduce((a,b)=>a+b));

//-----------------------------------------------------------------------------------------

const users=[
    {id:100,first_name:"ram",email:"ram@gmail.com",dept:"sales",salary:25000},
    {id:101,first_name:"ravi",email:"ravi@gmail.com",dept:"it",salary:28000},
    {id:102,first_name:"raju",email:"raju@gmail.com",dept:"ba",salary:35000},
    {id:103,first_name:"rahul",email:"rahul@gmail.com",dept:"devop",salary:45000},
    {id:104,first_name:"akhil",email:"akhil@gmail.com",dept:"devop",salary:55000},
    {id:105,first_name:"aravind",email:"aravind@gmail.com",dept:"qa",salary:65000},
    {id:106,first_name:"ajay",email:"ajay@gmail.com",dept:"qa",salary:28000},
]

// //find total number of users
// console.log(users.length);
// //print names of devop
// console.log(users.filter(i=>i['dept']=='devop').map(i=>i['first_name']));
// //print the mail id of user whose user id is 102
// console.log(users.find(i=>i['id']=='102').email);
// //print the user dept who have highest salary
// console.log(users.reduce((a,b)=>a.salary>b.salary?a:b).dept);
// // //salary of users whose dept is devop
// console.log(users.filter(i=>i.dept=='devop').map(i=>i.salary));
// //sort the users according to their salaries
// console.log(users.sort((a,b)=>b.salary-a.salary));
// //find the user who have lowest salary
// console.log(users.reduce((a,b)=>a.salary<b.salary?a:b).first_name);

//-----------------------------------------------------------------------------------------------
// var accounts = [
//     {
//       acno: 1000, ac_type: "savings", balance: 5000, transactions: [
//         { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
//         { to: 1002, amount: 600, note: "geto", method: "neft" },
//         { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
//       ]
//     },
//     {
//       acno: 1001, ac_type: "savings", balance: 6000, transactions: [
//         { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
//         { to: 1002, amount: 500, note: "geto", method: "neft" },
//         { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
 
//       ]
//     },
//     {
//       acno: 1002, ac_type: "current", balance: 8000, transactions: [
//         { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
//         { to: 1001, amount: 5000, note: "geto", method: "neft" },
//         { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
 
//       ]
//     },
//     {
//       acno: 1003, ac_type: "current", balance: 16000, transactions: [
//         { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
//         { to: 1002, amount: 500, note: "geto", method: "neft" },
//         { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
 
//       ]
//     },
 
//   ]

//   //1.Print all gpay transactions?
//   console.log(accounts.map(i=>i['transactions']).flat().filter(i=>i['method']=='g-pay'));
//   //print all transaction whose amount>3000?
//   console.log(accounts.map(i=>i['transactions']).flat().filter(i=>i['amount']>3000))
//   //print credit transaction of account 1002?
//   console.log(accounts.map(i=>i['transactions']).flat().filter(i=>i.to=='1002'));
//   //.print debit transaction of account 1002?
//   console.log(accounts.find(i=>i['acno']=='1002').transactions);
//   //print highest balance ac details?
//   console.log(accounts.reduce((a,b)=>a.balance>b.balance?a:b));