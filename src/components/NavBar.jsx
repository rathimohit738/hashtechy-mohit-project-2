import React from "react";

function NavBar({ loggedIn, onShowCart }) {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            Hashtechy
          </a>

          {loggedIn && (
          <a>
            <button className="btn btn-primary pull-right" onClick={onShowCart}>My Cart</button>
          </a>
        )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
