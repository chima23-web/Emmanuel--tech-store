const products = ["Headset","Snicker","Phone","Charger","Earpod"];
const productList = 
document.querySelector(".product-list");
function displayProducts() {
    productList.innerHTML = "";
products.forEach(function(product)  {
 productList.innerHTML += `<p>${product}</p>`;
});
}
displayProducts();
const addProductButton = 
document.getElementById("add-product-btn");
addProductButton.addEventListener("click", function() {
 products.push("Keyboard");
 displayProducts();
});

