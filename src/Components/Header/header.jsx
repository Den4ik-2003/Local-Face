import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="headerNav">
      <div className="headerFlex headerSpaceBetween">
        <NavLink to="/home">
          <img
            className="homeLogo"
            src="../images/logoLocalFace.svg"
            alt="Logo"
          />
        </NavLink>
        <ul className="headerFlex navigation">
          <li>
            <NavLink className="headerNavigation" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="headerNavigation" to="/productslist">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink className="headerNavigation" to="/aboutus">
              About us
            </NavLink>
          </li>
          <li>
            <NavLink className="headerNavigation" to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="headerNavigation" to="/blog">
              Blog
            </NavLink>
          </li>
        </ul>
        <ul className="headerFlexIcon headerImage">
          <li>
            <img src="../icons/search.svg" alt="Search" />
          </li>
          <li>
            <img src="../icons/profil.svg" alt="Profil" />
          </li>
          <li>
            <NavLink className="like" to="/favorites">
              <img src="../icons/like.svg" alt="Like" />
            </NavLink>
          </li>
          <li>
            <NavLink className="basket" to="/basket">
              <img src="../icons/basket.svg" alt="Basket" />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
