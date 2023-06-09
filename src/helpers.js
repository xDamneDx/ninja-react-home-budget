// Dev only fetching simulator:
export const waait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 2000));

// Random color:
const generateRandomColor = () => {
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;

  return `${existingBudgetLength * 34} 65% 50%`;
};

// Local Storage:
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// Get All Items From Local Storage:
export const getAllMatchingItems = ({ category, key, value }) => {
  const data = fetchData(category) ?? [];

  return data.filter((item) => item[key] === value);
};

// Create budget:
export const createBudget = ({ name, amount }) => {
  const newBudget = {
    id: crypto.randomUUID(),
    name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(),
  };

  const existingBudgets = fetchData("budgets") ?? [];

  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newBudget])
  );
};

// Create expense:
export const createExpense = ({ name, amount, budgetId }) => {
  const newExpense = {
    id: crypto.randomUUID(),
    name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId,
  };

  const existingExpenses = fetchData("expenses") ?? [];

  return localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpenses, newExpense])
  );
};

// Delete Item
export const deleteItem = ({ key, id }) => {
  const existingData = fetchData(key);

  if (id) {
    const newData = existingData.filter((item) => item.id !== id);

    return localStorage.setItem(key, JSON.stringify(newData));
  }

  return localStorage.removeItem(key);
};

// Total Spent by Budget:
export const calculateSpentByBudget = (budgetId) => {
  const expenses = fetchData("expenses") ?? [];
  const budgetSpent = expenses.reduce((acc, expense) => {
    // Check if expense.budgetId === budgetId i passed in:
    if (expense.budgetId !== budgetId) return acc;

    // Add the current amount to my total:
    return (acc += expense.amount);
  }, 0);

  return budgetSpent;
};

// FORMATTING
// Format Date:
export const formatDateToLocaleString = (epoch) =>
  new Date(epoch).toLocaleDateString();

// Format Percentages:
export const formatPercentage = (amount) => {
  return amount.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });
};

// Format Currency:
export const formatCurrency = (amount) => {
  return amount.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
  });
};
