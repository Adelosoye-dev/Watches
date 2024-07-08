import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./ModernWithNewsletterDark.css";

const ModernWithNewsletterDark = ({ className = "" }) => {
  const navigate = useNavigate();

  const onCompanyContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <footer className={`modern-with-newsletter-dark1 ${className}`}>
      <div className="rectangle3" />
      <div className="newsletter-content">
        <div className="newsletter-inner-content">
          <div className="company2" onClick={onCompanyContainerClick}>
            <img
              className="dummy-logo-icon4"
              loading="lazy"
              alt=""
              src="/dummy-logo.svg"
            />
            <div className="tagline-container">
              <h1 className="tagline1">AD</h1>
            </div>
          </div>
          <div className="back-to-top-button">
            <img
              className="vuesaxlineararrow-up-icon1"
              loading="lazy"
              alt=""
              src="/vuesaxlineararrowup@2x.png"
            />
            <div className="newsletter-list">
              <div className="list4">Shop</div>
              <div className="list-parent">
                <div className="list5">Customer Care:</div>
                <div className="list-container">
                  <div className="list6">Support@hng.tech/intenship</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="description-input-wrapper">
          <div className="description-input">
            <div className="description1">Get the freshest news from us</div>
            <div className="input-field-container">
              <div className="input-field1">
                <div className="rectangle4" />
                <input
                  className="list7"
                  placeholder="Your email address…"
                  type="text"
                />
              </div>
              <button className="buttonsmallstandart1">
                <div className="rectangle8px1">
                  <div className="button-shape" />
                </div>
                <div className="button1">Subscribe</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-divider">
        <img className="line-icon2" loading="lazy" alt="" src="/line.svg" />
        <div className="footer-info1">
          <div className="sub-menu1">{`Terms & Conditions     |     Privacy Policy     |     Accessibility     |     Legal      |`}</div>
          <div className="copyright3">
            Design with love © DorathyGift 2024. All right reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

ModernWithNewsletterDark.propTypes = {
  className: PropTypes.string,
};

export default ModernWithNewsletterDark;
