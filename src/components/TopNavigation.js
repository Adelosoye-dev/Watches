import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./TopNavigation.css";

const TopNavigation = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCart2TextClick = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  return (
    <section className={`top-navigation ${className}`}>
      <header className="top-left">
        <div className="dummy-logo-frame" onClick={onFrameContainerClick}>
          <img
            className="dummy-logo-icon5"
            loading="lazy"
            alt=""
            src="/dummy-logo.svg"
          />
        </div>
        <div className="home-shop-nav">
          <div className="home-shop-links">
            <div className="home-link">
              <a className="home3" onClick={onFrameContainerClick}>
                Home
              </a>
            </div>
            <div className="home-link1">
              <a className="shop5" onClick={onFrameContainerClick}>
                Shop
              </a>
            </div>
            <a className="cart2" onClick={onCart2TextClick}>
              Cart(2)
            </a>
          </div>
        </div>
        <div className="user-profile">
          <div className="user-avatar">
            <img
              className="avatar-icon"
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

TopNavigation.propTypes = {
  className: PropTypes.string,
};

export default TopNavigation;
