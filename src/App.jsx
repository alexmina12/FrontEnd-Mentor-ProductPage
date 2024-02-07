/* eslint-disable react/no-unescaped-entities */
import "./App.scss";
import toOpen from "./assets/images/icon-menu.svg";
import toClose from "./assets/images/icon-close.svg";
import cart from "./assets/images/icon-cart.svg";
import profile from "./assets/images/image-avatar.png";
import minus from "./assets/images/icon-minus.svg";
import plus from "./assets/images/icon-plus.svg";
import { useEffect, useState } from "react";
import prod1 from "./assets/images/image-product-1.jpg";
import prod2 from "./assets/images/image-product-2.jpg";
import prod3 from "./assets/images/image-product-3.jpg";
import prod4 from "./assets/images/image-product-4.jpg";
import trash from "./assets/images/icon-delete.svg";
import next from "./assets/images/icon-next.svg";
import previous from "./assets/images/icon-previous.svg";
import logo from "./assets/images/logo.svg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [add, setAdd] = useState(0);
  const [basket, setBasket] = useState(false);
  const [clicked, setClicked] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    if (value > 0) {
      setValue(value - 1);
    }
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
      <div className="page-content container">
        <div className="top-bar d-flex justify-content-between mb-2 row">
          <div className="d-flex menu col-md-9 col m-0 p-0">
            {isMobile ? (
              <>
                <button className="menu" onClick={toggleMenu}>
                  <img src={toOpen} />
                </button>
                <nav
                  className={`${
                    menuOpen === true
                      ? "position-absolute nav"
                      : "visually-hidden"
                  }`}
                >
                  <div className="nav-content fw-bold">
                    <img
                      src={toClose}
                      className="toClose"
                      onClick={toggleMenu}
                    />
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
                <img src={logo} alt="logo" className="my-auto logo"></img>
              </>
            ) : (
              <>
                <img src={logo} alt="logo" className="my-auto logo"></img>
                <nav
                  className={`${
                    menuOpen === true && isMobile
                      ? "position-absolute nav w-25"
                      : "pc-nav col my-auto w-auto text-center"
                  }`}
                >
                  <div
                    className={`fw-bold ${
                      menuOpen === true && isMobile
                        ? "nav-content "
                        : "pc-nav-content"
                    }`}
                  >
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
              </>
            )}
          </div>

          <div className="d-flex col-md-3 col justify-content-end">
            <div className="my-auto cart-top">
              <p
                className={`d-flex justify-content-end add ${
                  add === 0 && "visually-hidden"
                }`}
              >
                {add}
              </p>
              <img
                className="cart my-auto d-flex mx-3"
                src={cart}
                onClick={getBasket}
              ></img>
            </div>
            <img className="profile my-auto" src={profile} />
          </div>
        </div>
        {basket && (
          <>
            <div className="basket position-absolute end-0 rounded-3">
              <div className="basket-content">
                <h5 className="my-3 mx-2">Cart</h5>
                <div className="line"></div>
                {add > 0 ? (
                  <>
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
                            <span className="fw-bolder price">
                              ${125 * add}.00
                            </span>
                          </p>
                        </div>
                        <div className="col-2 p-0 d-flex justify-content-center">
                          <img
                            src={trash}
                            className="trash"
                            onClick={() => setAdd(0)}
                          ></img>
                        </div>
                      </div>
                    </div>
                    <button className="checkout rounded-3 justify-content-center mx-auto d-flex">
                      Checkout
                    </button>
                  </>
                ) : (
                  <>
                    <div className="d-flex justify-content-center basket-content">
                      <div className="empty">
                        <p>Your cart is empty.</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        )}
        <div className="top-line"></div>
        <div className="row main-content">
          <div className="col-md-6 position-relative">
            <div className="position-absolute slider col">
              <button onClick={prevImg} className="prev-button">
                <img src={previous} className="d-flex" />
              </button>
              <button onClick={nextImg} className="next-button">
                <img src={next} className="d-flex" />
              </button>
            </div>
            <img
              src={setImage()}
              className="products position-relative d-flex mx-auto"
            />
            {!isMobile && (
              <>
                <div className="photos d-flex justify-content-center">
                  <img src={prod1} />
                  <img src={prod2} />
                  <img src={prod3} />
                  <img src={prod4} />
                </div>
              </>
            )}
          </div>
          <div className="content col-md-6 col-sm-12 right-part">
            <p className="subtitle mt-4">SNEAKER COMPANY</p>
            <h1 className="my-3">Fall Limited Edition Sneakers</h1>
            <p className="description">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </p>
            <div className="container">
              <div className="row my-4 w-100">
                <p className="col p-0 new-price fs-1 my-auto">$125.00</p>
                <div className="col my-auto">
                  <p className="p-0 discount text-center fs-5 fw-semibold my-auto">
                    50%
                  </p>
                </div>
                <div className="row-md w-auto my-2 d-md-flex justify-content-end">
                  <p className="col d-flex p-0 fs-6 my-auto">
                    <del className="old-price">$250.00</del>
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row d-flex justify-content-center my-auto">
                <div className="container counter col-md-3 col-sm-12 my-auto mx-0">
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
                  className="add-to-cart py-3 mt-sm-4 mt-md-0 d-flex justify-content-center align-middle col-md-6 col-sm-12 my-auto"
                  onClick={() => {
                    addInCart(add);
                  }}
                >
                  <img src={cart} className="cart-2" />
                  <p className="mx-2 my-auto">Add to cart</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
