import React from "react";
import imageProductOne from "/image-product-1.jpg";

const Home = () => {
  return (
    <>
      <div className="flex items-center">
        <div className="flex flex-col gap-4">
          <div>
            <img
              src={imageProductOne}
              alt="image-product-1"
              className="h-[16rem] w-[15rem] rounded-lg"
            />
          </div>
          <div className="flex gap-4">
            <img
              src={imageProductOne}
              alt="image-product-1"
              className="h-12 rounded-lg"
            />
            <img
              src={imageProductOne}
              alt="image-product-1"
              className="h-12 rounded-lg"
            />
            <img
              src={imageProductOne}
              alt="image-product-1"
              className="h-12 rounded-lg"
            />
            <img
              src={imageProductOne}
              alt="image-product-1"
              className="h-12 rounded-lg"
            />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Home;
