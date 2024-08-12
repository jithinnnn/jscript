// products=[
//     [1,'hide&seek',60,4],
//     [3,'oreo',30,15],
//     [2,'parle-g',10,60],
//     [4,'moms-magic',20,34],
//     [5,'tiger',10,40],
// ]
// console.log(products);

//find price of oreo

// console.log(products.filter(i=>i[1]=="oreo")[0][2]);  //find price of oreo
// console.log(products.find(i=>i[1]=='oreo')[2]);       // same thing
// console.log(products.filter(i=>i[2]<=20).map(i=>i[1]));  //biscuit of price 20 or lesser
// console.log(products.filter(i=>i[3]>20).map(i=>i[1]));  //find name of products with 20 greater stock value
// console.log(products.sort((a,b)=>(a[3]-b[3]))[0][1]);  //find item with lowest stoke value
// console.log(products.sort((a,b)=>(b[2]-a[2]))[0][3]); //find stock value of product with highest price
//   console.log(products.find(i=>i[1]=='tiger')[0]);   //find id of tiger 
//   console.log(products.sort((a,b)=>a[0]-b[0]));    //re-arrawnge products according to their id
// console.log(products.reduceRight((a,b)=>a[2]<b[2]?a:b));  //product w lowest price (reduceRight choose the first one to satisfy the condition)



//  console.log(products.reduce((a,b)=>a[3]<b[3]?a:b)[1]);         //find item with lowest stoke value using reduce
//  console.log(products.reduce((a,b)=>a[2]>b[2]?a:b)[3]);         //find stock value of product with highest price with reduce
//  console.log(products.map(i=>i[2]).reduce((a,b)=>a+b))

//[ no,district,+ve cases,death rate,cured rate,1st dose vaccine,2nd dose vaccine]
covid_data = [
    [1,'Ernakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]

]

console.log(covid_data.reduce((a,b)=>a[2]>b[2]?a:b)[1]); //district having Highest +ve case?
console.log(covid_data.reduce((a,b)=>a[5]>b[5]?a:b)[1]);    //district having Highest 1st dose vaccine?
console.log(covid_data.reduce((a,b)=>a[3]>b[3]?b:a)[1]);    //district having lowest death rate?
console.log(covid_data.sort((a,b)=>b[2]-a[2]));             // sort data with +ve case in descending order?
console.log(covid_data.filter(a=>a[2]>15000?a:"").map(i=>i[1]));    //.list district with +ve cases > 15000?
console.log(covid_data.sort((a,b)=>a[5]-b[5])); //sort data with 1st dose vaccine ?
console.log(covid_data.find(a=>a[1]=='Thrissur')); //Print Thrissur details?
console.log(covid_data.map(a=>a[2]).reduce((a,b)=>a+b)); // Print total number of positive cases?
console.log(covid_data.map(a=>a[4]).reduce((a,b)=>a+b)); //Print total number of cured cases?
console.log(covid_data.find(a=>a[1]=='Kottayam')[3]) //Find death rate of kottayam


