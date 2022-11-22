import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Newsletter = ({ isWide }) => {
  const [loading, setLoading] = React.useState(false);
  const [response, setResponse] = React.useState("");
  const [formState, setFormState] = React.useState({ isValidated: false });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;

    fetch("/.netlify/functions/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formState,
      }),
    })
      .then((data) => {
        setLoading(false);
        if (data.status === 400) {
          setResponse("You are already subscribed.");
        } else {
          setResponse("Please check your email to confirm your subscription!");
        }
      })
      .catch(() => {
        setLoading(false);
        setResponse("Error, something went wrong.");
      });
  };

  if (response) {
    return (
      <div className="content">
        <p>{response}</p>
      </div>
    );
  }

  return (
    <div className="content">
      <div className={isWide ? "lead-preview-wide" : "lead-preview"}>
        <StaticImage
          alt="logo"
          className=""
          src="../img/lead_preview.png"
          objectFit="contain"
        />
      </div>
      <p>
        Get the{" "}
        <span className="has-text-weight-bold">
          Six Habits for Conquering Anxiety and Depression
        </span>{" "}
        for <span className="has-text-weight-bold">FREE</span> by subscribing to
        the newsletter!
      </p>
      <section>
        <form
          name="email"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="email" />
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </div>
          <div className="field">
            <div className="control has-icons-left">
              <input
                disabled={loading}
                className="input"
                type={"text"}
                name={"name"}
                onChange={handleChange}
                id={"name"}
                required={true}
                placeholder="Name"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left">
              <input
                disabled={loading}
                className="input"
                type={"email"}
                name={"email"}
                onChange={handleChange}
                id={"email"}
                required={true}
                placeholder="Email"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <button
              disabled={loading}
              className="button email-button"
              type="submit"
            >
              {loading ? "Subscribing" : "Sign Up"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Newsletter;
