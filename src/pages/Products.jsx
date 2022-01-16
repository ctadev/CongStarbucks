import React from "react";
import NavProducts from "../components/productsComponents/NavProducts";
import Menu from "../components/productsComponents/Menu";
import Footer from "../components/globalComponents/Footer";
import Socials from "../components/globalComponents/Socials";
import MenuNav from "../components/productsComponents/MenuNav";

function Products() {
  return (
    <main className="products-container">
      <NavProducts />
      <MenuNav />
      <Menu />
      <Footer />
      <Socials />
    </main>
  );
}

export default Products;
