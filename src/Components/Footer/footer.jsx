import React, { useState } from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");

  const handleClick = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    if (emailPattern.test(email)) {
      setEmail("");
      alert(`Receive thank you letters in your email for subscribing ${email}`);
    } else {
      alert("Invalid email (Example: info@gmail.com)");
    }
  };

  return (
    <nav className="footer">
      <ul className="footerFirstList">
        <li>
          <NavLink to="/home">
            <img src="../images/logoLocalFaceFooter.png" alt="Logo" />
          </NavLink>
        </li>
        <li className="footerTitle">Subscribe to Our Newsletter:</li>
        <li>Receive Updates on New Arrivals and Special Promotions!</li>
        <li>
          <input
            type="text"
            className="footerSubmit"
            placeholder="Your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="button"
            onClick={handleClick}
            className="footerBtn"
            value="Submit"
          />
        </li>
        <li className="footerSocialNetworks">
          <a href="https://x.com/">
            <img
              className="socialNetworks"
              src="../icons/footerTwitter.png"
              alt="Icons"
            />
          </a>
          <a href="https://www.facebook.com/ITstepUkraine/?locale=uk_UA">
            <img
              className="socialNetworks"
              src="../icons/footerFacebook.png"
              alt="Icons"
            />
          </a>
          <a href="https://www.linkedin.com/in/%D0%B4%D0%B5%D0%BD%D0%B8%D1%81-%D1%80%D0%BE%D0%BC%D0%B0%D0%BD%D0%B8%D1%88%D0%B8%D0%BD-029460257/">
            <img
              className="socialNetworks"
              src="../icons/footerLinkedin.png"
              alt="Icons"
            />
          </a>
          <a href="https://www.instagram.com/__d.e.n.4.i.k__21?igsh=MXZuenVodWhsdGk5Yg%3D%3D&utm_source=qr">
            <img
              className="socialNetworks"
              src="../icons/footerInstagram.png"
              alt="Icons"
            />
          </a>
        </li>
      </ul>
      <div className="footerTwo">
        <ul className="footerTwoList">
          <li className="footerTwoListText footerTwoListTextActive">
            Categories
          </li>
          <li>
            <NavLink className="footerTwoListText" to="/fashion">
              Fashion
            </NavLink>
          </li>
          <li>
            <NavLink className="footerTwoListText" to="/jewerly">
              Jewerly
            </NavLink>
          </li>
          <li>
            <NavLink className="footerTwoListText" to="/sports">
              Sports
            </NavLink>
          </li>
          <li>
            <NavLink className="footerTwoListText" to="/electronics">
              Electronics
            </NavLink>
          </li>
          <li>
            <NavLink className="footerTwoListText" to="/indoor">
              Indoor
            </NavLink>
          </li>
        </ul>
        <ul className="footerTwoList">
          <li className="footerTwoListText footerTwoListTextActive">
            Shopping
          </li>

          <li>
            <NavLink className="footerTwoListText" to="/fashion">
              Payments
            </NavLink>
          </li>
          <li>
            <NavLink className="footerTwoListText" to="/deliveryOptions">
              Delivery options
            </NavLink>
          </li>
          <li>
            <NavLink className="footerTwoListText" to="/buyerProtection">
              Buyer protection
            </NavLink>
          </li>
        </ul>
        <ul className="footerTwoList">
          <li className="footerTwoListText footerTwoListTextActive">
            Customer care
          </li>
          <li>
            <NavLink className="footerTwoListText" to="/helpCenter">
              Help center
            </NavLink>
          </li>
          <li>
            <NavLink className="footerTwoListText" to="/termsConditions">
              Terms & Conditions
            </NavLink>
          </li>
          <li>
            <NavLink className="footerTwoListText" to="/privacyPolicy">
              Privacy policy
            </NavLink>
          </li>
          <li>
            <NavLink className="footerTwoListText" to="/returnsRefund">
              Returns & refund
            </NavLink>
          </li>
          <li>
            <NavLink className="footerTwoListText" to="/surveyFeedback">
              Survey & feedback
            </NavLink>
          </li>
        </ul>
        <ul className="footerTwoList">
          <li className="footerTwoListText footerTwoListTextActive">Pages</li>
          <li>
            <NavLink className="footerTwoListText" to="/aboutUs">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className="footerTwoListText" to="/productslist">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink className="footerTwoListText" to="/contactUs">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink className="footerTwoListText" to="/services">
              Services Blog
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );

  
}

export default Footer;

