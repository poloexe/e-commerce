import React from "react";
import { IoIosClose } from "react-icons/io";
import { GrPrevious, GrNext } from "react-icons/gr";

const LightBox = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  setCurrentImageIndex,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex gap-5 justify-center items-center z-50">
      <div className="absolute inset-0 bg-black opacity-70 z-40"></div>
      <div className="relative flex flex-col gap-5 justify-center items-center z-50 px-4 md:px-0">
        <div className="relative">
          {/* Close Button */}
          <button
            className="absolute -top-11 -right-2 text-white text-xl font-bold hover:cursor-pointer hover:text-myOrange"
            onClick={onClose}
          >
            <IoIosClose className="font-bold" size="40" />
          </button>

          {/* Main Image */}
          <img
            src={images.main[currentIndex].src}
            alt="img"
            className="h-[21rem] w-[23rem] rounded-lg"
          />

          {/* Navigation Buttons */}
          <button
            className="absolute -left-3 top-1/2 transform -translate-y-1/2 text-black bg-white rounded-full p-2 hover:cursor-pointer"
            onClick={() => onPrev()}
          >
            <GrPrevious size="15" className="hover:text-myOrange" />
          </button>
          <button
            className="absolute -right-3 top-1/2 transform -translate-y-1/2 text-black bg-white rounded-full p-2 hover:cursor-pointer"
            onClick={() => onNext()}
          >
            <GrNext size="15" className="hover:text-myOrange" />
          </button>
        </div>

        <div className="flex gap-4 z-60">
          {images.thumbnails.map((thumbnail, index) => (
            <div
              key={index}
              className={`relative rounded-lg group cursor-pointer ${
                currentIndex === index
                  ? "outline outline-myOrange"
                  : "hover:outline-2 hover:outline-myOrange"
              }`}
              onClick={() => {
                setCurrentImageIndex(index);
              }}
            >
              <img
                src={thumbnail.src}
                alt={`${thumbnail.name} img`}
                className="h-16 w-16 rounded-lg hover:opacity-75"
              />

              <div
                className={`absolute  ${
                  currentIndex === index
                    ? "inset-0 bg-white rounded-lg opacity-60"
                    : "inset-0 bg-white rounded-lg opacity-0 group-hover:opacity-30"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LightBox;
