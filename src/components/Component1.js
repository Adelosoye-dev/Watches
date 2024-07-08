import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Component1.css";

const Component1 = ({
  className = "",
  propFlex,
  propMinWidth,
  propHeight,
  propWidth,
}) => {
  const component21Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      height: propHeight,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propHeight, propWidth]);

  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/product-view");
  }, [navigate]);

  return (
    <div className={`component-27 ${className}`} style={component21Style}>
      <div className="lux2-2-parent1" onClick={onFrameContainerClick}>
        <img
          className="lux2-2-icon3"
          loading="lazy"
          alt=""
          src="/lux2-2@2x.png"
        />
        <div className="frame-wrapper11">
          <div className="timeless-vanguard-group">
            <h3 className="timeless-vanguard1">Timeless Vanguard</h3>
            <div className="parent6">
              <div className="div14">400,000.00</div>
              <div className="vector-wrapper6">
                <img
                  className="vector-icon12"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="add-to-cart-wrapper4">
        <div className="add-to-cart8">Add to cart</div>
      </button>
    </div>
  );
};

Component1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Component1;
