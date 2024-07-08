import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Success.css";

const Success = ({ onClose, className = "" }) => {
  // Automatically close after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Close the Success popup
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`success-overlay ${className}`}>
      <div className="success-content">
        <section className="httpslottiefilescomanimat-wrapper">
          <img
            className="httpslottiefilescomanimat-icon"
            loading="lazy"
            alt=""
            src="/httpslottiefilescomanimationssuccess56eqqizm6f@2x.png"
          />
        </section>
        <section className="payment-confirmed-parent">
          <div className="payment-confirmed">Payment Confirmed</div>
          <div className="frame-wrapper">
            <div className="rectangle-parent">
              <div className="frame-child" />
              <b className="close" onClick={onClose}>
                Close
              </b>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

Success.propTypes = {
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Success;
