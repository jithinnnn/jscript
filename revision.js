products=[
    [1,'hide&seek',60,4],
    [3,'oreo',30,15],
    [2,'parle-g',10,60],
    [4,'moms-magic',20,34],
    [5,'tiger',10,40],
]
//price of oreo
console.log(products.find(i=>i[1]=='oreo')[2]);
//biscuit of price 20 or lesser
console.log(products.filter(i=>i[2]<=20).map(i=>i[1]));
//find name of products with 20 greater stock value
console.log(products.filter(i=>i[3]>=20).map(i=>i[1]));
//find item with lowest stoke value
console.log(products.reduce((a,b)=>a[2]>b[2]?a:b)[1]);
