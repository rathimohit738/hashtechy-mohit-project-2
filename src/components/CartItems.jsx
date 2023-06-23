import React from "react";

function CartItems() {
  return (
    <>
      <div className="my-cart-items-container vh-100">
        <h3 className="text-center pt-3">My Cart</h3>
        <div className="container mt-3">
          <div className="row justify-content-between">
            <div className="col-md-6">
              <h3>Name</h3>
            </div>
            <div className="col-md-2">
              <h3>Price</h3>
            </div>
            <div className="col-md-2">
              <h3>Quantity</h3>
            </div>
          </div>
          <div className="row my-3 justify-content-between">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-3">
                  <img
                    src="images/demo1.jpg"
                    className="my-cart-image"
                    alt=""
                  />
                </div>
                <div className="col-md-9">
                  <div className="my-cart-item-lable">
                    <h4>Demo 1</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Sit modi quia soluta esse, asperiores quod.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 d-flex align-items-center">
              <h4>250</h4>
            </div>
            <div className="col-md-2 d-flex align-items-center">
              <button className="btn btn-secondary counter-btn">
                <strong>-</strong>
              </button>
              <label htmlFor="" className="item-count">
                3
              </label>
              <button className="btn btn-secondary counter-btn">
                <strong>+</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItems;
