import React, { useState } from 'react';
import LogoImage from '/src/Components/Banner/logo.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import { motion } from 'framer-motion';
import './Naslovna.css';
import Djeca from '/src/assets/logo_djeca.jpg';
import { Link } from "@react-email/components";
import TerminiCorusel from '../Termini_slide_show/termini_s_s.jsx';
import Prostor1 from '/src/assets/prostor/Prostor1.jpg';
import Prostor2 from '/src/assets/prostor/Prostor2.png';
import Prostor3 from '/src/assets/prostor/Prostor3.png';
import Prostor4 from '/src/assets/prostor/Prostor4.png';
import Prostor5 from '/src/assets/prostor/Prostor5.png';
import Prostor6 from '/src/assets/prostor/Prostor6.png';
import Facebook from '/public/link_facebook.png';
import Instagram from '/public/link_instagram.png';

const EmailLink = () => {
  const handleClick = () => {
    window.location.href = 'mailto:info@evushka.com';
  };

  return (
    <p className='ostatakTexta' onClick={handleClick} style={{ cursor: 'pointer', color: 'darkmagenta', textDecoration: 'none' }}>
      info@evushka.com
    </p>
  );
};

const PhoneLink = () => {
  const handleClick = () => {
    window.location.href = 'tel:+385995913887';
  };

  return (
    <p className='ostatakTexta' onClick={handleClick} style={{ cursor: 'pointer', color: 'darkmagenta', textDecoration: 'none', fontSize: '15px' }}>
      099 591 3887
    </p>
  );
};

const Naslovna = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const labels = [
    'Plesna rekreacija za djecu',
    'Tečaj društvenih plesova za odrasle',
    'Ladies latin',
    'Individualna poduka',
    'Team building',
    'Kutak za mladence',
    'Rođendani',
    'Jutarnja čuvaonica za djecu',
    'Najam prostora',
  ];

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <LogoImage />
      <Navbar />
      <div className='flex justify-center items-center w-full h-auto py-3'>
        <div className='w-5/6 sm:w-1/2 md:w-1/3 h-5/6'>
          <img src={Djeca} alt="logo sa slikom djece" className='w-full h-auto' />
          <div className='flex items-center justify-items-center box-border'>
            <p className='uvodniParagraph text-lg text-pretty text-center'>Plešite s nama i proslavite rođendan svog djeteta kod nas!</p>
          </div>
        </div>
      </div>

      {/* Navigacija krugovi */}
      <div className="mt-2 mb-6">
        <div className="flex justify-center items-center mb-8">
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-7 gap-4 xl:grid-cols-9">
            {labels.map((label, index) => (
              <motion.div
                key={index}
                className="flex justify-center items-center xl:w-32 xl:h-32 w-32 h-32 md:w-44 md:h-44 rounded-full bg-magenta-500"
                variants={{ initial: { scale: 1, opacity: 1 }, hover: { scale: 1.3, opacity: 0.9, transition: { type: 'spring', stiffness: 300, damping: 15 } } }}
                initial="initial"
                whileHover="hover"
              >
                <div className="flex justify-center items-center xl:w-28 xl:h-28 w-28 h-28 md:w-40 md:h-40 rounded-full bg-white text-center navigacija">
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Kontakt radno vrijeme */}
      <div className='ml-1 mt-10 p-3'>
        <div className='grid gap-2 grid-cols-1 md:grid-cols-3 w-full h-auto'>
          <div className='flex flex-col items-center text-center'>
            <h2 className='podnaslov'>Radno vrijeme:<br /></h2>
            <p className='ostatakTexta'>Ponedjeljak - Petak: <br />8:30 - 22:00 <br />Subota - Nedjelja:<br /> 9:00 - 21:00</p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <h2 className='podnaslov'>Kontakt: <br /> <EmailLink /></h2>
          </div>
          <div className='flex flex-col items-center text-center'>
            <h2 className='podnaslov'>Kontakt telefon:<br /><PhoneLink /></h2>
          </div>
        </div>
      </div>

      {/* Aktualni termini slid show link */}
      <section>
        <div className='flex justify-center justify-items-center'>
          <h1 className='text-center'>Aktualni termini</h1>
        </div>
        <TerminiCorusel />
      </section>

      {/* Podnaslov "Pratite nas" */}
      <section className='mt-10'>
        <h1 className='text-center podnaslov'>Pratite nas</h1>
        <div className="flex justify-center items-center mt-6">
          <div className="grid grid-cols-2 gap-4">
            <motion.a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-20 rounded-full bg-magenta-500 flex justify-center items-center"
              whileHover={{ scale: 1.1 }}
            >
              <img src={Facebook} alt="Facebook" className="w-12 h-auto" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-20 rounded-full bg-magenta-500 flex justify-center items-center"
              whileHover={{ scale: 1.1 }}
            >
              <img src={Instagram} alt="Instagram" className="w-12 h-auto" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Galerija slika */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 p-10">
        {[Prostor1, Prostor2, Prostor3, Prostor4, Prostor5, Prostor6].map((src, index) => (
          <div key={index} onClick={() => handleImageClick(src)}>
            <img className="h-auto max-w-full rounded-lg cursor-pointer" src={src} alt="" />
          </div>
        ))}
      </div>

      {/* Modal za uvećanje slika */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={closeModal}>
          <img src={selectedImage} alt="Enlarged" className="max-w-full max-h-full" />
        </div>
      )}
    </>
  );
};

export default Naslovna;
