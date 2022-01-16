import React, { useState, useEffect } from "react";

function Footer() {
  const [aboutMenu, setaboutMenu] = useState(false);
  const [careerMenu, setcareerMenu] = useState(false);
  const [socialMenu, setsocialMenu] = useState(false);
  const [partnersMenu, setpartnersMenu] = useState(false);
  const [orderMenu, setorderMenu] = useState(false);

  useEffect(() => {
    const size = window.innerWidth;
    if (size > 900) {
      setaboutMenu(true);
      setcareerMenu(true);
      setsocialMenu(true);
      setpartnersMenu(true);
      setorderMenu(true);
    }
  }, []);

  return (
    <main className="footer-container">
      <div className="footer">
        <section className="about">
          <div onClick={() => setaboutMenu(!aboutMenu)}>
            <h3>About Starbucks</h3>
            <i
              className={
                aboutMenu ? "fas fa-chevron-down rotate" : "fas fa-chevron-down"
              }
            ></i>
          </div>
          <ul className={aboutMenu ? "aboutmenu" : "aboutmenu hide"}>
            <li>Our Company</li>
            <li>Our Coffee</li>
            <li>Stories and News</li>
            <li>Investor Relations</li>
            <li>Customer Service</li>
          </ul>
        </section>

        <section className="career">
          <div onClick={() => setcareerMenu(!careerMenu)}>
            <h3>Careers</h3>
            <i
              className={
                careerMenu
                  ? "fas fa-chevron-down rotate"
                  : "fas fa-chevron-down"
              }
            ></i>
          </div>
          <ul className={careerMenu ? "careermenu" : "careermenu hide"}>
            <li>Culture and Values</li>
            <li>Diversity and Inclusion</li>
            <li>Work at Starbucks</li>
            <li>Corporate Careers</li>
            <li>Retail Careers</li>
          </ul>
        </section>

        <section className="social">
          <div onClick={() => setsocialMenu(!socialMenu)}>
            <h3>Social Impact</h3>
            <i
              className={
                socialMenu
                  ? "fas fa-chevron-down rotate"
                  : "fas fa-chevron-down"
              }
            ></i>
          </div>
          <ul className={socialMenu ? "socialmenu" : "socialmenu hide"}>
            <li>Overview</li>
            <li>People</li>
            <li>Planet</li>
            <li>Environmental and Social Impact Reporting</li>
          </ul>
        </section>

        <section className="partners">
          <div onClick={() => setpartnersMenu(!partnersMenu)}>
            <h3>For Business Partners</h3>
            <i
              className={
                partnersMenu
                  ? "fas fa-chevron-down rotate"
                  : "fas fa-chevron-down"
              }
            ></i>
          </div>
          <ul className={partnersMenu ? "partnersmenu" : "partnersmenu hide"}>
            <li>Corporate Gift Card Sales</li>
            <li>Branded Solutions</li>
          </ul>
        </section>

        <section className="order">
          <div onClick={() => setorderMenu(!orderMenu)}>
            <h3>Order and Pickup</h3>
            <i
              className={
                orderMenu ? "fas fa-chevron-down rotate" : "fas fa-chevron-down"
              }
            ></i>
          </div>
          <ul className={orderMenu ? "ordermenu" : "ordermenu hide"}>
            <li>Order on the App</li>
            <li>Order on the Web</li>
            <li>Delivery</li>
            <li>Order and Pickup Options</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Footer;
