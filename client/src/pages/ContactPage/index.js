import React from "react";

import "./ContactPage.scss";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="intro">
          <h2 className="b-text">Don't be a stranger!</h2>
          <p>
            We would love to hear from you! Do you have a question or any comments?
            If so, fill out the form below & we will respond ASAP!
          </p>
        </div>
        <div className="form">
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
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
