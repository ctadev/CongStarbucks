import React, { useState } from "react";
import logo from "../../styles/img/logo.svg";
import marker from "../../styles/img/marker.svg";
import { Link } from "react-router-dom";

function Nav() {
  const [toggleNav, settoggleNav] = useState(false);
  const [toggleNav2, settoggleNav2] = useState(false);
  return (
    <nav>
      <main className="nav-container">
        <section className="nav-left">
          <div className="nav-logo">
            <Link to="/">
              <img src={logo} alt="starbucks logo" />
            </Link>
          </div>
        </section>

        <section className={toggleNav ? "nav-right" : "nav-right hide"}>
          <div className="nav-menu">
            <div className="menu">
              <div className="menu1" onClick={() => settoggleNav2(!toggleNav2)}>
                <Link to="/menu" className="menu-link">
                  <h1>Menu</h1>
                </Link>
                <span>
                  <i className="fas fa-chevron-right"></i>
                </span>
              </div>
              <ul
                className={toggleNav2 ? "products-menu" : "products-menu hide"}
              >
                <div
                  className="menu2"
                  onClick={() => settoggleNav2(!toggleNav2)}
                >
                  <span>
                    <i className="fas fa-chevron-left"></i>
                  </span>
                  <h1>Menu</h1>
                </div>
                <li>All products</li>
                <li>Featured</li>
                <li>Previous</li>
                <li>Favourites</li>
              </ul>
            </div>
            <div className="reward-div">
              <Link to="/rewards" className="reward-link">
                <h1>Rewards</h1>
              </Link>
            </div>
            <div className="gift-div">
              <Link to="/giftcards" className="gift-link">
                <h1>Gift Cards</h1>
                </Link>
            </div>
            <span className="divider"></span>
          </div>
          <section className="nav-btn-container">
            <div className="nav-buttons">
              <button className="sign-btn">Sign in</button>
              <button className="join-btn">Join now</button>
            </div>
            <div className="find-store">
              <img src={marker} alt="marker" />
              <h2>Find a store</h2>
            </div>
          </section>
        </section>

        <button className="hamburger" onClick={() => settoggleNav(!toggleNav)}>
          <span className={toggleNav ? "ham-top nav-open" : "ham-top"}></span>
          <span
            className={toggleNav ? "ham-middle nav-open" : "ham-middle"}
          ></span>
          <span
            className={toggleNav ? "ham-bottom nav-open" : "ham-bottom"}
          ></span>
        </button>
      </main>
    </nav>
  );
}

export default Nav;
