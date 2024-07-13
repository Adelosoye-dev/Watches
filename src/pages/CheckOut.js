import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/FrameComponent3";
import CartItemDetails from "../components/CartItemDetails";
import Subtotal from "../components/Subtotal";
import Component3 from "../components/Component3";
import Component from "../components/Component";
import Component2 from "../components/Component2";
import ModernWithNewsletterDark1 from "../components/ModernWithNewsletterDark1";
import "./CheckOut.css";

const CheckOut = () => {
  const navigate = useNavigate();

  const onProductDetailsContainerClick = useCallback(() => {
    navigate("/product-view");
  }, [navigate]);

  const onCompanyContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="check-out">
      <FrameComponent3 />
      <div className="luxury-1-1-group">
        <img className="luxury-1-11" alt="" src="/luxury-1-1@2x.png" />
        <div className="watch1">Watch</div>
        <div className="id-100011">ID 10001</div>
        <div className="vuesaxlinearminus-container">
          <img
            className="vuesaxlinearminus-icon1"
            alt=""
            src="/vuesaxlinearminus.svg"
          />
        </div>
        <div className="container">
          <div className="div2">1</div>
        </div>
        <div className="vuesaxlinearadd-container">
          <img
            className="vuesaxlinearadd-icon1"
            alt=""
            src="/vuesaxlinearadd.svg"
          />
        </div>
        <img className="vector-icon2" alt="" src="/vector1.svg" />
        <div className="div3">35,000.00</div>
        <div className="frame-inner" />
        <img
          className="vuesaxlinearheart-icon1"
          alt=""
          src="/vuesaxlinearheart.svg"
        />
        <div className="favorite1">Favorite</div>
        <img
          className="vuesaxlineartrash-icon1"
          alt=""
          src="/vuesaxlineartrash.svg"
        />
        <div className="remove1">Remove</div>
      </div>
      <section className="cart-content-wrapper">
        <div className="cart-content">
          <CartItemDetails />
          <Subtotal />
          <div className="similar-products">
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
              onFrameContainerClick1={onProductDetailsContainerClick}
            />
            <Component
              lux22="/lux2-2@2x.png"
              vintageVesper="Vintage Vesper"
              prop="650,000.00"
              propHeight="unset"
              propWidth="unset"
              propFlex="1"
              propMinWidth="300px"
              onFrameContainerClick1={onProductDetailsContainerClick}
            />
            <Component2
              lux21="/lux2-1-1@2x.png"
              epochElegance="Epoch Elegance"
              propFlex="1"
              propMinWidth="300px"
              propWidth="unset"
              onFrameContainerClick1={onProductDetailsContainerClick}
            />
          </div>
        </div>
      </section>
      <ModernWithNewsletterDark1
        vuesaxlineararrowUp="/vuesaxlineararrowup@2x.png"
        onFrameContainerClick={onCompanyContainerClick}
      />
    </div>
  );
};

export default CheckOut;
