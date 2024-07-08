import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./ModernWithNewsletterDark1.css";

const ModernWithNewsletterDark1 = ({
  className = "",
  vuesaxlineararrowUp,
  onFrameContainerClick,
}) => {
  const navigate = useNavigate();

  const onCompanyContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onListOneContainerClick = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  return (
    <footer className={`modern-with-newsletter-dark ${className}`}>
      <div className="rectangle" />
      <div className="footer-content1">
        <div className="footer-container">
          <div className="company1" onClick={onFrameContainerClick}>
            <img
              className="dummy-logo-icon3"
              loading="lazy"
              alt=""
              src="/dummy-logo.svg"
            />
            <div className="tagline-wrapper">
              <h1 className="tagline">AD</h1>
            </div>
          </div>
          <div className="footer-links1">
            <div
              className="list-one-container"
              onClick={onListOneContainerClick}
            >
              <div className="list">Shop</div>
              <img
                className="vuesaxlineararrow-up-icon"
                loading="lazy"
                alt=""
                src={vuesaxlineararrowUp}
              />
            </div>
            <div className="list-two-container">
              <div className="list1">Customer Care:</div>
              <div className="list-three-container">
                <div className="list2">Support@hng.tech/intenship</div>
              </div>
            </div>
          </div>
        </div>
        <div className="newsletter-container-wrapper">
          <div className="newsletter-container">
            <div className="description">Get the freshest news from us</div>
            <div className="input-container">
              <div className="input-field">
                <div className="rectangle1" />
                <input
                  className="list3"
                  placeholder="Your email address…"
                  type="text"
                />
              </div>
              <button className="buttonsmallstandart">
                <div className="rectangle8px">
                  <div className="rectangle2" />
                </div>
                <div className="button">Subscribe</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-info">
        <img className="line-icon1" loading="lazy" alt="" src="/line.svg" />
        <div className="copyright1">
          <div className="sub-menu">{`Terms & Conditions     |     Privacy Policy     |     Accessibility     |     Legal      |`}</div>
          <div className="copyright2">
            Design with love © DorathyGift 2024. All right reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

ModernWithNewsletterDark1.propTypes = {
  className: PropTypes.string,
  vuesaxlineararrowUp: PropTypes.string,

  /** Action props */
  onFrameContainerClick: PropTypes.func,
};

export default ModernWithNewsletterDark1;
