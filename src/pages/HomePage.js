import { useCallback } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import ModernWithNewsletterDark1 from "../components/ModernWithNewsletterDark1";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const onShopNowButtonClick = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  return (
    <div className="home-page">
      <FrameComponent3 />
      <section className="slogan-content-wrapper">
        <div className="slogan-content">
          <div className="timeless-elegance-on-your-wris-parent">
            <h1 className="timeless-elegance-on">
              Timeless Elegance on Your Wrist
            </h1>
            <h1 className="discover-our-curated">
              Discover our curated collection of premium wristwatches that blend
              sophistication with craftsmanship.
            </h1>
          </div>
          <div className="shop-now-button" onClick={onShopNowButtonClick}>
            <h2 className="shop">SHOP</h2>
          </div>
        </div>
      </section>
      <FrameComponent2 />
      <FrameComponent1 />
      <ModernWithNewsletterDark1 vuesaxlineararrowUp="/vuesaxlineararrowup@2x.png" />
    </div>
  );
};

export default HomePage;
