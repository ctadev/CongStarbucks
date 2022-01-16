import React from "react";
import Nav from "../components/globalComponents/Nav";
import Body from "../components/homeComponents/Body";
import Body2 from "../components/homeComponents/Body2";
import Body3 from "../components/homeComponents/Body3";
import Body4 from "../components/homeComponents/Body4";
import Disc from "../components/homeComponents/Disclamer";
import Footer from "../components/globalComponents/Footer";
import Socials from "../components/globalComponents/Socials";

function Home() {
  return (
    <div className="home-container">
      <Nav />
      <Body />
      <Body2 />
      <Body3 />
      <Body4 />
      <Disc />
      <Footer />
      <Socials />
    </div>
  );
}

export default Home;
