import React, { useState, createContext, useEffect } from "react";

// Importing images
import imageProductOne from "/image-product-1.jpg";
import imageProductTwo from "/image-product-2.jpg";
import imageProductThree from "/image-product-3.jpg";
import imageProductFour from "/image-product-4.jpg";

// Importing thumbnails
import thumbnailOne from "/image-product-1-thumbnail.jpg";
import thumbnailTwo from "/image-product-2-thumbnail.jpg";
import thumbnailThree from "/image-product-3-thumbnail.jpg";
import thumbnailFour from "/image-product-4-thumbnail.jpg";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    /* Initialize cart from localStorage */
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [itemNumber, setItemNumber] = useState(0);

  const product = {
    name: "Fall Limited Edition Sneakers",
    price: 125.0,
    originalPrice: 250.0,
    howMany: itemNumber,
    desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstandeverything the weather can offer",
    images: {
      main: [
        {
          name: "image-1",
          src: imageProductOne,
        },
        {
          name: "image-2",
          src: imageProductTwo,
        },
        {
          name: "image-3",
          src: imageProductThree,
        },
        {
          name: "image-4",
          src: imageProductFour,
        },
      ],
      thumbnails: [
        {
          name: "thumbnail-1",
          src: thumbnailOne,
        },
        {
          name: "thumbnail-2",
          src: thumbnailTwo,
        },
        {
          name: "thumbnail-3",
          src: thumbnailThree,
        },
        {
          name: "thumbnail-4",
          src: thumbnailFour,
        },
      ],
    },
  };

  const addToCart = () => {
    if (itemNumber === 0) return;

    const updatedCart = cart.find((item) => item.name === product.name)
      ? cart.map((item) =>
          item.name === product.name
            ? { ...item, howMany: item.howMany + itemNumber }
            : item
        )
      : [
          ...cart,
          {
            name: product.name,
            price: product.price,
            originalPrice: product.originalPrice,
            howMany: product.howMany,
          },
        ];

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setItemNumber(0);
  };

  const deleteFromCart = (productName) => {
    const updatedCart = cart.filter((item) => item.name !== productName);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    /* Sync cart with localStorage on changes */
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        itemNumber,
        setItemNumber,
        product,
        deleteFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
