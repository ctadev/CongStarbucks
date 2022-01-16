import React from "react";
import facebook from "../../styles/img/social-facebook.svg";
import twitter from "../../styles/img/social-twitter.svg";
import instagram from "../../styles/img/social-instagram.svg";

function Socials() {
  return (
    <main className="social-container">
      <div className="inner-container">
        <section className="icons">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="facebook" />
          <img src={twitter} alt="facebook" />
        </section>

        <section className="terms">
          <p className="p1">Privacy Statement</p>
          <p className="p2">Term of Use</p>
          <p className="p3">Partners</p>
        </section>

        <section className="copyright">
          <h3>Passer au site francais</h3>
          <p>© 2020 Starbucks Coffee Company. All rights reserved.</p>
        </section>
      </div>
    </main>
  );
}

export default Socials;
