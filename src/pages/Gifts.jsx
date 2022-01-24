import React from "react";
import GiftCards from "../components/giftsComponents/GiftCards";
import data from "../components/giftsComponents/fullcards";
import NavProducts from "../components/productsComponents/NavProducts";
import Got from "../components/giftsComponents/Got";
import data2 from "../components/giftsComponents/fullcards2";
import GiftCardTop from "../components/giftsComponents/GiftCardTop";
import OneCard from "../components/giftsComponents/OneCard";
import Footer from '../components/globalComponents/Footer';
import Socials from '../components/globalComponents/Socials';

function Gifts() {
  return (
    <main className="gifts-container">
      <NavProducts />
      <GiftCardTop title="FEATURED" opacity="1" data={data} />
      <Got />
      <GiftCards title="VALENTINE'S DAY" opacity="1" data={data2} />
      <OneCard title="LUNAR NEW YEAR" />
      <GiftCards title="WINTER" opacity="1" data={data} />
      <GiftCards title="BIRTHDAY" opacity="1" data={data2} />
      <GiftCards title="THANK YOU" opacity="1" data={data} />
      <OneCard title="APPRECIATION" />
      <GiftCards title="LOVE" opacity="1" data={data2} />
      <GiftCards title="ENCOURAGEMENT" opacity="1" data={data} />
      <OneCard title="RECOGNITION" />
      <GiftCards title="WORKPLACE" opacity="1" data={data2} />
      <GiftCards title="COMMUNITY" opacity="1" data={data} />
      <GiftCards title="ANYTIME" opacity="1" data={data2} />
      <Footer />
      <Socials />
    </main>
  );
}

export default Gifts;
