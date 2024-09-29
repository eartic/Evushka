import React from 'react';
import LogoFooter from '/src/assets/logo.png';
import LogoMail from '/src/assets/mail.png';
import Sat from '/src/assets/sat.png';
import Phone from '/src/assets/phone.png';
import Map from '/src/assets/map.png';




const Footer = () => {
  return (
    
    <footer className="bg-white text-black p-6">
      <hr className="border-t-4 border-solid border-magenta-500 my-6" />
      <p className='uvodniParagraph text-center mb-5'>Ne znate što za sljedeći rođendan vašeg djeteta? Kontaktirajte nas!</p>
      <div className="grid grid_kolona  grid-cols-5 gap-2">
        {/* Logo */}
        <img src={LogoFooter} alt="Logo" className="w-3/4" />

        {/* Working Hours Section */}
        <div className="flex flex-col justify-center items-center space-y-2">
          <p className="text-center">
            Radno vrijeme: <br />
            Pon-Pet: 8:30-22:00 <br />
            Sub-Ned: 9-21
          </p>
          <img src={Sat} alt="Clock" className="w-9 h-9" />
        </div>

            {/*Kontakt mail*/}
            <div className="flex flex-col justify-center items-center space-y-2">
            <p className="text-center">
              Kontakt: <br />
              info@evushka.com
              </p>
              <a href="mailto:info@evushka.com" className="w-12 h-12">
            <img src={LogoMail} alt="Email" />
          </a>
            </div>

        {/*Kontakt mail*/}
        <div className="flex flex-col justify-center items-center space-y-2">
            <p className="text-center">
              Kontakt telefon: <br />
              099 591 3887
              </p>
              <a href="tel:+385995913887"className="w-12 h-12">
            <img src={Phone} alt="Phone" />
          </a>
            </div>
        {/*Adresa*/}
        <div className="flex flex-col justify-center items-center space-y-2"> 
        <p className="text-center">
        Jaruščica 9b, <br />10020, Zagreb, Croatia</p>
        <a 
    href="https://www.google.com/maps/place/Papageno/@45.7681864,15.9412868,19z/data=!3m1!4b1!4m6!3m5!1s0x4765d43ba5618d1b:0x38fe4890afd53550!8m2!3d45.7681864!4d15.9419305!16s%2Fg%2F1tg2c8sh?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D&utm_medium=s2email&shorturl=1"
  target="_blank" 
  rel="noopener noreferrer" 
  className="w-12 h-12"
>
  <img src={Map} alt="Google Maps" />
</a>
</div>
      </div>
    </footer>
  );
};

export default Footer;
