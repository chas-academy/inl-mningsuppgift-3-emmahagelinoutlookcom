

const productInput = document.getElementById("productInput");
const priceInput = document.getElementById("priceInput");
const addButton = document.getElementById("addButton");
const cartList = document.getElementById("cartList");
const totalPrice = document.getElementById("totalPrice");

let cart = []

function addToCart() {
    const productName = productInput.value;
    const productPrice = Number(priceInput.value);

    const newProduct = {
        productName: productName,
        productPrice: productPrice,
        quantity: 1
    };

    let itemExist = false;

    for (let item of cart) {
        if (item.productName === productName) {
            item.quantity++;
            itemExist = true;
            break;
        }
    }

    if (!itemExist) {
        cart.push(newProduct);
    }

    productInput.value = "";
    priceInput.value = "";

    renderCart();
}

function renderCart () {
    cartList.innerHTML = ""

    for (let item of cart) {
        const li = document.createElement("li");
        li.textContent = `${item.productName} - ${item.productPrice}kr (x${item.quantity})`;
        cartList.appendChild(li);
    }
}

addButton.addEventListener("click", () => {
    addToCart();
});