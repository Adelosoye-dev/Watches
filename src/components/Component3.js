import { useMemo, useCallback, useEffect } from "react";
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
  pro,
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

  const handleAddToCart = useCallback(() => {
    const product = {
      id: lux21,
      name: eternaClassic,
      price: prop,
      quantity: 1,
      ...pro,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const productIndex = existingCart.findIndex((item) => item.id === product.id);

    if (productIndex !== -1) {
      existingCart[productIndex].quantity += 1;
    } else {
      existingCart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    alert("Product added to cart!");
  }, [lux21, eternaClassic, prop, pro]);

  // Example of useEffect usage (ensure proper dependency array)
  useEffect(() => {
    // Example of async operation triggering state update
    // Ensure dependencies are properly defined to avoid infinite loops
    // fetchSomeData().then(data => {
    //   setState(data);
    // });
  }, []); // Ensure dependency array is properly defined to avoid infinite loops

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
      <button className="add-to-cart-wrapper2" onClick={handleAddToCart}>
        <div className="add-to-cart6">Add to cart</div>
      </button>
    </div>
  );
};

Component3.propTypes = {
  className: PropTypes.string,
  lux21: PropTypes.string,
  eternaClassic: PropTypes.string,
  prop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propMargin: PropTypes.any,
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  onFrameContainerClick1: PropTypes.func,
  pro: PropTypes.object,
};

export default Component3;
