import React from "react";
import Products from "./components/Products";
import CartItems from "./components/CartItems";


export default function Home() {

  return (
  <main className="container lg:p-12 p-8 grid lg:grid-cols-4 gap-4 grid-cols-1">
   <Products/>
   <CartItems/>
  </main>
  );
}
