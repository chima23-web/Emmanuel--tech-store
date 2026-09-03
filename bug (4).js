function calculateProductTotal(product, brand, price, quantity,deliveryFee) {
    const total = price * quantity;
    const productTotal = total + deliveryFee;

    return {
        product,
        brand,
        total: productTotal
    };
}

const productList = document.querySelector(".product-List");

const result1 = calculateProductTotal(
    "Laptop",
    "HP",
    25000,
    4,
    1000
);

productList.innerHTML += `
    <p>${result1.product} - ${result1.brand} - ₦${result1.total}</p>
`;


const result2 = calculateProductTotal(
    "Phone",
    "iPhone",
    500000,
    3,
    1000
);

productList.innerHTML += `
    <p>${result2.product} - ${result2.brand} - ₦${result2.total}</p>
`;


const result3 = calculateProductTotal(
    "Watch",
    "Rolex",
    100000,
    6,
    1000
);

productList.innerHTML += `
    <p>${result3.product} - ${result3.brand} - ₦${result3.total}</p>
`;
const shopButton = 
document.querySelector(".shop-btn");
const message = document.querySelector(".store-message");

shopButton.addEventListener("click", function() {
    console.log("Button was clicked ");
    message.textContent = "Welcome to our store! Check out our latest products.";
});
const laptopQuantity = document.getElementById("laptop-quantity");

const laptopBtn = document.getElementById("laptop-btn");

const laptopResult = document.getElementById("laptop-result");
laptopBtn.addEventListener("click", function() {

    const quantity = Number(laptopQuantity.value);

    const result = calculateProductTotal(
        "Laptop",
        "HP",
        25000,
        quantity,
        1000
    );

    laptopResult.textContent =
        `Product: ${result.product} - Brand: ${result.brand} - Total: ₦${result.total}`;
});
const phoneQuantity = document.getElementById("phone-quantity");

const phoneBtn = document.getElementById("phone-btn");

const phoneResult = document.getElementById("phone-result");
phoneBtn.addEventListener("click", function() {

    const quantity = Number(phoneQuantity.value);

    const result = calculateProductTotal(
        "Phone",
        "iPhone",
        450000,
        quantity,
        1000
    );

    phoneResult.textContent =
        `Product: ${result.product} - Brand: ${result.brand} - Total: ₦${result.total}`;
});
const watchQuantity = document.getElementById("watch-quantity");

const watchBtn = document.getElementById("watch-btn");

const watchResult = document.getElementById("watch-result");
watchBtn.addEventListener("click", function() {

    const quantity = Number(watchQuantity.value);

    const result = calculateProductTotal(
        "Watch",
        "Rolex",
        150000,
        quantity,
        1000
    );
    watchResult.textContent =
        `Product: ${result.product} - Brand: ${result.brand} - Total: ₦${result.total}`;
});


    
    

    