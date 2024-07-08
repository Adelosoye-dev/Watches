import { useCallback } from "react";
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
            <a className="home1">Home</a>
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
        <div className="ellipse-container">
          <img
            className="ellipse-icon"
            loading="lazy"
            alt=""
            src="/ellipse-3704@2x.png"
          />
        </div>
      </div>
    </header>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
