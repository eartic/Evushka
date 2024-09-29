import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Djeca from '/src/assets/logo_djeca.jpg';

const Cuvaonica = () => {
  return (
    <>
      <Navbar />
      <h1 className="pt-10 text-center">Jutarnja čuvaonica za djecu</h1>
      <div className='flex justify-center items-center w-full h-auto py-3'>
        <div className='w-5/6 sm:w-1/2 md:w-1/3 xs:h-5/6'>
          <img src={Djeca} alt="logo sa slikom djece" className='w-full h-auto' />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 p-7 ">
          <div className="flex flex-col items-center">
            <h2 className='podnaslov'>Kada?</h2>
            <div className="circle flex items-center justify-center text-center w-80 h-80 rounded-full border-8 border-magenta-500 bg-white">
              <p className="p-10 ostatakTexta text-sm md:text-base">Pon-Sri-Pet <br /> ili <br /> svaki dan <br />9:00-12:30</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className='podnaslov'>Koji uzrast?</h2>
            <div className="circle flex items-center justify-center text-center w-80 h-80 rounded-full border-8 border-magenta-500 bg-white">
              <p className="p-10 ostatakTexta text-sm md:text-base">Za djecu od 2,5 do 7 godina</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className='podnaslov'>Aktivnosti</h2>
            <div className="circle flex items-center justify-center text-center w-80 h-80 rounded-full border-8 border-magenta-500 bg-white">
              <p className="p-10 ostatakTexta text-sm md:text-base">Jutarnje razgibavanje ili poligon <br /> Ples i pjevanje <br /> Čitanje priče <br />
                Likovno stvaralaštvo <br /> Kreativna igra <br /> Voćna užina <br /> Mogućnost izlaska u zajednički park naše zgrade
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className='podnaslov'>Tko je s nama?</h2>
            <div className="circle flex items-center justify-center text-center w-80 h-80 rounded-full border-8 border-magenta-500 bg-white">
              <p className="p-10 ostatakTexta text-sm md:text-base">Stručno vodstvo - <br /> tete odgajateljice</p>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="mx-auto max-w-4xl p-3 flex justify-center text-center">
          <h2 className="podnaslov">Cjenik</h2>
        </div>
        <div className="mx-auto max-w-4xl p-3 flex justify-center text-center ostatakTexta">
          <p>
            Pon - Pet =  €<br />
            Pon - Sri - Pet =  €
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cuvaonica;
