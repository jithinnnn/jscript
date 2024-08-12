// function removeSymbols(s){
//     var b=""
//     for(i of s){
//         if(i!='!' && i!='?' && i!='.' && i!="-" && i!=',') {
//             b=b+i
//         }
//     }
//     return b;
// }
// console.log(removeSymbols("So the next time you’d like to really unplug and rewind?, consider one of these beautiful car-free places around the world, from Kenya to Kyoto!. Just remember to pack comfortable shoes."));

// findVowels=s=>{
//     b=""
//     for(i of s){
//         if(i == "a" || i == "e" || i == "i" || i == "o" || i == "u"){
//             b+=i
//         } 
//     }
//     console.log("First vowel ",b[0]);
//     console.log("Last vowel ",b[b.length-1]);
// }
// findVowels("Luminar")

// findVowels("luminar technolab")

// countOf_0=(num)=>{
// count=0
// var s=String(num)
// for(i of s){
//     if(i=='0'){
//         count++
//     }
// }
// return count
// }
// console.log(countOf_0(10010));

// commonElements=(s1,s2)=>{
//     b=""
//     for(i of s1.toLowerCase()){
//         for(j of s2.toLowerCase()){
//             if(i==j){
//                 b=b+i
//             }
//         }
//     }
//     return b
// }
// console.log(commonElements("Education","Menu"));

// numofWords=s=>{
//     var count=1
//     if(s==''){
//       count=0;
//     }
//    else{
//     for(i of s){
//         if(i==" "){
//             count++
//         }
//     }
//    }
//    return count
// }
//  console.log(numofWords("The Higashiyama-ku ward is one of the best places to experience traditional Kyoto, from the Kiyomizudera and Yasaka Shrines to the Gion geisha district"));

// findVowels=s=>{
//     newstr=""
//     for(i of s){
//         if(i == "a" || i == "e" || i == "i" || i == "o" || i == "u"){
//             newstr+=i
//         } 
//     }
//     console.log("First vowel ",newstr[0]);
//     console.log("Last vowel ",newstr[newstr.length-1]);
// }
// commonElements=(s1,s2)=>{
//     b=""
//     b1=s1.toLowerCase()
//     b2=s2.toLowerCase()
//     for(i of b1){
//         for(j of b2){
//             if(i==j){
//                 b=b+i
//             }
//         }
//     }
//     return b
// }
// console.log(commonElements("Education","Menu"));