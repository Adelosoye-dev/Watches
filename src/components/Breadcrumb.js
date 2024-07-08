import React, { useState } from "react";
import PropTypes from "prop-types";
import NameFields from "./NameFields";
import Address from "./Address";
import Success from "./Success";
import "./Breadcrumb.css";

const Breadcrumb = ({ className = "" }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleConfirmClick = () => {
    setShowSuccess(true);
    // For demonstration purposes, let's close the success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <div className={`breadcrumb ${className}`}>
      <img
        className="vuesaxlineararrow-right-icon4"
        loading="lazy"
        alt=""
        src="/vuesaxlineararrowright1@2x.png"
      />
      <div className="details-form-parent">
        <div className="details-form">
          <h1 className="delivery-details">Delivery details</h1>
          <div className="personal-info">
            <div className="name-input">
              <NameFields
                firstName="First Name"
                textPlaceholder="Enter first name"
                lastName="Last Name"
                textPlaceholder1="Enter last name"
              />
              <Address
                shippingAddress="Shipping Address"
                textPlaceholder="Enter address "
              />
              <NameFields
                firstName="City/Town"
                textPlaceholder="Enter city"
                lastName="Zip Code"
                textPlaceholder1="Enter zip code "
              />
              <NameFields
                firstName="Phone Number"
                textPlaceholder="Enter phone number"
                lastName="Email Address"
                textPlaceholder1="Enter email address "
              />
            </div>
            <div className="import-profile">
              <input className="vuesaxlineartick-square" type="checkbox" />
              <div className="import-from-profile">Import From Profile</div>
            </div>
          </div>
        </div>
        <div className="order-summary">
          <div className="order-container">
            <div className="order-header">
              <h1 className="your-order">Your Order</h1>
              <div className="subtotal-value-parent">
                <div className="subtotal-value">
                  <h3 className="subtotal1">Subtotal</h3>
                  <div className="subtotal-amount">
                    <div className="subtotal-icon1">
                      <img
                        className="currency-symbol-icon"
                        loading="lazy"
                        alt=""
                        src="/vector-11.svg"
                      />
                    </div>
                    <div className="subtotal-number">70,000.00</div>
                  </div>
                </div>
                <div className="divider1" />
                <div className="payment-method-header-parent">
                  <div className="payment-method-header">
                    <h3 className="payment-method">Payment Method</h3>
                    <div className="payment-options">
                      <div className="options">
                        <input
                          className="icons"
                          type="radio"
                          name="radioGroup-1"
                        />
                        <div className="zenpay">Zenpay</div>
                      </div>
                      <div className="options1">
                        <input
                          className="options-child"
                          type="radio"
                          name="radioGroup-1"
                        />
                        <div className="credit-or-debit">
                          Credit or Debit Card
                        </div>
                      </div>
                      <div className="more-options">
                        <img
                          className="more-icon"
                          loading="lazy"
                          alt=""
                          src="/frame-1171275453.svg"
                        />
                        <img
                          className="more-options-child"
                          loading="lazy"
                          alt=""
                          src="/group-758531624.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-details">
                    <Address
                      shippingAddress="Card Holder Name"
                      textPlaceholder="Enter name"
                      propFlexDirection="column"
                      propAlignSelf="stretch"
                      propWidth="unset"
                    />
                    <Address
                      shippingAddress="Card Number"
                      textPlaceholder="5678**********9876"
                      propFlexDirection="column"
                      propAlignSelf="stretch"
                      propWidth="unset"
                    />
                    <div className="card-fields">
                      <Address
                        shippingAddress="Expiry Date"
                        textPlaceholder="MM/YY"
                        propFlexDirection="column"
                        propAlignSelf="unset"
                        propWidth="145px"
                      />
                      <Address
                        shippingAddress="CVC"
                        textPlaceholder="000"
                        propFlexDirection="column"
                        propAlignSelf="unset"
                        propWidth="145px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="costs-parent">
              <div className="costs">
                <div className="cost-labels">
                  <h3 className="subtotal2">Subtotal</h3>
                  <div className="cost-icons">
                    <img
                      className="cost-symbols-icon"
                      loading="lazy"
                      alt=""
                      src="/vector-11.svg"
                    />
                    <div className="cost-values">35,000.00</div>
                  </div>
                </div>
                <div className="cost-labels1">
                  <h3 className="shipping-cost">Shipping Cost</h3>
                  <div className="vector-parent">
                    <img
                      className="vector-icon14"
                      loading="lazy"
                      alt=""
                      src="/vector-11.svg"
                    />
                    <div className="div16">15,000.00</div>
                  </div>
                </div>
              </div>
              <div className="total-divider" />
              <div className="total-value">
                <h3 className="total">Total</h3>
                <div className="total-amount">
                  <div className="total-icon">
                    <img
                      className="total-currency-icon"
                      loading="lazy"
                      alt=""
                      src="/vector-41.svg"
                    />
                  </div>
                  <div className="total-number">50,000.00</div>
                </div>
              </div>
            </div>
            <button className="confirmation" onClick={handleConfirmClick}>
              <b className="confirm">Confirm</b>
            </button>
          </div>
        </div>
      </div>
      {showSuccess && <Success className="success-popup" onClose={handleCloseSuccess} />}
    </div>
  );
};

Breadcrumb.propTypes = {
  className: PropTypes.string,
};

export default Breadcrumb;
