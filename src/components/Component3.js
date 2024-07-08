import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Component3.css";

const Component3 = ({
  className = "",
  lux21,
  eternaClassic,
  prop,
  propFlex,
  propMinWidth,
  propHeight,
  propWidth,
  propMargin,
  propPosition,
  propTop,
  propLeft,
  onFrameContainerClick1,
}) => {
  const component2Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      height: propHeight,
      width: propWidth,
      margin: propMargin,
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [
    propFlex,
    propMinWidth,
    propHeight,
    propWidth,
    propMargin,
    propPosition,
    propTop,
    propLeft,
  ]);

  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/product-view");
  }, [navigate]);

  return (
    <div className={`component-25 ${className}`} style={component2Style}>
      <div className="lux2-1-container" onClick={onFrameContainerClick1}>
        <img className="lux2-1-icon3" loading="lazy" alt="" src={lux21} />
        <div className="frame-wrapper9">
          <div className="eterna-classic-parent">
            <h3 className="eterna-classic">{eternaClassic}</h3>
            <div className="parent4">
              <div className="div12">{prop}</div>
              <div className="vector-wrapper4">
                <img
                  className="vector-icon10"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="add-to-cart-wrapper2">
        <div className="add-to-cart6">Add to cart</div>
      </button>
    </div>
  );
};

Component3.propTypes = {
  className: PropTypes.string,
  lux21: PropTypes.string,
  eternaClassic: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propMargin: PropTypes.any,
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,

  /** Action props */
  onFrameContainerClick1: PropTypes.func,
};

export default Component3;
