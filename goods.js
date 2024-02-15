let products = null;
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        console.log(products);
        addDataToHTML();
    })

let listProduct = document.querySelector('.listProduct');
function addDataToHTML() {
    products.forEach(product => {
        let newProduct = document.createElement('a');
        newProduct.style.color = 'unset';
        newProduct.style.textDecoration = 'none';
        newProduct.href = 'checkout.html?id=' + product.id;
        newProduct.classList.add('item');
        newProduct.innerHTML = `
<img src="${product.image}">
<h2>${product.name}</h2>
<div class="price">${'€' + product.price}</div>
`;

        listProduct.appendChild(newProduct);
    })
}