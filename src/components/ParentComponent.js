import React, { useState } from "react";
import PropTypes from "prop-types";
import LuxuryLabel from "./LuxuryLabel";
import "./LuxuryLabel.css";

const ParentComponent = () => {
  const [subtotalPrice, setSubtotalPrice] = useState(0);

  const handlePriceUpdate = (price) => {
    setSubtotalPrice((prevPrice) => prevPrice + price);
  };

  return (
    <div className="parent-component">
      <LuxuryLabel
        className="luxury-label1"
        favoriteIcon="/favorite-icon1.svg"
        onPriceUpdate={handlePriceUpdate}
      />
      <LuxuryLabel
        className="luxury-label2"
        favoriteIcon="/favorite-icon2.svg"
        onPriceUpdate={handlePriceUpdate}
      />
      <div className="subtotal-price">
        Subtotal: ${subtotalPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default ParentComponent;
