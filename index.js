const expensesList = document.getElementById("expensesList");

function handleFormSubmit(event) {
  event.preventDefault();

  //   console.log(event.target);
  const expenseAmount = document.getElementById("expenseAmount").value;
  console.log(expenseAmount);
  const expenseDescription =
    document.getElementById("expenseDescription").value;
  console.log(expenseDescription);
  const expenseCategory = document.getElementById("expenseCategory").value;
  console.log(expenseCategory);

  const expenses = {
    amount: expenseAmount,
    description: expenseDescription,
    category: expenseCategory,
  };

  console.log(expenses);
  localStorage.setItem("Expenses", JSON.stringify(expenses));
  //   console.log(JSON.parse(localStorage.getItem("Expenses")));

  const li = document.createElement("li");
  li.textContent = `${expenses.amount} - ${expenses.category} - ${expenses.description}`;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete Expense";
  const editButton = document.createElement("button");
  editButton.textContent = "Edit Expense";
  li.appendChild(deleteButton);
  li.appendChild(editButton);

  deleteButton.addEventListener("click", deleteExpense);
  editButton.addEventListener("click", () => editExpense(expenses, li));
  expensesList.appendChild(li);

  document.getElementById("expenseAmount").value = "";
  document.getElementById("expenseDescription").value = "";
  document.getElementById("expenseCategory").value = "";
}

function deleteExpense(event) {
  const li = event.target.parentElement;
  li.remove();
  localStorage.removeItem("Expenses");
}

function editExpense(expenses, li) {
  document.getElementById("expenseAmount").value = expenses.amount;
  document.getElementById("expenseDescription").value = expenses.description;
  document.getElementById("expenseCategory").value = expenses.category;

  li.remove();
}
