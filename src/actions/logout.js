// React Router Dom Imports:
import { redirect } from "react-router-dom";

// Libraries:
import { toast } from "react-toastify";

// Helpers:
import { deleteItem } from "../helpers";

export async function logoutAction() {
  // delete the user
  deleteItem({ key: "userName" });
  toast.success("You've deleted your account!");

  // return redirect
  return redirect("/");
}
