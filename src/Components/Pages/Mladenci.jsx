import React, { useEffect, useState } from "react";
import Navbar from '../Navbar/Navbar.jsx'; 
import Footer from '../Footer/Footer.jsx'; 
import ImageModal from "./ImageModal"; 
import Mladenci1 from '../../assets/mladenci/mladenci1.jpg';
import Mladenci2 from '../../assets/mladenci/mladenci2.jpg';
import Mladenci3 from '../../assets/mladenci/mladenci3.jpg'; 
import VideoMladenci from '../../assets/mladenci/PlesMladenci.mp4';
import PlesMladenci from '../Ples_slide_show/Ples_Slike/Ples1.png'; 

const Mladenci = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

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
          className="w-full h-full object-cover rounded-full border-8 border-magenta"
          autoPlay
          muted
          loop 
          playsInline 
        >
          <source src={VideoMladenci} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
      </section>

      <section >
        <div className="grid justify-center justify-items-center grid-cols-1 md:grid-cols-3 gap-4 mt-10 p-5 m-10">
          {[Mladenci1, Mladenci2, Mladenci3].map((src, index) => (      
            <div key={index} onClick={() => handleImageClick(src)}>
              <img className="max-h-96 max-w-full rounded-lg cursor-pointer shadow-lg shadow-gray-500/50" src={src} alt={`Mladenci image ${index + 1}`} />
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
