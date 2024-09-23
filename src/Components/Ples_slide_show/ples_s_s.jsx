import { Carousel } from "@material-tailwind/react";
import Ples1 from '../Ples_slide_show/Ples_Slike/Ples1.png';
import Ples2 from '../Ples_slide_show/Ples_Slike/Ples2.png';
import Ples3 from '../Ples_slide_show/Ples_Slike/Ples3.png';
import Ples4 from '../Ples_slide_show/Ples_Slike/Ples4.png';

const TerminiSlideshow = () => {
  return (
    <div className="flex justify-center items-center my-8">
      <Carousel
        className="rounded-xl w-full max-w-4xl aspect-w-16 aspect-h-9" // Maintain 16:9 aspect ratio
        prevArrowProps={{ className: 'text-magenta-500' }} // Magenta color for the prev arrow
        nextArrowProps={{ className: 'text-magenta-500' }} // Magenta color for the next arrow
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === i ? "bg-magenta-500" : "bg-gray-300"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src={Ples1}
          alt="Ples 1"
          className="h-full w-full object-cover"
        />
        <img
          src={Ples2}
          alt="Ples 2"
          className="h-full w-full object-cover"
        />
        <img
          src={Ples3}
          alt="Ples 3"
          className="h-full w-full object-cover"
        />
        <img
          src={Ples4}
          alt="Ples 4"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
};

export default TerminiSlideshow;
