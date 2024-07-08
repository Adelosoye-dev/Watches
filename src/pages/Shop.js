import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Component3 from "../components/Component3";
import Component2 from "../components/Component2";
import Component1 from "../components/Component1";
import Component from "../components/Component";
import ModernWithNewsletterDark from "../components/ModernWithNewsletterDark";
import "./Shop.css";

const Shop = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/product-view");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCart0TextClick = useCallback(() => {
    navigate("/check-out");
  }, [navigate]);

  return (
    <div className="shop1">
      <header className="frame-parent">
        <div className="dummy-logo-wrapper" onClick={onFrameContainerClick1}>
          <img
            className="dummy-logo-icon"
            loading="lazy"
            alt=""
            src="/dummy-logo.svg"
          />
        </div>
        <div className="navigation-wrapper">
          <div className="navigation">
            <div className="home-cart-buttons">
              <a className="home" onClick={onFrameContainerClick1}>
                Home
              </a>
            </div>
            <a className="shop2">Shop</a>
            <div className="home-cart-buttons1">
              <a className="cart0" onClick={onCart0TextClick}>
                Cart(0)
              </a>
            </div>
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="ellipse-wrapper">
            <img
              className="frame-item"
              loading="lazy"
              alt=""
              src="/ellipse-3704@2x.png"
            />
          </div>
        </div>
      </header>
      <main className="watches-header-parent">
        <div className="watches-header">
          <div className="watches-title">
            <img
              className="vuesaxlineararrow-right-icon1"
              loading="lazy"
              alt=""
              src="/vuesaxlineararrowright1@2x.png"
            />
          </div>
          <div className="wristwatches-parent">
            <h1 className="wristwatches">Wristwatches</h1>
            <div className="divider-wrapper">
              <div className="divider" />
            </div>
          </div>
        </div>
        <section className="product-cards-wrapper">
          <div className="product-cards">
            <div className="frame-group">
              <div className="component-2-parent">
                <Component3
                  lux21="/lux2-1@2x.png"
                  eternaClassic="Eterna Classic"
                  prop="  1,350,000.00"
                  onFrameContainerClick1={onFrameContainerClick}
                />
                <Component3
                  lux21="/lux2-2@2x.png"
                  eternaClassic="Vintage Vesper"
                  prop="650,000.00"
                  propFlex="1"
                  propMinWidth="300px"
                  propHeight="unset"
                  propWidth="unset"
                  propMargin="unset"
                  propPosition="unset"
                  propTop="unset"
                  propLeft="unset"
                  onFrameContainerClick1={onFrameContainerClick}
                />
                <Component2
                  lux21="/lux2-1-1@2x.png"
                  epochElegance="Epoch Elegance"
                  onFrameContainerClick1={onFrameContainerClick}
                />
              </div>
              <div className="frame-container">
                <div className="component-2-group">
                  <Component3
                    lux21="/lux2-2-1@2x.png"
                    eternaClassic="Regal Remnant"
                    prop="750,000.00"
                    propFlex="1"
                    propMinWidth="300px"
                    propHeight="unset"
                    propWidth="unset"
                    propMargin="unset"
                    propPosition="unset"
                    propTop="unset"
                    propLeft="unset"
                    onFrameContainerClick1={onFrameContainerClick}
                  />
                  <Component1 />
                  <Component2
                    lux21="/lux2-1-1@2x.png"
                    epochElegance="Retro Radiance"
                    propFlex="1"
                    propMinWidth="300px"
                    propWidth="unset"
                    onFrameContainerClick1={onFrameContainerClick}
                  />
                </div>
                <div className="component-2-container">
                  <Component3
                    lux21="/lux2-1@2x.png"
                    eternaClassic="Eterna Classic"
                    prop="  1,350,000.00"
                    propFlex="unset"
                    propMinWidth="unset"
                    propHeight="550px"
                    propWidth="400px"
                    propMargin="unset"
                    propPosition="unset"
                    propTop="unset"
                    propLeft="unset"
                    onFrameContainerClick1={onFrameContainerClick}
                  />
                  <Component
                    lux22="/lux2-2@2x.png"
                    vintageVesper="Vintage Vesper"
                    prop="650,000.00"
                    onFrameContainerClick1={onFrameContainerClick}
                  />
                  <Component2
                    lux21="/lux2-1-1@2x.png"
                    epochElegance="Epoch Elegance"
                    propFlex="unset"
                    propMinWidth="unset"
                    propWidth="400px"
                    onFrameContainerClick1={onFrameContainerClick}
                  />
                  <Component
                    lux22="/lux2-2-1@2x.png"
                    vintageVesper="Regal Remnant"
                    prop="750,000.00"
                    propHeight="550px"
                    propWidth="400px"
                    propFlex="unset"
                    propMinWidth="unset"
                    onFrameContainerClick1={onFrameContainerClick}
                  />
                  <Component1
                    propFlex="unset"
                    propMinWidth="unset"
                    propHeight="550px"
                    propWidth="400px"
                  />
                  <Component2
                    lux21="/lux2-1-1@2x.png"
                    epochElegance="Retro Radiance"
                    propFlex="unset"
                    propMinWidth="unset"
                    propWidth="400px"
                    onFrameContainerClick1={onFrameContainerClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ModernWithNewsletterDark />
    </div>
  );
};

export default Shop;
