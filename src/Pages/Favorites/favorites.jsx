import { Link } from "react-router-dom";
import "./favorites.css";

export default function Favorites() {
  const savedBasket = JSON.parse(localStorage.getItem("favorites"));
  if (!savedBasket || typeof savedBasket !== "object") {
    return <div className="favoritesNull">There are no products in your basket.</div>;
  }

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

  const products = Object.values(savedBasket);

  return (
    <div className="favorites">
      <ul className="favoritesLists">
        {products.map((product, index) => (
          <li className="favoritesCard" key={index}>
            <p className="favoritesImage">
              <img
                className="favoritesImg"
                src={product.image}
                alt={product.name}
              />
            </p>
            <div>
              <h2>{product.name}</h2>
              <div className="favoritesHomeText">
                <div className="stars">
                  {renderStars(product.raiting)}
                  <p>({product.numberGrades})</p>
                </div>
              </div>
              <div className="favoritesHomeText">
                <p>${product.price}.00</p>
                <p>100ml</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
