import React, { useContext, useState } from "react";
import avatar from "/image-avatar.png";
import { IoCartOutline } from "react-icons/io5";
import logo from "/logo.svg";
import { CartContext } from "../context/CartContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdMenu, IoIosClose } from "react-icons/io";

const NavBar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cart, product, deleteFromCart } = useContext(CartContext);
  const [isMenuOpen, SetIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Collections", href: "#" },
    { name: "Men", href: "#" },
    { name: "Women", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <>
      <div>
        <nav className="flex justify-between px-5 py-2 md:px-0 md:mx-28 md:py-4 items-center">
          <div className="flex gap-12 justify-center items-center">
            <div className="flex md:block items-center gap-3">
              <IoMdMenu
                className="block md:hidden"
                onClick={() => SetIsMenuOpen(!isMenuOpen)}
                size="25"
              />

              {/* Mobile Menu */}
                <div
                  className={`fixed flex flex-col top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                  } `}
                >
                  <div className="p-3">
                    <IoIosClose
                      size="40"
                      className="text-darkGrayishBlue"
                      onClick={() => SetIsMenuOpen(false)}
                    />
                  </div>
                  <div className="flex flex-col gap-4 p-5">
                    {navLinks.map((link) => (
                      <a
                        href={link.href}
                        className="text-black text-lg font-bold"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>


              <img src={logo} alt="logo" />
            </div>

            <div className="hidden md:flex gap-5 justify-center items-center">
              {navLinks.map((link) => (
                <a href={link.href} className="text-darkGrayishBlue text-sm">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-5 md:gap-10">
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
