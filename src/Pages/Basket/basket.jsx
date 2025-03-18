import { useEffect, useState } from "react";
import "./basket.css";
import { Link } from "react-router-dom";

export default function Basket() {
  const [totalPrice, setTotalPrice] = useState(0);

  const savedBasket = JSON.parse(localStorage.getItem("basket"));
  const [basket, setBasket] = useState(savedBasket || {});

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

  const updateQuantity = (id, operation) => {
    const updatedBasket = { ...basket };
    const product = updatedBasket[id];

    if (product) {
      if (operation === "+" && product.quantity < 10) {
        product.quantity += 1;
      } else if (operation === "-" && product.quantity > 1) {
        product.quantity -= 1;
      }

      updatedBasket[id] = product;
      setBasket(updatedBasket);

      localStorage.setItem("basket", JSON.stringify(updatedBasket));
    } else {
      console.log(`Product with id ${id} not found`);
    }
  };

  if (
    !savedBasket ||
    typeof savedBasket !== "object" ||
    Object.keys(savedBasket).length === 0
  ) {
    return (
      <div className="basketNull">There are no products in your basket.</div>
    );
  }

  const products = Object.values(basket);
  useEffect(() => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].price * products[i].quantity;
    }
    setTotalPrice(total);
  }, [basket]);

  const deleteProduct = (id) => {
    const updatedBasket = { ...basket };
    delete updatedBasket[id];

    setBasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  const saveTotal = () => {
    localStorage.setItem("tottalPrice", JSON.stringify(totalPrice));
  }

  return (
    <div className="basket">
      <ul className="basketLists">
        {products.map((product, index) => (
          <li className="basketCard" key={index}>
            <p>
              <img
                className="basketImg"
                src={product.image}
                alt={product.name}
              />
            </p>
            <div>
              <h2>{product.name}</h2>
              <div className="basketHomeText">
                <div className="stars">
                  {renderStars(product.raiting)}
                  <p>({product.numberGrades})</p>
                </div>
              </div>
              <div className="basketHomeText">
                <p>${product.price}.00</p>
                <p>100ml</p>
              </div>
              <div className="basketHomeText">
                <p>Quantity:</p>
                <input
                  type="button"
                  value="+"
                  onClick={() => updateQuantity(product.id, "+")}
                />
                <p>{product.quantity}</p>
                <input
                  type="button"
                  value="-"
                  onClick={() => updateQuantity(product.id, "-")}
                />

                <img
                  className="basketDelete"
                  src="./icons/delete.svg"
                  alt="Delete"
                  onClick={() => deleteProduct(product.id)}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="basketOrder">
        <h1>Total: ${totalPrice}.00</h1>
        <Link to="/order">
          <input className="basketBtnBuy" type="button" value="BUY" onClick={saveTotal} />
        </Link>
      </div>
    </div>
  );
}
