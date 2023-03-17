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

//  Create budget:
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

// Delete Item
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};
