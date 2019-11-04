import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

import { ProductContext } from "./contexts/ProductContext";
// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { CartContext } from "./contexts/CartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    // add the given item to the cart
    setCart([...cart, item]);
  };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <CartContext.Provider value={{ cart }}>
        <div className="App">
          <Navigation cart={cart} />

          {/* Routes */}
          <Route exact path="/" components={Products} />
          <Route
            path="/cart"
            components={Products}
            // render={() => <ShoppingCart cart={cart} />}
          />
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
