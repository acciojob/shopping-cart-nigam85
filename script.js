// script.js
document.addEventListener("DOMContentLoaded", function () {
    const itemNameInput = document.getElementById("item-name-input");
    const itemPriceInput = document.getElementById("item-price-input");
    const addButton = document.getElementById("add");
    const cartItems = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("total");

    addButton.addEventListener("click", function () {
        // Get item name and price from inputs
        const itemName = itemNameInput.value.trim();
        const itemPrice = parseFloat(itemPriceInput.value);

        // Check for valid inputs
        if (itemName !== "" && !isNaN(itemPrice) && itemPrice > 0) {
            // Create a new row for the shopping cart
            const newRow = document.createElement("tr");

            // Create cells for item name and price
            const itemNameCell = document.createElement("td");
            const itemPriceCell = document.createElement("td");

            // Set the cell values
            itemNameCell.textContent = itemName;
            itemPriceCell.textContent = `$${itemPrice.toFixed(2)}`;

            // Append cells to the new row
            newRow.appendChild(itemNameCell);
            newRow.appendChild(itemPriceCell);

            // Append the new row to the cart
            cartItems.appendChild(newRow);

            // Clear input fields
            itemNameInput.value = "";
            itemPriceInput.value = "";

            // Calculate and update the total
            updateTotal();
        }
    });

    function updateTotal() {
        const priceCells = document.querySelectorAll("#cart-items td:nth-child(2)");
        let total = 0;

        priceCells.forEach((cell) => {
            total += parseFloat(cell.textContent.replace("$", ""));
        });

        totalDisplay.textContent = `Grand Total: $${total.toFixed(2)}`;
    }
});
