import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Djeca from '/src/assets/logo_djeca.jpg';


const Cuvaonica = () => {
  return (
    <>
    <Navbar/>
    <h1 className="pt-10 text-center">Jutarnja čuvaonica za djecu</h1>
    <div className='flex justify-center items-center w-full h-auto py-3'>
        <div className='w-5/6 sm:w-1/2 md:w-1/3 xs:h-5/6'>
          <img src={Djeca} alt="logo sa slikom djece" className='w-full h-auto' />
          <div className='flex items-center justify-items-center box-border'>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
};

export default Cuvaonica;