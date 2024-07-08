import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Component3 from "./Component3";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onProductNamesContainerClick = useCallback(() => {
    navigate("/product-view");
  }, [navigate]);

  const onViewProductsButtonClick = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  return (
    <section className={`watches-content-wrapper ${className}`}>
      <div className="watches-content">
        <div className="watches-header1">
          <div className="watches-title1">
            <h1 className="wristwatches1">Wristwatches</h1>
            <div className="watches-title-inner">
              <img className="line-icon" loading="lazy" alt="" />
            </div>
          </div>
        </div>
        <div className="watches-grid">
          <div className="product-cards1">
            <Component3
              lux21="/lux2-1@2x.png"
              eternaClassic="Eterna Classic"
              prop="  1,350,000.00"
              propFlex="unset"
              propMinWidth="unset"
              propHeight="550px"
              propWidth="400px"
              propMargin="0 !important"
              propPosition="absolute"
              propTop="0px"
              propLeft="0px"
              onFrameContainerClick1={onProductNamesContainerClick}
            />
            <div className="component-2">
              <div
                className="lux2-2-parent"
                onClick={onProductNamesContainerClick}
              >
                <img
                  className="lux2-2-icon"
                  loading="lazy"
                  alt=""
                  src="/lux2-2@2x.png"
                />
                <div className="frame-wrapper2">
                  <div className="vintage-vesper-parent">
                    <h3 className="vintage-vesper">Vintage Vesper</h3>
                    <div className="parent">
                      <div className="div6">650,000.00</div>
                      <div className="vector-wrapper">
                        <img
                          className="vector-icon4"
                          loading="lazy"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="add-to-cart-wrapper">
                <div className="add-to-cart">Add to cart</div>
              </button>
            </div>
            <div className="component-21">
              <div
                className="lux2-1-parent"
                onClick={onProductNamesContainerClick}
              >
                <img
                  className="lux2-1-icon"
                  loading="lazy"
                  alt=""
                  src="/lux2-1-1@2x.png"
                />
                <div className="frame-wrapper3">
                  <div className="epoch-elegance-parent">
                    <h3 className="epoch-elegance">Epoch Elegance</h3>
                    <div className="group">
                      <div className="div7">350,000.00</div>
                      <div className="vector-container">
                        <img
                          className="vector-icon5"
                          loading="lazy"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="add-to-cart-container">
                <div className="add-to-cart1">Add to cart</div>
              </button>
            </div>
            <div className="component-22">
              <div
                className="lux2-2-group"
                onClick={onProductNamesContainerClick}
              >
                <img
                  className="lux2-2-icon1"
                  loading="lazy"
                  alt=""
                  src="/lux2-2-1@2x.png"
                />
                <div className="frame-wrapper4">
                  <div className="regal-remnant-parent">
                    <h3 className="regal-remnant">Regal Remnant</h3>
                    <div className="parent1">
                      <div className="div8">750,000.00</div>
                      <div className="vector-frame">
                        <img
                          className="vector-icon6"
                          loading="lazy"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="add-to-cart-frame">
                <div className="add-to-cart2">Add to cart</div>
              </button>
            </div>
            <div className="component-23">
              <div
                className="lux2-2-container"
                onClick={onProductNamesContainerClick}
              >
                <img
                  className="lux2-2-icon2"
                  loading="lazy"
                  alt=""
                  src="/lux2-2@2x.png"
                />
                <div className="frame-wrapper5">
                  <div className="timeless-vanguard-parent">
                    <h3 className="timeless-vanguard">Timeless Vanguard</h3>
                    <div className="parent2">
                      <div className="div9">400,000.00</div>
                      <div className="vector-wrapper1">
                        <img
                          className="vector-icon7"
                          loading="lazy"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="frame-button">
                <div className="add-to-cart3">Add to cart</div>
              </button>
            </div>
            <div className="component-24">
              <div
                className="lux2-1-group"
                onClick={onProductNamesContainerClick}
              >
                <img
                  className="lux2-1-icon1"
                  loading="lazy"
                  alt=""
                  src="/lux2-1-1@2x.png"
                />
                <div className="frame-wrapper6">
                  <div className="retro-radiance-parent">
                    <h3 className="retro-radiance">Retro Radiance</h3>
                    <div className="parent3">
                      <div className="div10">350,000.00</div>
                      <div className="vector-wrapper2">
                        <img
                          className="vector-icon8"
                          loading="lazy"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="add-to-cart-wrapper1">
                <div className="add-to-cart4">Add to cart</div>
              </button>
            </div>
          </div>
          <div
            className="view-products-button"
            onClick={onViewProductsButtonClick}
          >
            <div className="view-products-content">
              <h1 className="view-products">View Products</h1>
            </div>
            <img
              className="vuesaxlineararrow-right-icon2"
              loading="lazy"
              alt=""
              src="/vuesaxlineararrowright.svg"
              onClick={onViewProductsButtonClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
