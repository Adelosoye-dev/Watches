import PropTypes from "prop-types";
import "./ProductInfo.css";

const ProductInfo = ({ className = "" }) => {
  return (
    <div className={`product-info ${className}`}>
      <div className="product-view-wrapper">
        <h3 className="product-view1">Product View</h3>
      </div>
      <div className="luxury-1-1-parent1">
        <img
          className="luxury-1-13"
          loading="lazy"
          alt=""
          src="/luxury-1-1-1@2x.png"
        />
        <div className="product-rating">
          <div className="rating-container">
            <div className="frame-parent1">
              <div className="star-container-parent">
                <div className="star-container">
                  <h1 className="epoch-elegance1">Epoch Elegance</h1>
                </div>
                <div className="review-count">
                  <div className="div11"> 350,000.00</div>
                  <div className="vector-wrapper3">
                    <img
                      className="vector-icon9"
                      loading="lazy"
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="quantity-container-wrapper">
                <div className="quantity-container">
                  <div className="quantity-control-parent">
                    <div className="quantity-control">
                      <img
                        className="vuesaxlinearstar-icon"
                        loading="lazy"
                        alt=""
                        src="/vuesaxlinearstar.svg"
                      />
                      <img
                        className="vuesaxlinearstar-icon1"
                        loading="lazy"
                        alt=""
                        src="/vuesaxlinearstar-1.svg"
                      />
                      <img
                        className="vuesaxlinearstar-icon2"
                        loading="lazy"
                        alt=""
                        src="/vuesaxlinearstar-2.svg"
                      />
                      <img
                        className="vuesaxlinearstar-icon3"
                        loading="lazy"
                        alt=""
                        src="/vuesaxlinearstar-3.svg"
                      />
                      <img
                        className="vuesaxlinearstar-icon4"
                        loading="lazy"
                        alt=""
                        src="/vuesaxlinearstar-4.svg"
                      />
                    </div>
                    <div className="reviews">20 Reviews</div>
                  </div>
                  <div className="quantity-adjust">
                    <div className="quantity">Quantity</div>
                    <div className="adjust-buttons-container-parent">
                      <div className="adjust-buttons-container">
                        <img
                          className="vuesaxlinearminus-icon3"
                          loading="lazy"
                          alt=""
                          src="/vuesaxlinearminus-1.svg"
                        />
                      </div>
                      <div className="quantity-value">
                        <div className="empty-value">3</div>
                      </div>
                      <div className="adjust-buttons-container1">
                        <img
                          className="vuesaxlinearadd-icon3"
                          loading="lazy"
                          alt=""
                          src="/vuesaxlinearadd-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="add-to-cart-button-wrapper">
              <button className="add-to-cart-button">
                <div className="add-to-cart5">add to cart</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductInfo.propTypes = {
  className: PropTypes.string,
};

export default ProductInfo;
