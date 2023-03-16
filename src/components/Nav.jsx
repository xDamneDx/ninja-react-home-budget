// React Router Dom Imports:
import { Form, NavLink } from "react-router-dom";

// Libraries:
import { TrashIcon } from "@heroicons/react/24/solid";

// Assets:
import logomark from "../assets/logomark.svg";

export default function Nav({ userName }) {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to Home">
        <img src={logomark} height={30} alt="" />
        <span>HomeBudget</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="/logout"
          onSubmit={(e) => {
            if (!confirm("Delete user and all data?")) {
              e.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
}
