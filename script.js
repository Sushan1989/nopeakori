const products = [
    { id: 1, name: 'Product 1', price: 10.00, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 20.00, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 30.00, image: 'https://via.placeholder.com/150' }
];

let cart = [];

// Render products on product list page
function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
}

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Render cart items
function renderCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>$${item.price.toFixed(2)}</p>
        `;
        cartItemsDiv.appendChild(cartItemDiv);
        total += item.price;
    });

    const totalDiv = document.getElementById('total-price');
    totalDiv.textContent = total.toFixed(2);
}

// Handle checkout
document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('payment-method').value;

    alert(`Thank you for your purchase, ${name}!`);
    // Here you'd integrate payment gateway and send the order info to your backend
    cart = []; // Clear cart after purchase
    updateCartCount();
});
