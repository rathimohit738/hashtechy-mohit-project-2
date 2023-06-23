import React, { useState } from "react";
import './App.css';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';
import Products from './components/Products';
import CartItems from './components/CartItems';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showMyCart, setShowMyCart] = useState(false);

  const handleLogin = () => {
    // Set loggedIn to true when login is successful
    setLoggedIn(true);
    
  };

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleShowMyCart = () => {
    setShowMyCart(true);
  };
  return (
    <>
      <NavBar loggedIn={loggedIn} onShowMyCart={handleShowMyCart} />
      {loggedIn ? (
        showCart ? (
          <CartItems />
        ) : (
          <Products onShowCart={handleShowCart} />
        )
      ) : (
        <LogIn onLogin={handleLogin} />
      )}
    </>
    
  );


}


export default App;
