import PropTypes from "prop-types";
import "./SuccessPopUp.css";

const SuccessPopUp = ({ className = "" }) => {
  return (
    <div className={`success-pop-up ${className}`}>
      <div className="httpsapplottiefilescoman-parent">
        <img
          className="httpsapplottiefilescoman-icon"
          loading="lazy"
          alt=""
          src="/httpsapplottiefilescomanimation9b44f602273b47c4961146978cd80afb@2x.png"
        />
        <div className="product-successfully-added-to-wrapper">
          <div className="product-successfully-added">
            Product successfully added to cart
          </div>
        </div>
      </div>
    </div>
  );
};

SuccessPopUp.propTypes = {
  className: PropTypes.string,
};

export default SuccessPopUp;
