import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Modal from "react-modal";

import "./AgeVerifyModal.scss";

Modal.setAppElement("#root");

const AgeVerifyModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userBirthDate, setUserBirthDate] = useState("");
  const [shouldRedirect, setShouldRedirect] = useState(false);
  // const [userAge, setUserAge] = useState(null);

  useEffect(() => {
    const hasModalBeenShown = localStorage.getItem('modalShown');

    if (!hasModalBeenShown) {
      setIsOpen(true);
    }

  }, []);

  const handleVerifyAge = () => {
    const legalAge = 18;

    if (userBirthDate) {
      const dateFormat = /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/\d{4}$/;
      
      if (!userBirthDate.match(dateFormat)) {
        setShouldRedirect(true);
        return;
      }

      const currentDate = new Date();
      const [month, day, year] = userBirthDate.split("/");
      const userDate = new Date(year, month - 1, day);
      const userAge = currentDate.getFullYear() - userDate.getFullYear();

      if (year.length < 4) {
        // If the year is not in 4-digit format, set shouldRedirect to true
        setShouldRedirect(true);
        return;
      }

      if (userAge >= legalAge) {
        setIsOpen(false);
        localStorage.setItem("modalShown", "true");
      } else {
        setShouldRedirect(true);
      }
    }
  };

  const handleCalculateAge = () => {
    handleVerifyAge();
  };

  if (shouldRedirect) {
    return <Navigate to='/turnaround' />;
  }

  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={false}
      className="av-modal"
      overlayClassName="modal-overlay"
    >
      <div className="av-form">
        <img src="/images/info/logo.jpeg" alt="logo" />
        <h2>Age Verification</h2>
        <p>
          You must be 18 years of age or older to access this website and/or to
          purchase non-medical cannabis.
        </p>
        <label>Enter your birthdate:</label>
        <input
          type="text"
          placeholder="MM/DD/YYYY"
          value={userBirthDate}
          onChange={(e) => setUserBirthDate(e.target.value)}
          maxLength="10"
          onBlur={handleVerifyAge}
        />
        <button onClick={handleCalculateAge}>Calculate Age</button>
      </div>
    </Modal>
  );
};

export default AgeVerifyModal;
