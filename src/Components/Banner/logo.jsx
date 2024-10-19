  import React from 'react';
  import LogoImage from '/src/assets/logo.png';
  
  const Logo = () => {
    return (
      <>
        <div className="relative flex justify-center items-center m-2 p-3">
          
          <p className="absolute top-4 right-6 xl:top-8 xl:right-1/4 text-black text-sm md:text-base sm:text-xs font-semibold z-10  md:right-4 md:top-5">
            Plesna igraonica & rođendaonica
          </p>
          
         
          <img src={LogoImage} alt="logo banner" className="max-w-xs sm:max-w-sm md:max-w-md h-auto xl:max-w-sm" />
        </div>
      </>
    );
  };
  
  export default Logo;
  

