import React, { useEffect, useState } from "react";
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import RodendaniText from '/src/Components/Pages/RodendaniText.json'; 
import ImageModal from './ImageModal';
import Rodendan1 from '/src/assets/rodendan/djeca1.jpg';
import Rodendan2 from '/src/assets/rodendan/djeca2.jpg';
import Rodendan3 from '/src/assets/rodendan/djeca4.jpg';
import Rodendan4 from '/src/assets/rodendan/djeca14.jpg';
import Rodendan5 from '/src/assets/rodendan/djeca16.jpg';
import Rodendan6 from '/src/assets/rodendan/djeca18.jpg';
import Rodendan7 from '/src/assets/rodendan/djeca25.jpg';
import Rodendan8 from '/src/assets/rodendan/djeca28.jpg';
import Rodendan9 from '/src/assets/rodendan/djeca32.jpg';
import Djeca from '/src/assets/logo_djeca.jpg';


const Rodendan = () => {
  const [data, setData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Load data from JSON on component mount
  useEffect(() => {
    setData(RodendaniText);
  }, []);

  // Handle image click for the modal
  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Check if data is loading
  if (!data) {
    return <div>Učitavanje...</div>;
  }

  return (
    <>
      <Navbar />
      <h1 className="pt-10 text-center">Rođendani</h1>
      <div className='flex justify-center items-center w-full h-auto py-3'>
        <div className='w-5/6 sm:w-1/2 md:w-1/3 xs:h-5/6'>
          <img src={Djeca} alt="logo sa slikom djece" className='w-full h-auto' />
        </div>
      </div>

      
      <section>
        <div className="mx-auto max-w-4xl p-3 flex justify-center text-center ostatakTexta">
          <h2 className="podnaslov">Kako slavimo rođendane u Evushki?</h2>
        </div>
        <div className="mx-auto max-w-4xl p-3 flex justify-center text-center ostatakTexta">
          <p>
            Dječji rođendani u našoj igraonici i rođendaonici su nezaboravna avantura, jer Evushka nudi više od igre. 
            Igraonica i rođendaonica Evushka Zagreb kod proslave rođendana ima osobni pristup, te sa svakim slavljenikom 
            dogovara odgovarajući program igara, izbor pjesama i detaljan način proslave.
            Naša igraonica za djecu po svakom rođendanu prima maksimalno 20-tero djece, na više od 120 m2 zatvorenog prostora 
            s vanjskom terasom. Ulazni dio je prostor predviđen za boravak i zabavu roditelja dok se njihova djeca igraju. 
            Upravo taj dio naše igraonice za djecu se pokazao kao idealno rješenje kod proslava rođendana mlađe djece. 
            Roditelji su konstantno prisutni, te imaju nadzor nad djecom, ali i mogu u ugodnom prostoru uživati u društvu prijatelja.
            Druga prostorija je prostor za igranje i mini disco vrhunski opremljena sa svim animacijskim rekvizitima i 
            pomagalima za aktivan rođendan. Treći prostor je soba sa igračkama u kojoj mogu uživati djeca u raznovrsnim igrama.
          </p>
        </div>
      </section>

      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center space-x-4 md:space-x-8 space-y-8 md:space-y-0 mb-8 mt-10">
  {data.rodendani.map((item, index) => (
    <div key={index} className="flex flex-col items-center">
      <h2 className='podnaslov'>{item.title}</h2>
      <div className="circle flex items-center justify-center text-center w-full max-w-96 h-96 rounded-full border-8 border-magenta-500 bg-white">
        <p className="p-10 ostatakTexta text-sm md:text-base" dangerouslySetInnerHTML={{ __html: item.description }} />
      </div>
    </div>
  ))}
</div>


      {/* Galerija slika */}
      <section className="mt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 p-10">
          {[Rodendan1, Rodendan2, Rodendan3, Rodendan4, Rodendan5, Rodendan6, Rodendan7, Rodendan8, Rodendan9].map((src, index) => (
            <div key={index} onClick={() => handleImageClick(src)}>
              <img className="h-auto max-w-full rounded-lg cursor-pointer" src={src} alt={`Rodendan image ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* ImageModal component */}
      <ImageModal isOpen={!!selectedImage} imageSrc={selectedImage} onClose={closeModal} />

      <Footer />
    </>
  );
};

export default Rodendan;
