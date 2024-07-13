import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Component3 from "../components/Component3";
import Component2 from "../components/Component2";
import Component1 from "../components/Component1";
import Component from "../components/Component";
import ModernWithNewsletterDark from "../components/ModernWithNewsletterDark";
import "./Shop.css";
import axios from "axios";

const Shop = () => {
  const [displayedProducts, setDisplayedProducts] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1); 
  const productsPerPage = 10;

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

  const [products, setProducts] = useState([]);
  console.log(products);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `/products?organization_id=${process.env.REACT_APP_ORGANIZATION_ID}&Appid=${process.env.REACT_APP_APP_ID}&Apikey=${process.env.REACT_APP_API_KEY}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              Accept: "*/*",
              Connection: "keep-alive",
            },
            mode: "cors",
          }
        );

        const data = response.data;

        setProducts(data.items);
        setDisplayedProducts(data.items.slice(0, productsPerPage));
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };

    fetchProducts();
  }, []);
  const loadMoreProducts = () => {
    const newPage = currentPage + 1;
    const newDisplayedProducts = products.slice(0, newPage * productsPerPage);
    setDisplayedProducts(newDisplayedProducts);
    setCurrentPage(newPage);
  };
  return (
    <div className="shop1" id="shop">
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
                {displayedProducts.map((pro) => (
                  <Component3
                    key={pro.id}
                    // ="/lux2-1@2x.png"
                    lux21={`http://api.timbu.cloud/images/${pro.photos[0].url}`}
                    eternaClassic={pro.name}
                    prop={pro.current_price[0]?.NGN?.[0] ?? "650,000"}
                    onFrameContainerClick1={onFrameContainerClick}
                  />
                ))}
              </div>
              {displayedProducts.length < products.length && 
              ( <button onClick={loadMoreProducts} className="load-more-button"> Load More Products </button> )}
            </div>
          </div>
        </section>
      </main>
      <ModernWithNewsletterDark />
    </div>
  );
};

export default Shop;
