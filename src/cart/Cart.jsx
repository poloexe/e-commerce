import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = ({product, cart, deleteFromCart}) => {
  return (
    <>
      <div className="absolute top-16 md:top-8 left-1/2 -translate-x-1/2 w-[19.5rem] md:w-72 shadow-lg rounded-lg flex flex-col bg-white z-50">
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
              <div key={index} className="flex flex-col gap-3 px-2 py-5">
                <div className="flex items-center justify-between">
                  <img
                    src={product.images.main[0].src}
                    alt={`${product.images.main[0].name}`}
                    className="h-11 rounded-md"
                  />
                  <div className="flex flex-col">
                    <p className="text-sm text-darkGrayishBlue">{item.name}</p>
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
    </>
  );
};

export default Cart;
