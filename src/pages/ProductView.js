import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/FrameComponent3";
import ProductInfo from "../components/ProductInfo";
import ItemsContainer from "../components/ItemsContainer";
import ModernWithNewsletterDark1 from "../components/ModernWithNewsletterDark1";
import "./ProductView.css";

const ProductView = () => {
  const navigate = useNavigate();

  const onCompanyContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  return (
    <div className="product-view">
      <FrameComponent3 />
      <div className="luxury-1-1-parent">
        <img className="luxury-1-1" alt="" src="/luxury-1-1@2x.png" />
        <div className="watch">Watch</div>
        <div className="id-10001">ID 10001</div>
        <div className="vuesaxlinearminus-wrapper">
          <img
            className="vuesaxlinearminus-icon"
            alt=""
            src="/vuesaxlinearminus.svg"
          />
        </div>
        <div className="wrapper">
          <div className="div">1</div>
        </div>
        <div className="vuesaxlinearadd-wrapper">
          <img
            className="vuesaxlinearadd-icon"
            alt=""
            src="/vuesaxlinearadd.svg"
          />
        </div>
        <img className="vector-icon" alt="" src="/vector1.svg" />
        <div className="div1">35,000.00</div>
        <div className="frame-child" />
        <img
          className="vuesaxlinearheart-icon"
          alt=""
          src="/vuesaxlinearheart.svg"
        />
        <div className="favorite">Favorite</div>
        <img
          className="vuesaxlineartrash-icon"
          alt=""
          src="/vuesaxlineartrash.svg"
        />
        <div className="remove">Remove</div>
      </div>
      <div className="vuesaxlineararrow-right-wrapper">
        <img
          className="vuesaxlineararrow-right-icon"
          loading="lazy"
          alt=""
          src="/vuesaxlineararrowright1@2x.png"
        />
      </div>
      <section className="product-details-container-wrapper">
        <div className="product-details-container">
          <ProductInfo />
          <div className="similar-items-wrapper">
            <h1 className="similar-items">Similar Items</h1>
          </div>
          <ItemsContainer />
        </div>
      </section>
      <ModernWithNewsletterDark1
        vuesaxlineararrowUp="/vuesaxlineararrowup@2x.png"
        onFrameContainerClick={onCompanyContainerClick}
      />
    </div>
  );
};

export default ProductView;
