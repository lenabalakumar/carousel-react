import { getImageData } from "./data/imageData";
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { ImageData } from "./data/imageData";

const App = () => {
  const [images, setImages] = React.useState<ImageData[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0);
  const imageRef = React.useRef<Map<number, HTMLDivElement> | null>(null);

  React.useEffect(() => {
    setImages(getImageData());
  }, []);

  const handleLeftClick = (indexSelected: number) => {
    setCurrentImageIndex((state) => (state = indexSelected - 1));
    scrollToId(indexSelected - 1);
  };

  const handleRightClick = (indexSelected: number) => {
    setCurrentImageIndex((state) => (state = indexSelected + 1));
    scrollToId(indexSelected + 1);
  };

  const handleImageSelect = (indexSelected: number) => {
    setCurrentImageIndex((state) => (state = indexSelected));
  };

  function scrollToId(itemId: any) {
    const map = getMap();
    const node = map.get(itemId);
    if (node) {
      node.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }

  function getMap() {
    if (!imageRef.current) {
      // Initialize the Map on first usage.
      imageRef.current = new Map<number, HTMLDivElement>();
    }
    return imageRef.current;
  }

  return (
    <div className="flex w-screen h-screen">
      <div className="m-auto">
        {images.map((item, index) => {
          return (
            <div key={item.imageId}>
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
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              )}
            </div>
          );
        })}
        <div className="h-20 w-60 overflow-x-scroll flex items-center">
          {images.map((item, index) => (
            <div
              className="h-14 w-14 m-1 rounded-full flex justify-center items-center border-2 shadow-md hover:scale-105 hover:cursor-pointer flex-none"
              key={item.imageId}
              onClick={() => handleImageSelect(index)}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(item.imageId, node);
                } else {
                  map.delete(item.imageId);
                }
              }}
            >
              <img
                src={item.imageUrl}
                alt={item.imageUrl}
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
