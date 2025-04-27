import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import LightBox from "./LightBox";

const Home = () => {
  const { addToCart, itemNumber, setItemNumber, product } =
    useContext(CartContext);

  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const increment = () => setItemNumber(itemNumber + 1);

  const decrement = () => itemNumber > 0 && setItemNumber(itemNumber - 1);

  const openLightBox = (index) => {
    setCurrentImageIndex(index);
    setIsLightBoxOpen(true);
  };

  const closeLightBox = () => {
    setIsLightBoxOpen(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.thumbnails.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.thumbnails.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="flex pt-14 gap-[6rem] justify-center mx-28">
        {/* Hero Img */}
        <div className="flex flex-col gap-4">
          <div>
            <img
              src={product.images.main[0].src}
              alt={`${product.images.main[0].name}`}
              className="h-[21rem] w-[23rem] rounded-lg"
              onClick={() => openLightBox(0)}
            />
          </div>
          <div className="flex gap-4">
            {product.images.thumbnails.map((thumbnail, index) => (
              <div
                key={index}
                className="hover:outline-2 hover:outline-myOrange rounded-lg"
              >
                <img
                  src={thumbnail.src}
                  alt={`${thumbnail.name} img`}
                  className="h-18 w-20 rounded-lg hover:cursor-pointer hover:opacity-45"
                  onClick={() => openLightBox(index)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Hero Text */}
        <div className="w-[25rem] flex flex-col gap-7 items-center py-10">
          <div className="flex flex-col gap-3 w-full">
            <h4 className="text-[15px] text-darkGrayishBlue font-semibold tracking-widest">
              SNEAKER COMPANY
            </h4>
            <p className="text-4xl font-bold">{product.name}</p>
            <p
              className="text-sm text-darkGrayishBlue font-semibold max-w-full"
              title={product.desc} // Tooltip to show full text on hover
            >
              {product.desc}
            </p>
            <p className="flex items-center gap-3">
              <span className="font-bold text-lg">
                ${product.price.toFixed(2)}
              </span>
              <span className="border bg-black text-white px-1.5 py-0.5 text-[10px] rounded-sm font-semibold">
                50%
              </span>
            </p>
            <p className="text-md font-semibold text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </p>
          </div>

          <div className="flex items-center w-full justify-between">
            <div className="btn border h-12 border-lightGrayishBlue rounded-sm bg-lightGrayishBlue flex items-center">
              <button
                className="px-6 h-full text-center text-xl hover:cursor-pointer"
                onClick={decrement}
              >
                <FaMinus className="text-myOrange" size="10" />
              </button>
              <span className="px-6 py-4 h-full hover:cursor-pointer text-center text-xs font-semibold">
                {itemNumber}
              </span>
              <button
                className="px-6 h-full text-center text-xl hover:cursor-pointer"
                onClick={increment}
              >
                <FaPlus className="text-myOrange" size="10" />
              </button>
            </div>
            <div className="h-12">
              <button
                className="btn h-full hover:cursor-pointer flex items-center gap-3 px-14 text-sm text-veryDarkBlue rounded-sm bg-myOrange font-bold hover:opacity-70"
                onClick={addToCart}
              >
                <span>
                  <IoCartOutline size="20" />
                </span>
                <span className="text-sm">Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <LightBox
        isOpen={isLightBoxOpen}
        images={product.images}
        currentIndex={currentImageIndex}
        onClose={closeLightBox}
        onNext={nextImage}
        onPrev={prevImage}
        setCurrentImageIndex={setCurrentImageIndex}
      />
    </>
  );
};

export default Home;
