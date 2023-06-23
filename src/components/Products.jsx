import React from "react";

function Products() {
  const cardWidth = {
    width: "18rem",
  };
  const cartData = [
    {
      id: 1,
      imgPath: "images/blackHoddie.jpg",
      heading: "Black Hoddie",
    },
    {
      id: 2,
      imgPath: "images/demo1.jpg",
      heading: "Demo 1",
    },
    {
      id: 3,
      imgPath: "images/demo2.jpg",
      heading: "Demo 2",
    },
    {
      id: 4,
      imgPath: "images/demo3.jpg",
      heading: "Demo 3",
    },
    {
      id: 5,
      imgPath: "images/demo4.jpg",
      heading: "Demo 4",
    },
    {
      id: 6,
      imgPath: "images/girlsBlaazzer.jpg",
      heading: "Girls Blaazer",
    },
    {
      id: 7,
      imgPath: "images/girlsJacket.jpg",
      heading: "Girls Jacket",
    },
    {
      id: 8,
      imgPath: "images/hoodie.jpg",
      heading: "Hoodie",
    },
    {
      id: 9,
      imgPath: "images/jacket.jpg",
      heading: "Jacket",
    },
    {
      id: 10,
      imgPath: "images/jeansJacket.jpg",
      heading: "Jeans Jacket",
    },
    {
      id: 11,
      imgPath: "images/onShirt.jpg",
      heading: "On Shirt",
    },
    {
      id: 12,
      imgPath: "images/WinterWear.jpg",
      heading: "Winter Wear",
    },
  ];

  const handleCartData = (card) => {
    console.log(card);
  };
  return (
    <>
      <div className="custom-card-container">
        <h3 className="py-3 mx-3">All Products Listing</h3>
        <div className="row m-3">
          {cartData.map((card) => (
            <div className="col-md-3 my-2" key={card.id}>
              <div className="card custom-card" style={cardWidth}>
                <img
                  src={card.imgPath}
                  className="card-img-top custom-image"
                  alt="..."
                />
                <div className="card-body">
                  <h1>{card.heading}</h1>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-dark w-100" onClick={() => handleCartData(card)}>Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
