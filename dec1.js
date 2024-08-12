var sname="anu"
var age=25
if(age>=18){
console.log("Eligible for vaccination");
}
else{
    console.log("not eligible for vaccination");
}
// --------------------------------------------------------------
const num=5
if(num%2==0){
    console.log(num, "is even");
}
else{
    console.log(num, "is odd");
}
// --------------------------------------------------------------

var num1=10
if(num1>0){
    console.log(num1, "is a positive number"); //if condition is false then moves to else if condition and checks if it is true or not.
}
else if(num1==0){
    console.log(num1,"not positive or negative"); // if "else if" condition is false then it moves into else condition.

}
    else{
        console.log(num1, "is a negative number"); // only one condition out of the three will work at a ime.
    }
// --------------------------------------------------------------

var num5=15
// conditions are num>10 , num is odd then print square of the number

if(num5>10 && num5%2!=0){
    console.log(num5*num5, "is the sqaure of", num5);
}
else{
    console.log("not greater than 10 or not an odd number");
}

//----------------------------------------------------------------
const score1=47
const score2=41
const score3=39

console.log("total score is", score1+score2+score3);
console.log("avg score is", (score1+score2+score3)/3);

//------------------------------------------------------------------
const score=87

//90-100 A+
//80-89 A
//70-79 B+
//60-69 B
//60 below F
//above 100 invalid

if(score>100){
    console.log("Invalid");
}
else if(score>=90 && score<=100){
    console.log("A+");
}
else if(score>=80 && score<90){
    console.log("A");
}
else if(score>=70 && score<80){
    console.log("B+");
}
else if(score>=60 && score<70){
    console.log("B");
}
else if(score<60){
    console.log("F");
}
else{
    console.log("error");
}
//----------------------------------------------
const num8=10
//num divisible by 3 fizz
//num divisible by 5 buzz
//num divisible by 15 fizzbuzz

if(num8%15==0){
    console.log("fizzbuzz");
}
else if(num8%5==0){
    console.log("buzz");
}
else if(num8%3==0){
    console.log("fizz");
}
else{
    console.log("invalid");
}
// -------------------------------------------------

fixed_amt=100000
withdraw_amt=1000000
balance=fixed_amt-withdraw_amt

if(withdraw_amt>fixed_amt){
    console.log("insuffient bal");
}
else{
console.log(`amount debitted is ${withdraw_amt} and balance amount is ${balance}`);
}
