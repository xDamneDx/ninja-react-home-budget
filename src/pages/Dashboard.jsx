// React Router Dom Imports:
import { useLoaderData } from "react-router-dom";

// Libraries:
import { toast, ToastContainer } from "react-toastify";

// Components:
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";

// Helper Functions:
import { createBudget, fetchData } from "../helpers";

// Loader:
export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");

  return { userName, budgets };
}

// Action:
export async function dashboardAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // New user submission:
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));

      return toast.success(`Welcome, ${values.userName}`);
    } catch (error) {
      throw new Error("THere was a problem creating your account");
    }
  }

  if (_action === "createBudget") {
    try {
      // Create budget:
      createBudget({ name: values.newBudget, amount: values.newBudgetAmount });

      return toast.success("Budget created!");
    } catch (error) {
      throw new Error("There was a problem creating your budget.");
    }
  }
}

export default function Dashboard() {
  const { userName, budgets } = useLoaderData();

  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {/* {budgets ? () : ()} */}
            <div className="grind-lg">
              <div className="flex-lg">
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
}
