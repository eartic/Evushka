import React, { useEffect, useRef, useState } from "react";
import Navbar from '../Navbar/Navbar.jsx'; 
import Footer from '../Footer/Footer.jsx'; 
import ImageModal from "./ImageModal"; 
import Mladenci1 from '../../assets/mladenci/mladenci1.jpg';
import Mladenci2 from '../../assets/mladenci/mladenci2.jpg';
import Mladenci3 from '../../assets/mladenci/mladenci3.jpg'; 
import Mladenci4 from '../../assets/mladenci/mladenci.jpg';
import VideoMladenci from '../../assets/mladenci/PlesMladenci.mp4';
import PlesMladenci from '../Ples_slide_show/Ples_Slike/Ples1.png'; 

const Mladenci = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false); 
  const videoRef = useRef(null); 

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };


  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        videoRef.current.volume = 0.5; 
      }
      setIsPlaying(!isPlaying); 
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5; 
    }
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="pt-10 text-center">Kutak za mladence</h1>

      <div className="mt-5">
        <div className="flex justify-center">
          <img
            src={PlesMladenci}
            alt="Ples mladenci"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto"/>
        </div>
        <p className="uvodniParagraph text-center">
          Dragi mladenci, neka Vaš prvi ples bude poseban ❤️
        </p>
      </div>

      <div className="mx-auto max-w-4xl p-3 flex justify-center text-center ostatakTexta">
        <p>Prvi ples je važan trenutak na svakom vjenčanju. Neka bude za pamćenje. Sati plesa provode se individualno i posvećeni smo samo Vama. Koreografija se prilagođava Vama i koreografirana je samo za Vas.</p>
      </div>

      <section>
        <div className="flex justify-center items-center">
          <div className="relative w-96 h-96">
            <video
              ref={videoRef} 
              className="w-full h-full shadow-xl shadow-lavender-500 object-cover rounded-full border-8 border-magenta-500"
              loop 
              playsInline
              onClick={handlePlayPause} 
            >
              <source src={VideoMladenci} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            
            {!isPlaying && (
              <button
                onClick={handlePlayPause}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-magenta-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 22v-20l18 10-18 10z" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="grid justify-center justify-items-center grid-cols-1 md:grid-cols-4 gap-4 mt-10 p-5 m-10">
          {[Mladenci4,Mladenci1, Mladenci2, Mladenci3].map((src, index) => (      
            <div key={index} onClick={() => handleImageClick(src)}>
              <img className="w-96 xl:h-5/6 h-auto rounded-lg cursor-pointer shadow-2xl shadow-lavender-500" src={src} alt={`Mladenci image ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <ImageModal isOpen={selectedImage !== null} imageSrc={selectedImage} onClose={closeModal} />
    
      <Footer />
    </>
  );
};

export default Mladenci;
