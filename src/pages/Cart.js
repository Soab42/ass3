import React from "react";
import Minicard from "../components/Minicard";
import Billboard from "../components/Billboard";
import Navbar from "../components/Navbar";

export default function Cart() {
  return (
    <>
      {/* <Navbar /> */}
      <main class="py-16">
        <div class="container 2xl:px-8 px-2 mx-auto">
          <h2 class="mb-8 text-xl font-bold">Shopping Cart</h2>
          <div class="cartListContainer">
            <div class="space-y-6">
              <Minicard />
            </div>
            <Billboard />
          </div>
        </div>
      </main>
    </>
  );
}
