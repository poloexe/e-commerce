import React, { useContext, useState } from "react";
import avatar from "/image-avatar.png";
import { IoCartOutline } from "react-icons/io5";
import logo from "/logo.svg";
import { CartContext } from "../context/CartContext";
import { IoMdMenu } from "react-icons/io";
import MobileMenu from "../mobile/MobileMenu";
import Cart from "../cart/Cart";

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
      <div className="">
        <nav className="flex justify-between px-5 py-3.5 md:px-0 md:mx-28 md:py-4 items-center">
          <div className="flex gap-12 justify-center items-center">
            <div className="flex md:block items-center gap-3">
              <IoMdMenu
                className="block md:hidden"
                onClick={() => SetIsMenuOpen(!isMenuOpen)}
                size="25"
              />

              {/* Mobile Menu */}
              <MobileMenu
                navLinks={navLinks}
                isMenuOpen={isMenuOpen}
                SetIsMenuOpen={SetIsMenuOpen}
              />

              <img src={logo} alt="logo" />
            </div>

            <div className="hidden md:flex gap-5 justify-center items-center">
              {navLinks.map((link, index) => (
                <a
                  href={link.href}
                  className="text-darkGrayishBlue text-sm"
                  key={index}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-5 md:gap-10">
            <div className="md:relative">
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
              </div>

              {cartOpen && (
                <Cart
                  product={product}
                  cart={cart}
                  deleteFromCart={deleteFromCart}
                />
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
