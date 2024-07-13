import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onShopTextClick = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  const onCart0TextClick = useCallback(() => {
    navigate("/check-out");
  }, [navigate]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`dummy-logo-parent ${className}`}>
      <img
        className="dummy-logo-icon1"
        loading="lazy"
        alt=""
        src="/dummy-logo.svg"
      />
      <div className="frame-div">
        <div className="home-cart-content-parent">
          <div className="home-cart-content">
            <a className="home1" href="#">Home</a>
          </div>
          <a className="shop3" onClick={onShopTextClick}>
            Shop
          </a>
          <div className="home-cart-content1">
            <a className="cart01" onClick={onCart0TextClick}>
              Cart(0)
            </a>
          </div>
        </div>
      </div>
      <div className="frame-wrapper1">
        <div className="jumoke" onClick={toggleDropdown}>
          <span className="jummy"></span>
          <span className="jummy"></span>
          <span className="jummy"></span>
        </div>
      </div>
      <DropdownMenu isOpen={isOpen} setIsOpen={toggleDropdown} />
    </header>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;

const DropdownMenu = ({ isOpen, setIsOpen }) => {
  const handleItemClick = (item) => {
    console.log(`Clicked on ${item}`);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
      
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <a href="" onClick={() => handleItemClick("Home")}>Home</a>
          </li>
          <li>
            <a href="" onClick={() => handleItemClick("Shop")}>Shop</a>
          </li>
          <li>
            <a href="" onClick={() => handleItemClick("Cart")}>Cart</a>
          </li>
        </ul>
      )}
    </div>
  );
};

DropdownMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};