import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate();
  
  const [cart, setCart] = useState([]); // State to manage cart items

  // Effect to load cart items from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  // Navigation callbacks
  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onShopTextClick = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  const onCartTextClick = useCallback(() => {
    navigate("/checkout");
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
              <a className="cart02" onClick={onCartTextClick}>
                Cart {cart.length}
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
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
