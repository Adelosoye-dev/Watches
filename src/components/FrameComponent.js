import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent.css";
import SuccessPopUp from "./SuccessPopUp"; // Import your SuccessPopUp component

const watches = [{}]
const FrameComponent = ({ className = "" }) => {
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility
  const navigate = useNavigate();
  const [cart_, setCart] = useState(0); // State to manage popup visibility
  const handleAddToCartClick = () => {
    setShowPopup(true); // Display the popup when "Add to cart" is clicked
  };

  const closePopup = () => {
    setShowPopup(false); // Function to close the popup
  };

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onShopTextClick = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  const onCart0TextClick = useCallback(() => {
    navigate("/check-out");
  }, [navigate]);

  return (
    <section className={`product-view-inner ${className}`}>
      <header className="frame-header">
        <div className="dummy-logo-container" onClick={onFrameContainerClick}>
          <img
            className="dummy-logo-icon2"
            loading="lazy"
            alt=""
            src="/dummy-logo.svg"
          />
        </div>
        <div className="frame-wrapper7">
          <div className="home-cart-container-parent">
            <div className="home-cart-container">
              <a className="home2" onClick={onFrameContainerClick}>
                Home
              </a>
            </div>
            <a className="shop4" onClick={onShopTextClick}>
              Shop
            </a>
            <div className="home-cart-container1">
              <a className="cart02" onClick={onCart0TextClick}>
                Cart(2)
              </a>
            </div>
          </div>
        </div>
        <div className="frame-wrapper8">
          <div className="ellipse-frame">
            <img
              className="frame-child1"
              loading="lazy"
              alt=""
              src="/ellipse-3704@2x.png"
            />
          </div>
        </div>
      </header>
      <div className={`add-to-cart-parent ${className}`}>
        <a className="add-to-cart" onClick={handleAddToCartClick}>
          Add to cart
        </a>
        {showPopup && <SuccessPopUp className="success-pop-up" onClose={closePopup} />}
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
