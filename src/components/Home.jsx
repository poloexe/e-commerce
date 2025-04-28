import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import LightBox from "./LightBox";
import { GrPrevious, GrNext } from "react-icons/gr";

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
      <div className="flex flex-col items-center md:flex-row md:pt-14 gap-5 md:gap-[6rem] md:justify-center md:mx-28">
        {/* Hero Img */}
        <div className="relative flex md:flex-col gap-4">
          <div>
            {/* Main Image */}
            <img
              src={product.images.main[currentImageIndex].src}
              alt={`${product.images.main[currentImageIndex].name}`}
              className="h-64 md:h-[21rem] w-screen md:w-[23rem] md:rounded-lg"
              onClick={() => openLightBox(currentImageIndex)}
            />

            {/* Previous Button */}
            <button
              className="block md:hidden absolute left-2 top-1/2 transform -translate-y-1/2 text-black bg-white rounded-full p-2"
              onClick={prevImage}
            >
              <GrPrevious size="15" />
            </button>

            {/* Next Button */}
            <button
              className="block md:hidden absolute right-2 top-1/2 transform -translate-y-1/2 text-black bg-white rounded-full p-2"
              onClick={nextImage}
            >
              <GrNext size="15" />
            </button>
          </div>
          <div className="hidden md:flex gap-4">
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
        <div className="w-[25rem] flex flex-col gap-7 items-center md:py-10">
          <div className="flex flex-col gap-3 w-screen px-5 md:px-0 md:w-full">
            <h4 className="text-[10px] md:text-[15px] text-darkGrayishBlue font-semibold tracking-widest">
              SNEAKER COMPANY
            </h4>
            <p className="text-3xl md:text-4xl font-bold">{product.name}</p>
            <p
              className=" text-[14px] md:text-sm text-darkGrayishBlue font-semibold max-w-full"
              title={product.desc} // Tooltip to show full text on hover
            >
              {product.desc}
            </p>

            <div className="flex flex-row md:flex-col justify-between md:justify-start md:gap-2 items-center md:items-start">
              <p className="flex items-center gap-3">
                <span className="font-bold text-2xl md:text-lg">
                  ${product.price.toFixed(2)}
                </span>
                <span className="border bg-black text-white px-1.5 py-0.5 text-[13px] md:text-[10px] rounded-sm font-semibold">
                  50%
                </span>
              </p>
              <p className="text-sm md:text-md font-semibold text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-0 md:flex-row w-screen px-5 md:px-0 md:w-full justify-between">
            <div className="btn flex justify-between items-center border h-12 border-lightGrayishBlue rounded-sm bg-lightGrayishBlue">
              {/* Decrement Button */}
              <button
                className="px-6 h-full text-center text-xl hover:cursor-pointer"
                onClick={decrement}
              >
                <FaMinus className="text-myOrange" size="10" />
              </button>

              {/* Number of Item */}
              <span className="px-6 py-4 h-full hover:cursor-pointer text-center text-xs font-semibold">
                {itemNumber}
              </span>

              {/* Increment Button */}
              <button
                className="px-6 h-full text-center text-xl hover:cursor-pointer"
                onClick={increment}
              >
                <FaPlus className="text-myOrange" size="10" />
              </button>
            </div>

            <div className="h-12">
              {/* Add to Cart Button */}
              <button
                className="btn h-full w-full flex items-center justify-center hover:cursor-pointer gap-3 px-14 text-sm text-veryDarkBlue rounded-sm bg-myOrange font-bold hover:opacity-70 whitespace-nowrap"
                onClick={addToCart}
              >
                <span>
                  <IoCartOutline size="20" />
                </span>
                <span className="text-xs md:text-[12px] lg:text-sm">
                  Add to cart
                </span>
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
