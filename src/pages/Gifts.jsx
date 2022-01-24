import React from "react";
import GiftCards from "../components/giftsComponents/GiftCards";
import data from "../components/giftsComponents/fullcards";
import NavProducts from '../components/productsComponents/NavProducts';

function Gifts() {
  return (
    <main className="gifts-container">
      <NavProducts />
      <GiftCards title="FEATURED" opacity="1" data={data} />
    </main>
  );
}

export default Gifts;
