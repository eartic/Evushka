import React from 'react';
import pravilnikText from '../Pages/pravilnikText.json';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';

const Pravilnik = () => {
  return (
    <>
    <Navbar />
    <div className='flex justify-center items-center mx-7'>
    <div className='p-5 md:p-10'>
      <h2 className='podnaslov text-center mb-5'>{pravilnikText.title}</h2>
      <div className='ostatakTexta'>
        {pravilnikText.content.map((paragraph, index) => (
          <p key={index}>
            {index + 1}. {paragraph}
          </p>
        ))}
      </div>
    </div>
    </div>
    <Footer />
    </>
  );
};

export default Pravilnik;
