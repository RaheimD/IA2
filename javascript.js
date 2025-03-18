let attempts = 3;

function login() {
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    if (!username || !password) {
        alert('Both fields are required.'); // Show an alert if fields are empty
    } 
    else {
        if (attempts > 0) {
            password_check(username, password);
        }
        else {
            window.alert("Too many attempts. Try again later.");
        }
    }
}

function password_check(user_name, pwd) {
    var user = user_name;
    var password = pwd;
    const users = [
        {User_name: "Raheim", Password: "admin123"},
        {User_name: "Sirisha", Password: "Badiki123"},
        {User_name: "Anuli", Password: "UTECH"},
    ];
    
    for (let x = 0; x < users.length; x++) {
        if (users[x].User_name === user && users[x].Password === password) {
            window.location.href = "product_page.html"; 
            return true;
        }
    }  
    attempts -= 1;
    window.alert("Username or Password is incorrect.");
    return false;
};

const products = [
    { id: "item1", name: "Desert Trek Black", price: 175 },
    { id: "item2", name: "Desert Trek Brown", price: 175 },
    { id: "item3", name: "Desert Trek Sand Suede", price: 190 },
    { id: "item4", name: "Wallabee Black Suede", price: 175 },
    { id: "item5", name: "Wallabee Sand Suede", price: 175 },
    { id: "item6", name: "Wallabee Boot Black", price: 190 },
    { id: "item7", name: "Wallabee Boot Blue", price: 190 },
    { id: "item8", name: "Wallabee Red", price: 200 },
    { id: "item9", name: "Wallabee Boot Powder Blue", price: 200 },
    { id: "item10", name: "Desert Boot Black", price: 150 },
    { id: "item11", name: "Desert Boot Bees Wax", price: 150 },
    { id: "item12", name: "Desert Boot Sand Suede", price: 150 }
];

function confirmSelection() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let selectedProducts = [];
    let total = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedProducts.push({
                id: checkbox.id,
                price: parseFloat(checkbox.value),
                label: checkbox.nextElementSibling.textContent // Label for display
            });
            total += parseFloat(checkbox.value);
        }
    });

    // Calculate tax (7%)
    const tax = total * 0.07;
    const totalWithTax = total + tax;

    // Store the selected products and total in localStorage
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
    localStorage.setItem('total', total);
    localStorage.setItem('tax', tax); // Store tax
    localStorage.setItem('totalWithTax', totalWithTax); // Store total with tax

    window.location.href = 'invoice.html';
}
