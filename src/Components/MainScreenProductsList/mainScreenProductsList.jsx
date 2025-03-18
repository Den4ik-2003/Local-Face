import "./mainScreenProductsList.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MainScreenProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [likes, setLikes] = useState({});
  const [basket, setBasket] = useState({});

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

  useEffect(() => {
    const savedBasket = localStorage.getItem("basket");
    if (savedBasket) {
      setBasket(JSON.parse(savedBasket));
    }
  }, []);

  useEffect(() => {
    const savedLikes = localStorage.getItem("favorites");
    if (savedLikes) {
      setLikes(JSON.parse(savedLikes));
    }
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<img src="./icons/star1.svg" alt="star" key={i} />);
      } else {
        stars.push(<img src="./icons/star2.svg" alt="star" key={i} />);
      }
    }
    return stars;
  };

  const toggleLike = (id) => {
    setLikes((prevLikes) => {
      const newLikes = { ...prevLikes };
      if (newLikes[id]) {
        delete newLikes[id];
      } else {
        newLikes[id] = {
          quantity: 1,
          id: products.find((p) => p.id === id).id,
          name: products.find((p) => p.id === id).name,
          price: products.find((p) => p.id === id).price,
          raiting: products.find((p) => p.id === id).raiting,
          numberGrades: products.find((p) => p.id === id).numberGrades,
          image: products.find((p) => p.id === id).image,
        };
      }
      localStorage.setItem("favorites", JSON.stringify(newLikes));

      return newLikes;
    });
  };

  const toggleBasket = (id) => {
    setBasket((prevBasket) => {
      const newBasket = { ...prevBasket };
      if (newBasket[id]) {
        delete newBasket[id]; 
      } else {
        newBasket[id] = {
          quantity: 1,
          id: products.find((p) => p.id === id).id,
          name: products.find((p) => p.id === id).name,
          price: products.find((p) => p.id === id).price,
          raiting: products.find((p) => p.id === id).raiting,
          numberGrades: products.find((p) => p.id === id).numberGrades,
          image: products.find((p) => p.id === id).image,
        };
      }
      localStorage.setItem("basket", JSON.stringify(newBasket));

      return newBasket;
    });
  };

  const getBasketQuantity = (id) => {
    return basket[id] ? basket[id].quantity : 0;
  };

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
        {products.map((product) => (
          <li className="fourScreenHomeCard" key={product.id}>
            <p>
              <img
                className="mainScreenProductsListImage"
                src={product.image}
                alt={product.name}
              />
            </p>
            <h2>{product.name}</h2>
            <div className="fourScreenHomeText">
              <div className="stars">{renderStars(product.raiting)}</div>
              <p>({product.numberGrades})</p>
            </div>
            <div className="fourScreenHomeText">
              <p>${product.price}.00</p>
              <p>100ml</p>
              <img
                src={
                  likes[product.id]
                    ? "./icons/likeFill.svg"
                    : "./icons/like.svg"
                }
                alt="Like"
                onClick={() => toggleLike(product.id)} 
              />
              <div>
                <img
                  src={
                    basket[product.id]
                      ? "./icons/basketFill.svg"
                      : "./icons/basket.svg"
                  }
                  alt="Basket"
                  onClick={() => toggleBasket(product.id)} 
                />
               
              </div>
            </div>
            <div className="mainScreenProductsListFlex">
              <Link className="mainScreenProductsListBtnContainer" to={`/product/${product.id}`}>
                <input
                  type="button"
                  className="mainScreenProductsListBtn"
                  value="Details"
                />
              </Link>
              <Link className="mainScreenProductsListBtnContainer" to={`/basket`}>
                <input
                  type="button"
                  className="mainScreenProductsListBtn"
                  value="Buy" onClick={() => toggleBasket(product.id)}
                />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainScreenProductsList;
