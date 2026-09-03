const products = [
    { name: "Phone", price: 400000, stock: 5 },
    { name: "Laptop", price: 300000, stock: 3 },
    { name: "Headset", price: 20000, stock: 6 },
    { name: "Charger", price: 10000, stock: 7 }
];
const result = 
document.getElementById("result");
const showAllButton = 
document.getElementById("show-all");
showAllButton.addEventListener("click", function() {
    products.forEach(function(product) {
        result.innerHTML += `<p>${product.name} - #${product.price} - Stock: ${product.stock}</p>`;
    });
});
const affordableButton = 
document.getElementById("affordable");
affordableButton.addEventListener("click", function() {
const affordableProducts = 
products.filter(function(product) {
return product.price < 100000;
});
affordableProducts.forEach(function(product) {
result.innerHTML += `<p>${product.name} - #${product.price}</p>`;
});
});
const namesButton =
document.getElementById("names");
namesButton.addEventListener("click",function() {
const productNames = 
products.map(function(product) {
    return product.name;
});
productNames.forEach(function(name) {
    result.innerHTML += `<p>${name}</p>`;
});
});
const findProductButton =
document.getElementById("find-product");
findProductButton.addEventListener("click", function() {
const product =
products.find(function(product) {
    return product.name === "Phone";
});
result.innerHTML += `<p>${product.name} - #${product.price}</p>`;
});
const availableProductButton = 
document.getElementById("available");
availableProductButton.addEventListener("click",function() {
const product = 
products.find(function(product) {
    return product.price < 100000 && product.stock > 0;
});
result.innerHTML += `<p>${product.name} - #${product.price}- Stock: ${product.stock}</p>`;
});