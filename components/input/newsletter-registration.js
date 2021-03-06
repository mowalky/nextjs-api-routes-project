import { useRef } from "react";

import classes from "./newsletter-registration.module.css";

function NewsletterRegistration() {
  const InputUserEmail = useRef();

  function registrationHandler(event) {
    event.preventDefault();
    const EnteredEmail = InputUserEmail.current.value;
    fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: EnteredEmail,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data.message));
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={InputUserEmail}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
