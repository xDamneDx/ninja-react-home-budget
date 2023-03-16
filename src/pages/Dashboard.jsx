// React Router Dom Imports:
import { useLoaderData } from "react-router-dom";

// Helper Functions:
import { fetchData } from "../helpers";

// Loader:
export function dashboardLoader() {
  const userName = fetchData("username");

  return { userName };
}

export default function Dashboard() {
  const { userName } = useLoaderData();

  return (
    <div>
      <h1>{userName}</h1>
      Dashboard
    </div>
  );
}
