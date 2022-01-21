import React from "react";
import Menu from "../components/productsComponents/Menu";
import Footer from "../components/globalComponents/Footer";
import Socials from "../components/globalComponents/Socials";
import MenuNav from "../components/productsComponents/MenuNav";
import NavProduct from "../components/productsComponents/NavProducts";

function Products() {
  return (
    <main className="products-container">
      <NavProduct />
      <MenuNav />
      <Menu />
      <Footer />
      <Socials />
    </main>
  );
}

export default Products;
