// React Router Dom imports:
import { useLoaderData } from "react-router-dom";

// Libraries:
import { toast } from "react-toastify";

// Components:
import Table from "../components/Table";

// Helper Functions:
import { fetchData, deleteItem } from "../helpers";

// Loader:
export function expensesLoader() {
  const expenses = fetchData("expenses");

  return { expenses };
}

// Action:
export async function expensesAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "deleteExpense") {
    try {
      deleteItem({
        key: "expenses",
        id: values.expenseId,
      });

      return toast.success(`Expense deleted!`);
    } catch (error) {
      console.log({ error });
      throw new Error("There was a problem deleting your expense.");
    }
  }
}

export default function ExpensesPage() {
  const { expenses } = useLoaderData();

  return (
    <div className="grid-lg">
      <h1>All Expenses</h1>
      {expenses && expenses.length > 0 ? (
        <div className="grid-md">
          <h2>
            Recent Expenses <small>({expenses.length} total)</small>
          </h2>
          <Table expenses={expenses} />
        </div>
      ) : (
        <p>No Expenses To Show...</p>
      )}
    </div>
  );
}
