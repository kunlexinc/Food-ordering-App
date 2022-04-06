import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";



function App() {
  const [certIsShown,setCertIsShown] = useState(false)
  
const showCartHandler = ()=>{
  setCertIsShown(true)
}

const hideCartHandler = ()=>{
  setCertIsShown(false)
}

  return (
    <CartProvider>

      {certIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
