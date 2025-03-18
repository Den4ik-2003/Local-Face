import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./productDetail.css";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch product");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<img src="../icons/star1.svg" alt="star" key={i} />);
      } else {
        stars.push(<img src="../icons/star2.svg" alt="star" key={i} />);
      }
    }
    return stars;
  };

  return (
    <div className="productDetail">
      <div className="productDetailFlex">
        <img
          className="productDetailBigImage"
          src={"." + product.image}
          alt="Image"
        />
        <div>
          <h1>{product.name}</h1>
          <p>
            Step into a world of unparalleled opulence with Luxurious Elixir, an
            exquisite fragrance that weaves an enchanting symphony of gold and
            luxury. This gilded elixir is a celebration of sophistication,
            crafted with the finest essences and imbued with the allure of
            precious golden hues.
          </p>
          <div className="productDetailFlex">
            <div className="stars">{renderStars(product.raiting)}</div>
            <p>({product.numberGrades})</p>
          </div>
          <div className="productDetailFlex">
            <img
              className="productDetailSmallImage"
              src={"." + product.image}
              alt="Image"
            />
            <img
              className="productDetailSmallImage"
              src={"." + product.image}
              alt="Image"
            />
          </div>
          <h2>$ {product.price}.00</h2>
        </div>
      </div>
      <h1>Product Details</h1>
      <p>
        Step into a world of unparalleled opulence with Luxurious Elixir, an
        exquisite fragrance that weaves an enchanting symphony of gold and
        luxury. This gilded elixir is a celebration of sophistication, crafted
        with the finest essences and imbued with the allure of precious golden
        hues. From the first spritz to the lingering dry-down, Luxurious Elixir
        promises an intoxicating experience that embodies the essence of lavish
        indulgence.
      </p>
      <h1>The Golden Overture</h1>
      <p>
        Luxurious Elixir opens with a grand flourish of radiant citrus and
        sun-kissed fruits, reminiscent of golden rays caressing your senses. The
        opulent heart unfolds with a bouquet of velvety roses and rare blooms,
        their essence radiating with the allure of gilded petals. As the
        fragrance settles, a sumptuous blend of warm amber, creamy vanilla, and
        smooth sandalwood evokes a sense of ultimate luxury and refinement.
      </p>
      <h1>Key Notes</h1>
      <div className="productDetailFlex">
        <div className="productDetailCard">
          <h3>Top Note Citrus Accord, Sun-kissed Fruits</h3>
          <img
            className="imageInfo"
            src="../images/productDetail1.png"
            alt="Image"
          />
        </div>
        <div className="productDetailCard">
          <h3>Heart Note Golden Roses, Rare Blooms</h3>
          <img
            className="imageInfo"
            src="../images/productDetail2.png"
            alt="Image"
          />
        </div>
        <div className="productDetailCard">
          <h3>Base Note Amber, Vanilla, Sandalwood</h3>
          <img
            className="imageInfo"
            src="../images/productDetail3.png"
            alt="Image"
          />
        </div>
      </div>
      <h1>The Heart of Elegance</h1>
      <p>
        Luxurious Elixir is the embodiment of elegance, drawing you into a world
        where glamour and prestige unite. With every spritz, the fragrance
        weaves a tapestry of glistening gold around you, enhancing your allure
        and capturing the admiration of those around.
      </p>
      <h1>The Ultimate Expression of Luxury</h1>
      <p>
        Luxurious Elixir makes an extraordinary gift, an expression of your
        discerning taste and admiration for the extraordinary. Delight your
        loved ones with this lavish elixir, a symbol of admiration and
        adoration.
      </p>
      <h1 className="reviews">Reviews</h1>
      <div className="productDetailFlex spaceCenter">
        <div>
          <div className="productDetailFlex">
            <p className="stars2">5 stars</p>
            <div className="productDetailRaiting productDetailColor"></div>
            <p>100%</p>
          </div>  
          <div className="productDetailFlex">
            <p className="stars2">4 stars</p>
            <div className="productDetailRaiting"></div>
            <p>0%</p>
          </div>
          <div className="productDetailFlex">
            <p className="stars2">3 stars</p>
            <div className="productDetailRaiting"></div>
            <p>0%</p>
          </div>
          <div className="productDetailFlex">
            <p className="stars2">2 stars</p>
            <div className="productDetailRaiting"></div>
            <p>0%</p>
          </div>
          <div className="productDetailFlex">
            <p className="stars2">1 stars</p>
            <div className="productDetailRaiting"></div>
            <p>0%</p>
          </div>
        </div>

        <div>
          <div className="stars">{renderStars(product.raiting)}</div>
          <h1>{product.raiting} out of 5</h1>
          <p>99% OF REVIEWERS RECOMMEND THIS PRODUCT</p>
          <div className="raitingFlex">
            <p>90 reviews</p>
            <div>
              <img src="../icons/add.svg" alt="Icons" />
              <h3>Add a Review</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
