import "./thereeScreenProductsList.css";

function ThereeScreenProductsList() {
  return (
    <div className="thereeScreenProductsList">
      <div className="thereeScreenProductsListFlex">
        <div className="thereeScreenProducts">
          <div className="twoScreenFlexColumn">
            <h1 className="thereeScreenTwoTitle">
              Limited Time Offer: 25% OFF on Golden Angel Perfume!
            </h1>
            <h1 className="thereeScreenThereeTitle">Golden Angel </h1>
            <h2 className="thereeSreenProductsText">Unleash Your Divine Glow</h2>
            <div className="spot2"></div>
            <p>
              Indulge in the divine allure of Golden Angel, a fragrance that
              embodies celestial elegance and radiance.
            </p>
            <input
              type="button"
              className="thereeScreenProductsListBtn"
              value="Know More"
            />
          </div>
        </div>
        <img src="./images/thereeScreenProductsList.jpg" alt="Image" />
      </div>
    </div>
  );
}

export default ThereeScreenProductsList;
