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

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [value, setValue] = useState(0);

  const toMinus = () => {
    setValue(value - 1);
  };

  const toPlus = () => {
    setValue(value + 1);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="page-content">
        <div className="top-bar d-flex justify-content-between">
          <div className="d-flex">
            <button className="btn" onClick={toggleMenu}>
              <img src={toOpen} />
            </button>
            <nav
              className={`${
                menuOpen === true ? "position-absolute nav" : "visually-hidden"
              }`}
            >
              <div className="nav-content">
                <img src={toClose} className="toClose" onClick={toggleMenu} />
                <a href="">Collections</a>
                <a href="">Men</a>
                <a href="">Women</a>
                <a href="">About</a>
                <a href="">Contact</a>
              </div>
            </nav>
            <h1 className="my-auto">sneakers</h1>
          </div>

          <div className="d-flex">
            <img className="cart my-auto" src={cart} />
            <img className="profile my-auto mx-4" src={profile} />
          </div>
        </div>
        <img src={prod1} className="products" />
        <div className="content mx-4">
          <p className="subtitle mt-2">SNEAKER COMPANY</p>
          <h2 className="my-3">Fall Limited Edition Sneakers</h2>
          <p className="description">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="container">
            <div className="row">
              <p className="col p-0 new-price">$125.00</p>
              <div className="col">
                {" "}
                <p className=" p-0 discount text-center">50%</p>
              </div>
              <p className="col d-flex p-0 justify-content-end old-price">
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
          <button className="add-to-cart py-3 mt-3 d-flex justify-content-center align-middle">
            <img src={cart} className="cart-2" />
            <p className="mx-2 my-auto">Add to cart</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
