//bank account
fixed_amt=100000
withdraw_amt=75000
fixed_amt=fixed_amt-withdraw_amt

console.log(`Withdraw amount is ${withdraw_amt} and balance amount is ${fixed_amt}`);

//swapping prgrm
var num1=10
var num2=20

console.log("before swapping the value of num1",num1);
console.log("before swapping the valueof num2", num2);

// swapping
// var temp;
// temp=num1;
// num1=num2;
// num2=temp;  //by using 3rd variable

// num1=num1+num2;
// num2=num1-num2;
// num1=num1-num2;


console.log("after swapping the value of num1",num1);
console.log("after swapping the value of num1",num2);


//input 

var num1=2
var num2=6
var num3=3

//output : 9 5 8
var temp=num1
temp2=num2
num1=num2+num3;
num2=temp+num3;
num3=temp+temp2;      // OR console.log{num2+num3, num1+num3, num1+num2};

console.log(`output is ${num1},${num2} ,${num3}`);