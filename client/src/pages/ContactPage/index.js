import React, { useRef } from "react";
import emailjs from "emailjs-com";

import "./ContactPage.scss";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_CONTACT_SERVICE_ID,
        process.env.REACT_APP_CONTACT_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_CONTACT_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="intro">
          <h2 className="b-text">Don't be a stranger!</h2>
          <p>
            We would love to hear from you! Do you have a question or any
            comments? If so, fill out the form below & we will respond ASAP!
          </p>
        </div>
        <form ref={form} className="form" onSubmit={sendEmail}>
          <section className="top">
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input type="text" name="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Your email</label>
              <input type="email" name="email" />
            </div>
          </section>
          <section className="bottom">
            <div className="field">
              <label htmlFor="msg">Message</label>
              <textarea name="msg" />
            </div>
          </section>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
