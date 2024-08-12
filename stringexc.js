// string
var data='luminar'
// console.log(typeof data);

// //linear data structure

// //index 
// console.log(data[0]);
// console.log(data[4]);

// //count
// console.log(data.length);

// function string(s){                  
//     return s[s.length-1]
// }

// console.log(string('apple'));

// var s='luminar'             //iteration of strings
// for(let i of s){
//     console.log(i);
// }

// var s='luminar'             //iteration of strings
// for(let i in s){
//     console.log(i);
// }

// a='abcd'
// b=''
// for(i of a){
//     b=b+i
// }   
// console.log(b);         //string concatenation

// function countElmnt(word,c){     
//     var count=0
//     for(i of word){
//         if(i==c){
//             count++
//         }
//     }
//     return count

// }
// console.log(countElmnt("Luminar Technolab","a"));


// function removeELmnt(string,letter){
//     remove=""
//     for(i of string){
//         if(i!=letter){
//             remove=remove+i
  
//         }
//     }
//         return remove

// }

// console.log(removeELmnt("luminar technolab","a"));

// function middle(string){
//   var mid= Math.floor(string.length/2)
//   return string[mid]
// }
// console.log(middle("abcd"));


//1- write a function to find number of vowels in a string  apple-2 luminar technolab- 6
//2- write a function to remove vowels from a string


// countOfV=s=>{           //number of vowwels in a string
//     count=0
//     for(i of s){
//         if(i=='a' ||i=='e' ||i=='i' ||i=='o' ||i=='u'){
//             count++
//         }
//     }
//     return count

// }
// console.log(countOfV("apple"));


// removeVowels=s=>{                //to remobe vowels from a string
//     b=""
//     for(i of s){
//         if(i=='a' || i=='e' || i=='i' ||i =='o' ||i=='u'){
//             continue
//         }
//         b=b+i
        
//     }
//     return b

// }
// console.log(removeVowels("apple"));

//write a function to find the count of vowels and consonants in a string

// VowelsConso=s=>{
//     count=0
//     for(i of s){
//         if(i=='a' ||i=='e' ||i=='i' ||i=='o' ||i=='u'){
//             count++
//         }
//     }
//     console.log("Count of Vowels",count);
//     console.log("Count of Consonants",s.length-count);
// }
// VowelsConso("luminar technolab")



//STRINGS METHODS
// s="Hello"
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.startsWith("He")); //checks if starting letter of string is true or false
// console.log(s.endsWith("He"));  //checks if ending letter of string is true or false



//WRITE A FUNCTION TO VALIDATE INDIAN MOBILE NUMBER

// Valid=s=>{
//         if(s.startsWith("+91") && s.length==13){
//             console.log("Valid Number");
//         }
//         else{
//             console.log("invalid");
//         }
//     }
// Valid("+919876543210");


// STRING SLICING
s="luminar"
console.log(s.slice(0,3));
console.log(s.slice(5,));
console.log(s.slice(-4,-1));
console.log(s.slice(-3,));


//WRITE A FUNCTION TO REMOVE THE LAST ELEMENT IN A STRING
// last=s=>{
//    return(s.slice(0,-1))
// }
// console.log(last('apple'))

//WRITE A FUNCTION TO ROTATE A STRING
//hello  olhel

// rotate=s=>{
//  return s.slice(-2,)+s.slice(0,-2)             
// }
// console.log(rotate("hello"));




//type conversion functions
//Number() - convert a data to number type
//parseInt() - convert a data into integer type same as Math.floor
// s=parseInt(10.6)
// console.log(s);
// console.log(typeof s);

// n=parseFloat("11.6")     //convert string type float value into number type float value
// console.log(n);
// console.log(typeof n);

// s=String(10)\
// console.log(s);
// console.log(typeof s);

// s=String(true)
// console.log(s);
// console.log(typeof s)

s=Boolean("abcd")
 console.log(s);
 console.log(typeof s)

 console.log(10+"10"); 
 console.log(typeof (10+"10"));                           //doesnt get added and concatenation takes place and then 1010 gets converted into a string