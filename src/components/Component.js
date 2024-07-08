import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Component.css";

const Component = ({
  className = "",
  lux22,
  vintageVesper,
  prop,
  propHeight,
  propWidth,
  propFlex,
  propMinWidth,
  onFrameContainerClick1,
}) => {
  const component22Style = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propHeight, propWidth, propFlex, propMinWidth]);

  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/product-view");
  }, [navigate]);

  return (
    <div className={`component-28 ${className}`} style={component22Style}>
      <div className="lux2-2-parent2" onClick={onFrameContainerClick1}>
        <img className="lux2-2-icon4" loading="lazy" alt="" src={lux22} />
        <div className="frame-wrapper12">
          <div className="vintage-vesper-group">
            <h3 className="vintage-vesper1">{vintageVesper}</h3>
            <div className="parent7">
              <div className="div15">{prop}</div>
              <div className="vector-wrapper7">
                <img
                  className="vector-icon13"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="add-to-cart-wrapper5">
        <div className="add-to-cart9">Add to cart</div>
      </button>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  lux22: PropTypes.string,
  vintageVesper: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,

  /** Action props */
  onFrameContainerClick1: PropTypes.func,
};

export default Component;
