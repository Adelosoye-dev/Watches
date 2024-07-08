import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Address.css";

const Address = ({
  className = "",
  shippingAddress,
  textPlaceholder,
  propFlexDirection,
  propAlignSelf,
  propWidth,
}) => {
  const addressStyle = useMemo(() => {
    return {
      flexDirection: propFlexDirection,
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propFlexDirection, propAlignSelf, propWidth]);

  return (
    <div className={`address ${className}`} style={addressStyle}>
      <div className="input-field4">
        <div className="shipping-address">{shippingAddress}</div>
        <div className="input-box2">
          <input className="text2" placeholder={textPlaceholder} type="text" />
          <img className="information-icon2" alt="" src="/information.svg" />
        </div>
        <div className="hint-text2">Available balance: NGN0000</div>
      </div>
    </div>
  );
};

Address.propTypes = {
  className: PropTypes.string,
  shippingAddress: PropTypes.string,
  textPlaceholder: PropTypes.string,

  /** Style props */
  propFlexDirection: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Address;
