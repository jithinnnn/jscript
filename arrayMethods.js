a=[1,2,3,4,5,6]

// //map
// console.log(a.map(i=>i**2)); //every element has unique output elements so we use map
// console.log(a.filter(i=>i%2==0));


// a=[4,7,2,9]
// //[3,8,1,10]

// console.log(a.map(i=>i>5?i+1:i-1));


// a=[1,2,3,4,5,6]
// console.log(a.find(i=>i%2==0));




//2. find sum of even numbers in a
// a=[9,8,7,6,5,4,3,2,1]
// console.log(a.filter(i=>i%2==0?i:"").reduce((a,b)=>a+b));

courses=[
// id,course,fee,seats
    [1,"MEAN",50000,45],
    [2,"MERN",60000,25],
    [3,"Python",40000,60],
    [4,"Data Science",60000,25],
    [5,"Testing",30000,45],
    [6,"ML",50000,15]
]
// console.log(courses.map(i=>i[1]).length);
// console.log(courses.reduce((a,b)=>a[2]<b[2]?a:b)[1]);
// console.log(courses.find(i=>i[1]=='Python')[3]);
// console.log(courses.filter(i=>i[2]>=20000 && i[2]<=40000 ).map(i=>i[1]));
// // console.log(courses.reduce((a,b)=>a[3]>b[3]?a:b)[1]);
// // console.log(courses.map(i=>i[2]).reduce((a,b)=>a+b));
// // console.log(courses.map(i=>i[1]));
// // console.log(courses.find(i=>i[1]=='ML')[2]);
// console.log(courses.filter(i=>i[1]=='MEAN' || i[1]=='MERN').map(i=>i[2]).reduce((a,b)=>a+b));


// a=[9,3,4,5]
// console.log(a.some(i=>i%2==0)); //example of some 
// console.log(a.includes(3)); // example of includes
// a.forEach(i=>console.log(i**3)); // example of foreach

// console.log(courses.some(i=>i[2]<=30000)); //checking if a person can do a course for 30k [ SOME ONLY RETURNS TRUE OR FALSE TO SEE IF THE CONDITION IS SATISFIED OR NOT]
// courses.forEach(i=>console.log(i[2])) //displaying the fees of all the courses with foreach


a=[
    [34,65],
    [5,66],
    [11,2]                                  //CANNOT APPLY FILTER
]

console.log(a.flat().filter(i=>i>10));  //FLAT CONVERTS NESTED ARRAY TO ARRAY




