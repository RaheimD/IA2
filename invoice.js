document.addEventListener("DOMContentLoaded", function() {
    const selectedProductsList = document.getElementById('selected-products');
    const totalCostElement = document.getElementById('total-cost');
    const taxElement = document.getElementById('tax');
    const totalWithTaxElement = document.getElementById('final-total');

    // Retrieve the selected products and total from localStorage
    const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts'));
    let total = parseFloat(localStorage.getItem('total'));

    // Ensure total is a valid number (not NaN)
    if (isNaN(total)) {
        total = 0;
    }

    // Calculate tax (7%)
    const tax = total * 0.07;
    const totalWithTax = total + tax;

    // Check if there are selected products
    if (selectedProducts && selectedProducts.length > 0) {
        let productHTML = '';

        // Loop through selected products and display them in a list
        selectedProducts.forEach(product => {
            productHTML += `<li>${product.label} - $${product.price}</li>`;
        });

        selectedProductsList.innerHTML = productHTML;
        totalCostElement.textContent = "$" + total.toFixed(2);
        taxElement.textContent = "$" + tax.toFixed(2);
        totalWithTaxElement.textContent = "$" + totalWithTax.toFixed(2);

        // Store the tax and total with tax in localStorage for later use (if needed)
        localStorage.setItem('tax', tax);
        localStorage.setItem('totalWithTax', totalWithTax);
    } else {
        selectedProductsList.innerHTML = '<li>No products selected.</li>';
        totalCostElement.textContent = "$0.00";
        taxElement.textContent = "$0.00";
        totalWithTaxElement.textContent = "$0.00";
    }
});

function confirmPurchase() {
    alert("Thanks for shopping at Urban Soles!");

    // Clear the localStorage data after purchase
    localStorage.removeItem('selectedProducts');
    localStorage.removeItem('total');
    localStorage.removeItem('tax');
    localStorage.removeItem('totalWithTax');
}
