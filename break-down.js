const products = [{
        name: 'iphone 14',
        price: 70000
    },
    {
        name: 'Samsung Galaxy',
        price: 60000
    },
    {
        name: 'Dell',
        price: 50000
    },
    {
        name: 'Walton',
        price: 8000
    },
    {
        name: 'Asus',
        price: 35000
    },
    {
        name: 'Lenovo',
        price: 40000
    },
    {
        name: 'Apple watch',
        price: 10000
    },
    {
        name: 'One plus',
        price: 30000
    }


];


// for (const product of products) {
//     if (product.price < 10000) break;
//     console.log(product);
// }
// console.log('This is it');

for (const product of products) {
    if (product.price < 10000) continue;
    console.log(product);
}