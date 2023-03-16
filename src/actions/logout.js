// React Router Dom Imports:
import { redirect } from "react-router-dom";

// Helpers:
import { deleteItem } from "../helpers";

export async function logoutAction() {
  // delete the user
  deleteItem({ key: "userName" });

  // return redirect
  return redirect("/");
}
