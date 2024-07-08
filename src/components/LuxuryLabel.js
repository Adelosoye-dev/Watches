import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./LuxuryLabel.css";

const LuxuryLabel = ({ className = "", favoriteIcon }) => {
  const unitPrice = 1350000.00; // Unit price of the product
  const [quantity, setQuantity] = useState(1); // State to manage quantity
  const [totalPrice, setTotalPrice] = useState(unitPrice); // State to manage total price

  // Update total price whenever quantity changes
  useEffect(() => {
    const newTotalPrice = unitPrice * quantity;
    setTotalPrice(newTotalPrice);
  }, [quantity, unitPrice]);

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className={`luxury-label ${className}`}>
      <img
        className="luxury-1-14"
        loading="lazy"
        alt=""
        src="/luxury-1-1@2x.png"
      />
      <div className="item-actions">
        <div className="watch-i-d-labels">
          <div className="epoch-elegance-wrapper">
            <h3 className="epoch-elegance3">Epoich Elegance</h3>
          </div>
          <div className="delimiter">{unitPrice.toFixed(2)}</div>
        </div>
      </div>
      <div className="quantity-control">
        <div className="quantity-wrapper">
          <div className="minus-button-container" onClick={handleDecreaseQuantity}>
            <div className="minus-button">
              <div className="vuesaxlinearminus-wrapper1">
                <img
                  className="vuesaxlinearminus-icon4"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearminus-11.svg"
                />
              </div>
            </div>
          </div>
          <div className="quantity-separator">
            <div className="quantity1">{quantity}</div>
          </div>
          <div className="plus-button-container" onClick={handleIncreaseQuantity}>
            <div className="plus-button">
              <img
                className="vuesaxlinearadd-icon4"
                loading="lazy"
                alt=""
                src="/vuesaxlinearadd.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="cart-action-row">
        <div className="favorite-button-container">
          <div className="favorite-button">
            <div className="favorite-icon-wrapper">
              <img
                className="favorite-icon"
                loading="lazy"
                alt=""
                src={favoriteIcon}
              />
            </div>
            <div className="favorite-separator">{totalPrice.toFixed(2)}</div>
          </div>
          <div className="remove-button-container">
            <div className="remove-button">
              <div className="trash-label">
                <img
                  className="vuesaxlinearheart-icon3"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearheart.svg"
                />
              </div>
              <div className="favorite3">Favorite</div>
            </div>
            <div className="trash-button-container">
              <div className="trash-button">
                <div className="trash-button-child" />
                <img
                  className="vuesaxlineartrash-icon3"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlineartrash.svg"
                />
              </div>
              <div className="watch-i-d">
                <div className="remove3">Remove</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LuxuryLabel.propTypes = {
  className: PropTypes.string,
  favoriteIcon: PropTypes.string,
};

export default LuxuryLabel;