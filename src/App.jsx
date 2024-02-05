/* eslint-disable react/no-unescaped-entities */
import "./App.scss";
import toOpen from "./assets/images/icon-menu.svg";
import toClose from "./assets/images/icon-close.svg";
import cart from "./assets/images/icon-cart.svg";
import profile from "./assets/images/image-avatar.png";
import minus from "./assets/images/icon-minus.svg";
import plus from "./assets/images/icon-plus.svg";
import { useState } from "react";
import prod1 from "./assets/images/image-product-1.jpg";
import prod2 from "./assets/images/image-product-2.jpg";
import prod3 from "./assets/images/image-product-3.jpg";
import prod4 from "./assets/images/image-product-4.jpg";
import trash from "./assets/images/icon-delete.svg";
import next from "./assets/images/icon-next.svg";
import previous from "./assets/images/icon-previous.svg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [add, setAdd] = useState(0);
  const [basket, setBasket] = useState(false);
  const [clicked, setClicked] = useState(0);

  const setImage = () => {
    const images = [prod1, prod2, prod3, prod4];
    const currentIndex = clicked % images.length;

    return images[currentIndex];
  };

  const prevImg = () => {
    setClicked(clicked - 1);
  };

  const nextImg = () => {
    setClicked(clicked + 1);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toMinus = () => {
    setValue(value - 1);
  };

  const toPlus = () => {
    setValue(value + 1);
  };

  const addInCart = () => {
    setAdd(value);
  };

  const getBasket = () => {
    setBasket(!basket);
  };

  return (
    <>
      <div className="page-content">
        <div className="top-bar d-flex justify-content-between mb-2">
          <div className="d-flex menu">
            <button className="btn" onClick={toggleMenu}>
              <img src={toOpen} />
            </button>
            <nav
              className={`${
                menuOpen === true ? "position-absolute nav" : "visually-hidden"
              }`}
            >
              <div className="nav-content fw-bold">
                <img src={toClose} className="toClose" onClick={toggleMenu} />
                <a href="">
                  <p>Collections</p>
                </a>
                <a href="">
                  <p>Men</p>
                </a>
                <a href="">
                  <p>Women</p>
                </a>
                <a href="">
                  <p>About</p>
                </a>
                <a href="">
                  <p>Contact</p>
                </a>
              </div>
            </nav>
            <h1 className="my-auto">sneakers</h1>
          </div>

          <div className="d-flex">
            <div className="my-auto">
              <p
                className={`d-flex justify-content-end add ${
                  add === 0 && "visually-hidden"
                }`}
              >
                {add}
              </p>
              <img
                className="cart my-auto"
                src={cart}
                onClick={getBasket}
              ></img>
            </div>
            <img className="profile my-auto mx-4" src={profile} />
          </div>
        </div>
        {basket && (
          <>
            <div className="basket position-absolute end-0 rounded-3">
              <div className="basket-content">
                <h2 className="my-2">Cart</h2>
                <div className="line"></div>
                <div className="goods container my-5">
                  <div className="row align-items-center">
                    <div className="col-3">
                      <img
                        src={prod1}
                        className="cart-img rounded-2"
                        alt="Product"
                      />
                    </div>

                    <div className="col-9 p-0 text">
                      <p className="my-0">Fall Limited Edition Sneakers</p>
                      <p className="my-0">
                        $125.00 x {add}{" "}
                        <span className="fw-bolder price">$375.00</span>
                      </p>
                    </div>
                    <div className="col-2 p-0 d-flex justify-content-center">
                      <img src={trash} className="trash"></img>
                    </div>
                  </div>
                </div>
                <button className="checkout rounded-3 justify-content-center mx-auto d-flex">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
        <div>
          <div className="position-absolute slider">
            <button onClick={prevImg}>
              <img src={previous} className="d-flex" />
            </button>
            <button onClick={nextImg}>
              <img src={next} className="d-flex" />
            </button>
          </div>
          <img src={setImage()} className="products position-relative" />
        </div>
        <div className="content mx-4">
          <p className="subtitle mt-4">SNEAKER COMPANY</p>
          <h1 className="my-3">Fall Limited Edition Sneakers</h1>
          <p className="description">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="container">
            <div className="row my-4">
              <p className="col p-0 new-price fs-1 my-auto">$125.00</p>
              <div className="col my-auto">
                {" "}
                <p className="p-0 discount text-center fs-5 fw-semibold my-auto">
                  50%
                </p>
              </div>
              <p className="col d-flex p-0 justify-content-end old-price fs-6 my-auto">
                <del>$250.00</del>
              </p>
            </div>
          </div>
          <div className="container big-button">
            <div className="row">
              <button className="col" onClick={toMinus}>
                <img src={minus}></img>
              </button>
              <div className="value col text-center">{value}</div>
              <button className="col" onClick={toPlus}>
                <img src={plus}></img>
              </button>
            </div>
          </div>
          <button
            className="add-to-cart py-3 mt-4 d-flex justify-content-center align-middle"
            onClick={() => addInCart(add)}
          >
            <img src={cart} className="cart-2" />
            <p className="mx-2 my-auto">Add to cart</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
