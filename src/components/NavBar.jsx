import React, { useContext, useState } from "react";
import avatar from "/image-avatar.png";
import { IoCartOutline } from "react-icons/io5";
import logo from "/logo.svg";
import { CartContext } from "../context/CartContext";
import { RiDeleteBin6Line } from "react-icons/ri";

const NavBar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cart, product, deleteFromCart } = useContext(CartContext);

  return (
    <>
      <div>
        <nav className="flex justify-between mx-28 py-4 items-center">
          <div className="flex gap-12 justify-center items-center">
            <img src={logo} alt="logo" />
            <div className="flex gap-5 justify-center items-center">
              <a href="" className="text-darkGrayishBlue text-sm">
                Collections
              </a>
              <a href="" className="text-darkGrayishBlue text-sm">
                Men
              </a>
              <a href="" className="text-darkGrayishBlue text-sm">
                Women
              </a>
              <a href="" className="text-darkGrayishBlue text-sm">
                About
              </a>
              <a href="" className="text-darkGrayishBlue text-sm ">
                Contact
              </a>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <div className="relative">
              <IoCartOutline
                className="cursor-pointer text-darkGrayishBlue hover:text-veryDarkBlue"
                onClick={() => setCartOpen(!cartOpen)}
                size="25"
              />

              {/* Cart number */}
              {cart.length > 0 && (
                <div className="absolute -top-2 -right-2 bg-myOrange text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-md">
                  {cart.length}
                </div>
              )}

              {cartOpen && (
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-72 shadow-lg rounded-lg flex flex-col bg-white">
                  <div className="">
                    <h1 className="font-semibold py-3 px-4 text-sm">Cart</h1>
                    <div className="outline outline-lightGrayishBlue"></div>
                  </div>

                  <div>
                    {cart.length === 0 ? (
                      <p className="text-center py-16 font-semibold text-sm text-darkGrayishBlue">
                        Your cart is empty.
                      </p>
                    ) : (
                      cart.map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-col gap-3 px-2 py-5"
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={product.images.main[0].src}
                              alt={`${product.images.main[0].name}`}
                              className="h-11 rounded-md"
                            />
                            <div className="flex flex-col">
                              <p className="text-sm text-darkGrayishBlue">
                                {item.name}
                              </p>
                              <p className="flex items-center gap-2">
                                <span className="text-sm text-darkGrayishBlue">
                                  ${item.price.toFixed(2)} x {item.howMany}
                                </span>
                                <span className="text-sm font-bold">
                                  ${(item.price * item.howMany).toFixed(2)}
                                </span>
                              </p>
                            </div>

                            <RiDeleteBin6Line
                              className="text-darkGrayishBlue cursor-pointer"
                              onClick={() => deleteFromCart(product.name)}
                            />
                          </div>
                          <div className="flex justify-center w-full">
                            <button className="btn text-sm font-bold bg-myOrange py-3  w-full rounded-lg">
                              Checkout
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
            <div>
              <img
                src={avatar}
                className="h-7 cursor-pointer hover:outline-2 hover:outline-myOrange rounded-full"
                alt="avatar"
              />
            </div>
          </div>
        </nav>

        <div className="outline outline-lightGrayishBlue mx-28"></div>
      </div>
    </>
  );
};

export default NavBar;
