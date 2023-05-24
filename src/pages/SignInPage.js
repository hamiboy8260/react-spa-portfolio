import { useState } from "react";

export default function SignInPage({ setAuth }) {
  const [errorMessage, setErrorMessage] = useState("");

  function signIn(event) {
    event.preventDefault();
    const mail = event.target.mail.value; // mail value from input field in sign in form
    const password = event.target.password.value; // password value from inout field in sign in form

    if (mail === "admin@mail.dk" && password === "admin1234") {
      setAuth(true);
      localStorage.setItem("isAuth", true); // set localStorage
    } else {
      setErrorMessage("Wrong mail or password.");
    }
  }
  return (
    <section className="page">
      <h1 style={{ marginTop: "150px" }}>Sign In</h1>
      <form onSubmit={signIn}>
        <input type="email" name="mail" placeholder="Type your mail" />
        <input
          type="password"
          name="password"
          placeholder="Type your password"
        />
        <p className="text-error">{errorMessage}</p>
        <button>Sign in</button>
      </form>
    </section>
  );
}
