// React Router Dom Imports:
import { Outlet, useLoaderData } from "react-router-dom";

// Assets:
import wave from "../assets/wave.svg";

// Components:
import Nav from "../components/Nav";

// Helper Functions:
import { fetchData } from "../helpers";

// Loader:
export function mainLoader() {
  const userName = fetchData("userName");

  return { userName };
}

export default function Main() {
  const { userName } = useLoaderData();

  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="" />
    </div>
  );
}
