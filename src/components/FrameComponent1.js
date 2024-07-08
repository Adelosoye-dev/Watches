import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLux21ImageClick = useCallback(() => {
    navigate("/product-view");
  }, [navigate]);

  const onSHOPNOWTextClick = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  return (
    <section className={`style-content-parent ${className}`}>
      <div className="style-content">
        <div className="unleash-your-style-find-the-p-wrapper">
          <h1 className="unleash-your-style">{`Unleash Your Style: Find the Perfect Watch for Every Occasion `}</h1>
        </div>
        <img
          className="lux2-1-icon2"
          loading="lazy"
          alt=""
          src="/lux2-1-3@2x.png"
          onClick={onLux21ImageClick}
        />
      </div>
      <div className="shop-now-content-parent">
        <div className="shop-now-content">
          <h1 className="shop-now" onClick={onSHOPNOWTextClick}>
            SHOP NOW!
          </h1>
        </div>
        <div className="offer-badge">
          <div className="badge-content">
            <img
              className="badge-content-child"
              loading="lazy"
              alt=""
              src="/star-4.svg"
            />
            <b className="b">10%</b>
          </div>
          <div className="off-wrapper">
            <h1 className="off">OFF</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
