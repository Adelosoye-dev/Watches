import LuxuryLabel from "./LuxuryLabel";
import PropTypes from "prop-types";
import "./CartItemDetails.css";

const CartItemDetails = ({ className = "" }) => {
  return (
    <div className={`cart-item-details ${className}`}>
      <div className="separator">
        <div className="cart-item-description">
          <h3 className="your-cart2">Your cart(2)</h3>
          <div className="you-have-2">You have 2 items in your cart</div>
        </div>
      </div>
      <div className="cart-item">
        <LuxuryLabel favoriteIcon="/vector1.svg" />
        <LuxuryLabel favoriteIcon="/vector-2.svg" />
      </div>
    </div>
  );
};

CartItemDetails.propTypes = {
  className: PropTypes.string,
};

export default CartItemDetails;
