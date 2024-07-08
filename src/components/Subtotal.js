import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Subtotal.css";

const Subtotal = ({ className = "" }) => {
  const navigate = useNavigate();

  const onCheckoutContentClick = useCallback(() => {
    navigate("/confirm-payment");
  }, [navigate]);

  return (
    <div className={`subtotal ${className}`}>
      <div className="subtotal-details-wrapper">
        <div className="subtotal-details">
          <div className="subtotal-label">
            <div className="order-sub-total">
              <span className="o">O</span>
              <span className="rder-sub-total">rder Sub-Total</span>
            </div>
            <div className="items">2 items</div>
          </div>
          <div className="checkout-button">
            <div className="subtotal-content-parent">
              <div className="subtotal-content">
                <img
                  className="subtotal-icon"
                  loading="lazy"
                  alt=""
                  src="/vector-3.svg"
                />
              </div>
              <div className="subtotal-separator">35,000.00</div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout-content-wrapper">
        <button className="checkout-content" onClick={onCheckoutContentClick}>
          <div className="proceed-to-checkout">Proceed to checkout</div>
        </button>
      </div>
      <h1 className="similar-items1">Similar Items</h1>
    </div>
  );
};

Subtotal.propTypes = {
  className: PropTypes.string,
};

export default Subtotal;
