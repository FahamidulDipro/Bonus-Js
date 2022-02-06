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

function searchProducts(product, searchText) {
    let items = [];
    for (const product of products) {
        if (product.name.includes(searchText)) items.push(product);

    }
    return items;
}
console.log(searchProducts(products, 'i'));