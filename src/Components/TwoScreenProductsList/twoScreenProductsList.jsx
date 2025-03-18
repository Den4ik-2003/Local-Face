import "./twoScreenProductsList.css";

function TwoScreenProductsList() {
  return (
    <div className="twoScreenProductsList">
      <h1 className="twoScreenTitle">Special Offers</h1>
      <div className="twoScreenFlex">
        <img src="./images/twoScreenProductsList.jpg" alt="Image" />
        <div className="twoScreenFlexColumn">
          <h1 className="twoScreenTwoTitle">Limited Time Offer: 20% OFF on Aqua Serenity Perfume!</h1>
          <h1 className="twoScreenTwoTitle">Aqua Serenity </h1>
          <h2>Embrace the Tranquil Tides</h2>
          <div className="spot"></div>
          <p>
            Immerse yourself in the calming embrace of Aqua Serenity, a
            captivating fragrance that evokes the essence of water.
          </p>
          <input type="button" className="twoScreenProductsListBtn" value="Know More" />
        </div>
      </div>
    </div>
  );
}

export default TwoScreenProductsList;
