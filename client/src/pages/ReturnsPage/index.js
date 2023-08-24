import React, { useRef } from "react";
import emailjs from "emailjs-com";

import "./ReturnsPage.scss";

const falseTerms = [
  "Officia Lorem magna nisi et cupidatat elit et exercitation ad.",
  "Officia Lorem magna nisi et cupidatat elit et exercitation ad.",
  "Officia Lorem magna nisi et cupidatat elit et exercitation ad.",
  "Officia Lorem magna nisi et cupidatat elit et exercitation ad.",
  "Officia Lorem magna nisi et cupidatat elit et exercitation ad.",
];

const refundReasons = [
  {
    id: 1,
    name: "Faulty packaging",
  },
  {
    id: 2,
    name: "Missing Item(s)",
  },
  {
    id: 3,
    name: "Bad Quality",
  },
  {
    id: 4,
    name: "Lost In Transit",
  },
  {
    id: 5,
    name: "Issue With Delivery",
  },
];

const ReturnsPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_REFUND_SERVICE_ID,
        process.env.REACT_APP_REFUND_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_REFUND_PUBLIC_KEY
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
    <div className="returns-page">
      <div className="container">
        <section className="intro">
          <h3>Shipping & Returns</h3>
        </section>
        <section className="top">
          <section className="ship-info">
            <h4>Shipping</h4>
            <p>
              Officia Lorem magna nisi et cupidatat elit et exercitation ad.
              Anim reprehenderit duis dolor exercitation consequat sunt ipsum.
              Ullamco ex velit dolore commodo ea irure sit sint excepteur qui
              tempor irure non. Est adipisicing in est commodo dolor. Est est
              velit velit ad adipisicing minim Lorem id.
            </p>
          </section>
          <section className="return-info">
            <h4>Product Returns</h4>
            <ul>
              {falseTerms.map((term, i) => (
                <li key={i}>{term}</li>
              ))}
            </ul>
          </section>
          <h5>For further assistance please fill out form:</h5>
        </section>
        <section className="bottom">
          <section className="refund-form">
            <h5>Refund Requests</h5>
            <form ref={form} onSubmit={sendEmail} className="form">
              <div className="left">
                <section className="customer-info">
                  <input
                    type="text"
                    name="name"
                    placeholder="Please enter your name"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Please enter your email"
                  />
                  <input
                    name="order-number"
                    type="text"
                    placeholder="Order number"
                  />
                </section>
                <section className="date-info">
                  <label htmlFor="date">Order Date:</label>
                  <input name="date" type="date" />
                </section>
                <section className="refund-info">
                  <input
                    type="text"
                    name="refund-items"
                    placeholder="Desired refunded Item(s), quantity"
                  />
                  <section className="reason">
                    <label htmlFor="reason" name="reason">Reason for refund request:</label>
                    <select name="reason">
                      <option value="">Refund Reason</option>
                      {refundReasons.map(reason => (
                        <option key={reason.id} value={reason.name}>{reason.name}</option>
                      ))}
                    </select>
                  </section>
                </section>
                <button type="submit">Send</button>
              </div>
              <div className="right">
                <textarea placeholder="Explain why you would like a refund..." name="message" />
              </div>
            </form>
          </section>
        </section>
      </div>
    </div>
  );
};

export default ReturnsPage;
