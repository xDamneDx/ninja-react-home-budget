// React Router Dom Imports:
import { useLoaderData } from "react-router-dom";

// Libraries:
import { toast } from "react-toastify";

// Components:
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";

// Helper Functions:
import { fetchData } from "../helpers";

// Loader:
export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");

  return { userName, budgets };
}

// Action:
export async function dashboardAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName));

    return toast.success(`Welcome, ${formData.userName}`);
  } catch (error) {
    throw new Error("THere was a problem creating your account");
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
