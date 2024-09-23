import React, { useEffect, useState } from 'react';
import Ples1 from '../Ples_slide_show/Ples_Slike/Ples1.png';
import Ples2 from '../Ples_slide_show/Ples_Slike/Ples2.png';
import Ples3 from '../Ples_slide_show/Ples_Slike/Ples3.png';
import Ples4 from '../Ples_slide_show/Ples_Slike/Ples4.png';

const slides = [Ples1, Ples2, Ples3, Ples4];

const PlesSlideShow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer); // Clean up on unmount
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative flex justify-center items-center my-8">
      <div className="relative w-full max-w-4xl rounded-xl overflow-hidden">
        <img src={slides[activeIndex]} alt={`Ples Slide ${activeIndex + 1}`} className="h-full w-full object-cover" />
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-magenta-500 text-3xl cursor-pointer z-10 hover:text-magenta-600"
          onClick={handlePrev}
        >
          &#9664; {/* Left arrow */}
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-magenta-500 text-3xl cursor-pointer z-10 hover:text-magenta-600"
          onClick={handleNext}
        >
          &#9654; {/* Right arrow */}
        </button>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              activeIndex === index ? "bg-magenta-500" : "bg-gray-300"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PlesSlideShow;
