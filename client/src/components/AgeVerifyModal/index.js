import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Modal from "react-modal";

import "./AgeVerifyModal.scss";

Modal.setAppElement("#root");

const AgeVerifyModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userBirthDate, setUserBirthDate] = useState("");
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    const hasModalBeenShown = localStorage.getItem('modalShown');

    if (!hasModalBeenShown) {
      setIsOpen(true);
    }

  }, []);

  useEffect(() => {
    const ageVerify = () => {
      const legalAge = 18;

      if (userBirthDate) {
        const currentDate = new Date();
        const userDate = new Date(userBirthDate);
        const userAge = currentDate.getFullYear() - userDate.getFullYear();

        if (userAge >= legalAge) {
          setIsOpen(false);
          localStorage.setItem("modalShown", "true");
        } else {
          setShouldRedirect(true)
        }
      }
    };

    ageVerify();
  }, [userBirthDate]);

  if (shouldRedirect) {
    return <Navigate to='/turnaround' />
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
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
          type="date"
          value={userBirthDate}
          onChange={(e) => setUserBirthDate(e.target.value)}
        />
      </div>
    </Modal>
  );
};

export default AgeVerifyModal;
