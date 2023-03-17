// React Router Dom Imports:
import { useLoaderData } from "react-router-dom";

// Libraries:
import { toast } from "react-toastify";

// Components:
import Intro from "../components/Intro";

// Helper Functions:
import { fetchData } from "../helpers";

// Loader:
export function dashboardLoader() {
  const userName = fetchData("userName");

  return { userName };
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
  const { userName } = useLoaderData();

  return <>{userName ? <p>{userName}</p> : <Intro />}</>;
}
