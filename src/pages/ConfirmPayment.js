import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopNavigation from "../components/TopNavigation";
import Breadcrumb from "../components/Breadcrumb";
import ModernWithNewsletterDark1 from "../components/ModernWithNewsletterDark1";
import "./ConfirmPayment.css";

const ConfirmPayment = () => {
  const navigate = useNavigate();

  const onCompanyContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="confirm-payment">
      <TopNavigation />
      <div className="luxury-1-1-container">
        <img className="luxury-1-12" alt="" src="/luxury-1-1@2x.png" />
        <div className="watch2">Watch</div>
        <div className="id-100012">ID 10001</div>
        <div className="vuesaxlinearminus-frame">
          <img
            className="vuesaxlinearminus-icon2"
            alt=""
            src="/vuesaxlinearminus.svg"
          />
        </div>
        <div className="frame">
          <div className="div4">1</div>
        </div>
        <div className="vuesaxlinearadd-frame">
          <img
            className="vuesaxlinearadd-icon2"
            alt=""
            src="/vuesaxlinearadd.svg"
          />
        </div>
        <img className="vector-icon3" alt="" src="/vector1.svg" />
        <div className="div5">35,000.00</div>
        <div className="line-div" />
        <img
          className="vuesaxlinearheart-icon2"
          alt=""
          src="/vuesaxlinearheart.svg"
        />
        <div className="favorite2">Favorite</div>
        <img
          className="vuesaxlineartrash-icon2"
          alt=""
          src="/vuesaxlineartrash.svg"
        />
        <div className="remove2">Remove</div>
      </div>
      <section className="content">
        <Breadcrumb />
      </section>
      <ModernWithNewsletterDark1
        vuesaxlineararrowUp="/vuesaxlineararrowup1@2x.png"
        onFrameContainerClick={onCompanyContainerClick}
      />
    </div>
  );
};

export default ConfirmPayment;
