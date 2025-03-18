import "./fiveScreenHome.css";

function FiveScreenHome() {
  return (
    <div className="fiveScreenHome">
      <h1>Our Collections</h1>
      <div className="fiveScreenHomeGallery">
        <div className="fiveScreenHomeImage">
          <img src="./images/gallery1.jpg" alt="Image" />
          <p>Designer Delights Collection</p>
        </div>       
        <div className="fiveScreenHomeImage">
          <img src="./images/gallery3.jpg" alt="Image" />
          <p>Travel Essentials Collection</p>
        </div>
      </div>
      <div className="fiveScreenHomeGallery fiveScreenHomeGalleryTwo">
        <div className="fiveScreenHomeImage">
          <img src="./images/gallery2.jpg" alt="Image" />
          <p>Special Occasions Collection</p>
        </div>
        <div className="fiveScreenHomeImage">
          <img src="./images/gallery4.jpg" alt="Image" />
          <p>Seasonal Sensations Collection</p>
        </div>
      </div>
      <div className="fiveScreenHomeGallery">
        <div className="fiveScreenHomeImage">
          <img src="./images/gallery5.jpg" alt="Image" />
          <p>Vintage Treasures Collection</p>
        </div>
        <div className="fiveScreenHomeImage">
          <img src="./images/gallery6.jpg" alt="Image" />
          <p>Limited Edition Treasures</p>
        </div>
        <div className="fiveScreenHomeImage">
          <img src="./images/gallery7.jpg" alt="Image" />
          <p>Modern Classics Collection</p>
        </div>
      </div>
    </div>
  );
}

export default FiveScreenHome;
