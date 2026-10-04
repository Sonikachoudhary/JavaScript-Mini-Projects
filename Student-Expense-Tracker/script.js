let expenseName = document.getElementById("expenseName");
let expenseAmount = document.getElementById("expenseAmount");
let expenseCategory = document.getElementById("expenseCategory");
let addExpense = document.getElementById("addExpense");

let expenseList = document.getElementById("expenseList");
let total = document.getElementById("total");

let totalAmount = 0;


addExpense.addEventListener("click", function () {

    let name = expenseName.value;
    let amount = Number(expenseAmount.value);
    let category = expenseCategory.value;

    // Check if details are valid
    if (name === "" || amount <= 0) {
        alert("Please enter valid expense details.");
        return;
    }

    // Create expense list item
    let li = document.createElement("li");

    li.textContent = `${name} - ₹${amount} (${category})`;

    // Create delete button
    let deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    // Delete expense
    deleteButton.addEventListener("click", function () {

        totalAmount = totalAmount - amount;
        total.textContent = totalAmount;

        li.remove();
    });

    li.appendChild(deleteButton);
    expenseList.appendChild(li);

    // Update total
    totalAmount = totalAmount + amount;
    total.textContent = totalAmount;

    // Clear input fields
    expenseName.value = "";
    expenseAmount.value = "";
});