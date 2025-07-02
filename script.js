document.addEventListener('DOMContentLoaded', () => {
    // Set current year in the footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Optional: Basic Add to Cart functionality (frontend only, no actual cart storage)
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.dataset.product;
            const productPrice = button.dataset.price;

            alert(`"${productName}" (Ksh ${productPrice}) has been added to a hypothetical cart!`);
            // In a real application, you would:
            // 1. Update a cart icon count
            // 2. Store item in localStorage/sessionStorage
            // 3. Send data to a backend API for a persistent cart
            console.log(`Added: ${productName}, Price: ${productPrice}`);
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});