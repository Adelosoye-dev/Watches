import { useCallback } from "react";
import Component3 from "./Component3";
import Component from "./Component";
import Component2 from "./Component2";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./ItemsContainer.css";

const ItemsContainer = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  return (
    <div className={`items-container ${className}`}>
      <div className="component-2-parent1">
        <Component3
          lux21="/lux2-1@2x.png"
          eternaClassic="Eterna Classic"
          prop="  1,350,000.00"
          propFlex="1"
          propMinWidth="300px"
          propHeight="unset"
          propWidth="unset"
          propMargin="unset"
          propPosition="unset"
          propTop="unset"
          propLeft="unset"
        />
        <Component
          lux22="/lux2-2@2x.png"
          vintageVesper="Vintage Vesper"
          prop="650,000.00"
          propHeight="unset"
          propWidth="unset"
          propFlex="1"
          propMinWidth="300px"
        />
        <Component2
          lux21="/lux2-1-1@2x.png"
          epochElegance="Epoch Elegance"
          propFlex="1"
          propMinWidth="300px"
          propWidth="unset"
        />
      </div>
      <div
        className="view-products-button-parent"
        onClick={onFrameContainerClick}
      >
        <div className="view-products-button1">
          <h1 className="view-products1">View Products</h1>
        </div>
        <img
          className="vuesaxlineararrow-right-icon3"
          loading="lazy"
          alt=""
          src="/vuesaxlineararrowright.svg"
          onClick={onFrameContainerClick}
        />
      </div>
    </div>
  );
};

ItemsContainer.propTypes = {
  className: PropTypes.string,
};

export default ItemsContainer;
