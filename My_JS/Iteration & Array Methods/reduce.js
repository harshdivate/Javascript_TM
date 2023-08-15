const cart=[
    {id :1,name:'Product 1',price:120},
    {id :2,name:'Product 2',price:1220},
    {id :3,name:'Product 3',price:10},

];


const cartSum=cart.reduce(function (acc,product){
    return acc+product.price;
},0);

console.log(cartSum);