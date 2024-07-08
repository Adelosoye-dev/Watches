import PropTypes from "prop-types";
import "./NameFields.css";

const NameFields = ({
  className = "",
  firstName,
  textPlaceholder,
  lastName,
  textPlaceholder1,
}) => {
  return (
    <div className={`name-fields ${className}`}>
      <div className="input-field2">
        <div className="first-name">{firstName}</div>
        <div className="input-box">
          <input className="text" placeholder={textPlaceholder} type="text" />
          <img className="information-icon" alt="" src="/information.svg" />
        </div>
        <div className="hint-text">Available balance: NGN0000</div>
      </div>
      <div className="location-fields">
        <div className="input-field3">
          <div className="last-name">{lastName}</div>
          <div className="input-box1">
            <input
              className="text1"
              placeholder={textPlaceholder1}
              type="text"
            />
            <img className="information-icon1" alt="" src="/information.svg" />
          </div>
          <div className="hint-text1">Available balance: NGN0000</div>
        </div>
      </div>
    </div>
  );
};

NameFields.propTypes = {
  className: PropTypes.string,
  firstName: PropTypes.string,
  textPlaceholder: PropTypes.string,
  lastName: PropTypes.string,
  textPlaceholder1: PropTypes.string,
};

export default NameFields;
