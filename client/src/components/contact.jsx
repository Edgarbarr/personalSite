import React, { useReducer } from "react";
import FormInput from "./form-input/form-input.component.jsx";
import scrollToTop from "./scrollToTop.jsx";

const axios = require("axios");
function Contact() {
    scrollToTop();
  const [formValues, setFormValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { name: "", email: "", subject: "", message: "" }
  );
  const handleChange = (e) => {
    setFormValues({ [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    var form = document.getElementById("form");
    if (form.checkValidity() === false) {
      form.reportValidity();
    } else {
      const { name, email, subject, message } = formValues;
      axios
        .post("/api/form", {
          name,
          email,
          subject,
          message,
        })
        .then((res) => {
          form.reset();
          toggle(res.data);

        });
    }
  };
  const toggle = (text) => {
    document.getElementById("email_response").className = "display";
    document.getElementById("email_response").textContent = text;
  };
  var { name, message, email, subject } = formValues;
  return (
    <div>
      {/* <div className="container font-white">
        <h1>Find me on:</h1>
        <div className="row social-spacing">
          <div className="margin-10">
            <a href="https://www.linkedin.com/in/edgarbarrientos5">
              <img
                className="social_media"
                src="/assets/https://copyblogger.com/cdn-origin/images/linkedin.png"
              />
            </a>
          </div>
          <div className="margin-10">
            <a href="https://www.facebook.com/edgar.barrientos.9">
              <img
                className="social_media"
                src="/assets/https://stpetersburggroup.com/wp-content/uploads/2018/05/Facebook-Logo-300x300.png"
              />
            </a>
          </div>
          <div className="margin-10">
            <a href="https://github.com/Edgarbarr">
              <img
                className="social_media border-radius"
                src="/assets/https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              />
            </a>
          </div>
        </div>
      </div>
      <br /> */}
      <form id="form" style={{ backgroundColor: "#f3f3f3", height: "fit-content", padding: "5% 3% 2% 3%" }}>
        <h1>Send me an email:</h1>
        <div>
          <FormInput
            type="text"
            label="name"
            value={name}
            id="name"
            handleChange={handleChange}
            required
          ></FormInput>
          <FormInput
            type="email"
            label="email"
            value={email}
            id="email"
            onChange={handleChange}
            required
          ></FormInput>
        </div>
        <div>
          <FormInput
            type="text"
            label="subject"
            value={subject}
            id="subject"
            onChange={handleChange}
            required
          ></FormInput>
        </div>
        <div>
          <FormInput
            type="textarea"
            label="message"
            value={message}
            id="message"
            onChange={handleChange}
            required
          ></FormInput>
        </div>
        <button
          type="submit"
          className="button submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <div>
          <span id="email_response" className="display_none"></span>
        </div>
      </form>
    </div>
  );
}

export default Contact;
