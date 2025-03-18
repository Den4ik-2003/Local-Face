import React, { useEffect, useState } from "react";
import axios from "axios";
import "./fourScreenHome.css";

const FourScreenHome = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 4 < products.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const displayedProducts = products.slice(currentIndex, currentIndex + 4);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="fourScreenHome">
      <h1>Best selling products</h1>
      <ul className="fourScreenHomeCards">
        <img
          className="fourScreenHomeArrow"
          src="./icons/arrowLeft.png"
          alt="left arrow"
          onClick={handlePrev}
        />
        {displayedProducts.map((product) => (
          <li className="fourScreenHomeCard" key={product.id}>
            <p>
              <img src={product.image} alt={product.name} />
            </p>
            <h2>{product.name}</h2>
            <div className="fourScreenHomeText">
              <p>${product.price}.00</p>
              <p>100ml</p>
            </div>
          </li>
        ))}
        <img
          className="fourScreenHomeArrow"
          src="./icons/arrowRight.png"
          alt="right arrow"
          onClick={handleNext}
        />
      </ul>
    </div>
  );
};

export default FourScreenHome;    

