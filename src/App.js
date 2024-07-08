import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductView from "./pages/ProductView";
import Shop from "./pages/Shop";
import CheckOut from "./pages/CheckOut";
import ConfirmPayment from "./pages/ConfirmPayment";
import LuxuryLabelComponent1 from "./components/LuxuryLabelComponent1";
import LuxuryLabelComponent2 from "./components/LuxuryLabelComponent2";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/product-view":
        title = "";
        metaDescription = "";
        break;
      case "/shop":
        title = "";
        metaDescription = "";
        break;
      case "/check-out":
        title = "";
        metaDescription = "";
        break;
      case "/confirm-payment":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product-view" element={<ProductView />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/check-out" element={<CheckOut />} />
      <Route path="/confirm-payment" element={<ConfirmPayment />} />
    </Routes>
  );

  const App = () => {
    return (
      <div>
        <LuxuryLabelComponent1 className="luxury-label-1" favoriteIcon="/icon1.png" />
        <LuxuryLabelComponent2 className="luxury-label-2" favoriteIcon="/icon2.png" />
      </div>
    );
  };
}
export default App;
