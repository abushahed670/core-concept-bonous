const numbers = [45, 46, 34, 19]
// for (let i= 0; i< numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// for(const number of numbers)[
//     {}
// ]

const products = [
    {id: 1, name: 'xiami phone one', price: 19000},
    {id: 2, name: 'Iphone', price: 119000},
    {id: 3, name: 'mac book air', price: 191000},
    {id: 4, name: 'lenevo yoga laptop 2025', price: 90000},
    {id: 5, name: 'Dell Inspiron laptop', price: 19000},
    {id: 6, name: 'Samsung phone note 7', price: 19000},
    {id: 7, name: 'Phone one phone', price: 19000},
]
// for(const product of products){
//     console.log(product);
// }

function matchedProducts (product, search){
    const matched = []
    for(const product of products){
        // console.log(product.name.includes(search)); ....in short but it gives true and false
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'phone');
console.log(result);