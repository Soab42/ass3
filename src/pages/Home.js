import React from "react";
import Addproducts from "../components/Addproducts";
import Navbar from "../components/Navbar";
import Productlist from "../components/Productlist";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main class="py-16">
        <div class="productWrapper">
          <Productlist />
          <Addproducts />
        </div>
      </main>
    </>
  );
}
