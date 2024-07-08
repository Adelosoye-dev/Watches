import React from "react";
import PropTypes from "prop-types";
import "./Component2.css";

const Component2 = ({
  className = "",
  lux21,
  epochElegance,
  propFlex,
  propMinWidth,
  propWidth,
  onFrameContainerClick1,
  onAddToCartClick,
}) => {
  const component2Style = {
    flex: propFlex,
    minWidth: propMinWidth,
    width: propWidth,
  };

  return (
    <div className={`component-26 ${className}`} style={component2Style}>
      <div className="lux2-1-parent1" onClick={onFrameContainerClick1}>
        <img className="lux2-1-icon4" loading="lazy" alt="" src={lux21} />
        <div className="frame-wrapper11">
          <div className="epoch-elegance-group">
            <h3 className="epoch-elegance3">{epochElegance}</h3>
            <div className="parent5">
              <div className="div13">350,000.00</div>
              <div className="vector-wrapper5">
                <img
                  className="vector-icon11"
                  loading="lazy"
                  alt=""
                  src="/vector-4.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="add-to-cart-wrapper3" onClick={onAddToCartClick}>
        <div className="add-to-cart7">Add to cart</div>
      </button>
    </div>
  );
};

Component2.propTypes = {
  className: PropTypes.string,
  lux21: PropTypes.string,
  epochElegance: PropTypes.string,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  onFrameContainerClick1: PropTypes.func,
  onAddToCartClick: PropTypes.func.isRequired,
};

export default Component2;
