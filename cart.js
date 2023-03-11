const addProduct = () => {
    const productField = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = productQuantity.value;
    productField.value = '';
    productQuantity.value = '';

    displayProduct(product, quantity);
    console.log(product, quantity);
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = ` ${product}: ${quantity} `;
    ul.appendChild(li);

}