import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./ReturnsPage.scss";
import { Link } from "react-router-dom";

const refundTerms = [
  "All product returns can only be returned if unopened with the stamp still intact",
  "You will be refunded via the original payment method used for the purchase.",
  "No returns will be offered on products ordered in error, or if customer decides they do not want the product.",
  "All prices are final at the time of purchase.",
  "Product sent in error can be returned to the sender.",
  "The owner reserves the right to refuse any request for a refund.",
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

    const name = form.current.name.value;
    const email = form.current.email.value;
    const orderNumber = form.current["order-number"].value;
    const date = form.current.date.value;
    const refundItems = form.current["refund-items"].value;
    const reason = form.current.reason.value;
    const msg = form.current.msg.value;

    if (!name || !email || !orderNumber || !date || !refundItems || !reason || !msg) {
      toast.error("Please fill out all fields.");
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_REFUND_SERVICE_ID,
        process.env.REACT_APP_REFUND_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_REFUND_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Email was sent successfully!");
        },
        (error) => {
          toast.error(error.text);
          return;
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
              Products are shipped directly from the sender/owner located in the DFW area. Products typically are delivered within 2-3 business days, with some exceptions. The cost of shipping is $8.00 and additional costs may occur. We also offer delivery dependent on location in DFW. Please reach out for more information using the <Link to="/contact" className="link in-line">Contact page</Link>! Your patience is appreciated as we work safely to serve you.
            </p>
          </section>
          <section className="return-info">
            <h4>Product Returns</h4>
            <ul>
              {refundTerms.map((term, i) => (
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
                <textarea placeholder="Explain why you would like a refund..." name="msg" />
              </div>
            </form>
          </section>
        </section>
      </div>
    </div>
  );
};

export default ReturnsPage;
