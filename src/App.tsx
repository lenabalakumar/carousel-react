import { getImageData } from "./data/imageData";
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const App = () => {
  const [images, setImages] = React.useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0);
  const imageRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setImages(getImageData());
  }, []);

  const handleLeftClick = (indexSelected: number) => {
    setCurrentImageIndex((state) => (state = indexSelected - 1));
    // imageRef.current?.scrollTo({ left: window.innerWidth });
  };

  const handleRightClick = (indexSelected: number) => {
    // setCurrentImageIndex((state) => state + 1);
    setCurrentImageIndex((state) => (state = indexSelected + 1));
    // imageRef.current?.scrollTo({ left: 30 });
  };

  const handleImageSelect = (indexSelected: number) => {
    setCurrentImageIndex((state) => (state = indexSelected));
  };

  return (
    <div className="flex w-screen h-screen">
      <div className="m-auto">
        {images.map((item, index) => {
          return (
            <div key={item}>
              {index === currentImageIndex && (
                <div className="h-80 w-60 mb-2 flex relative">
                  {currentImageIndex > 0 && (
                    <div
                      className="w-6 h-6 border flex justify-center items-center rounded-full absolute left-2 top-1/2 transform -translate-y-1/2 bg-slate-200 cursor-pointer"
                      onClick={() => handleLeftClick(index)}
                    >
                      <ChevronLeftIcon className="h-3 w-3 text-slate-600" />
                    </div>
                  )}
                  {currentImageIndex < images.length - 1 && (
                    <div
                      className="w-6 h-6 border flex justify-center items-center rounded-full absolute right-2 top-1/2 transform -translate-y-1/2 bg-slate-200 cursor-pointer"
                      onClick={() => handleRightClick(index)}
                    >
                      <ChevronRightIcon className="h-3 w-3 text-slate-600" />
                    </div>
                  )}
                  <img
                    src={item}
                    alt={item}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              )}
            </div>
          );
        })}
        <div
          className="h-20 w-60 overflow-x-scroll flex items-center"
          ref={imageRef}
        >
          {images.map((item, index) => (
            <div
              className="h-14 w-14 m-1 rounded-full flex justify-center items-center border-2 shadow-md hover:scale-105 hover:cursor-pointer flex-none"
              key={item}
              onClick={() => handleImageSelect(index)}
            >
              <img
                src={item}
                alt={item}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
