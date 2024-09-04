import React from 'react';
import LogoImage from '/src/assets/logo.png';
import { div } from 'framer-motion/client';

const Logo = () => {
  return (<>
    <div>
      <p className='absolute bottom-0 top-12 text-center text-black text-l'> Plesna igraonica & rođendaonica </p>
      </div>
    <div className='flex justify-center mt-4'>
      <img src={LogoImage} alt="logo banner" className='max-w-80 h-auto' />
    </div>
    </>
  );
}

export default Logo;
