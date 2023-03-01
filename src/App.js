/* eslint-disable jsx-a11y/anchor-is-valid */
// import { Provider } from "react-redux";

import { useState } from "react";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import React from "react";

import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";
function App() {
  const [show, setshow] = useState(true);
  return (
    <Provider store={store}>
      <div>
        <Navbar setshow={setshow} />
        {show ? <Home /> : <Cart />}
      </div>
    </Provider>
  );
}

export default App;
