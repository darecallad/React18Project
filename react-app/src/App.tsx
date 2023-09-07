import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
  return (
    <>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </>
  );
}

export default App;
