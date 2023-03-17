import { Form } from "react-router-dom";

// Libraries:
import { UserPlusIcon } from "@heroicons/react/24/solid";

// Assets:
import illustration from "../assets/illustration.jpeg";

export default function Intro() {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal Budgeting is the secret to financial freedom. Start your
          journey today.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name?"
            aria-label="Your Name"
            autoComplete="given-name"
          />
          <button type="submit" className="btn btn--dark">
            Create Account
            <UserPlusIcon height={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" />
    </div>
  );
}
