import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Djeca from '/src/assets/logo_djeca.jpg';
import {Helmet} from 'react-helmet';
 
const Cuvaonica = () => {
  return (
    <>
    <Helmet>
      <title>Jutarnja čuvaonica za djecu-Evushka</title>
      <meta name='description' content='Jutarnja čuvaonica za djecu Evushka pruža Vam priliku ostaviti Vaše djete u sigurnim i profesionalnim rukama'/>
      <meta name="keywords" content="jutarnja čuvaonica, čuvaonica za djecu Zagreb, Evushka, dječje aktivnosti, čuvanje djece, blizu Arena Centra" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://evushka.com/jutarnja%C4%8CuvaonicaZaDjecu" />
      <meta property="og:title" content="Jutarnja čuvaonica za djecu - Evushka" />
        <meta property="og:description" content="Jutarnja čuvaonica za djecu u Evushki pruža sigurno i zabavno okruženje za najmlađe. Posjetite nas u Zagrebu, blizu Arena Centra." />
        <meta property="og:image" content="https://evushka.com/assets/logo_djeca-CDRpXGzM.jpg" />
        <meta property="og:url" content="https://evushka.com/jutarnja%C4%8CuvaonicaZaDjecu" />
        <meta property="og:type" content="website" />
        
      </Helmet>

   
      <Navbar />
      <h1 alt='Jutarnja čuvaonica za djecu ' className="pt-10 text-center">Jutarnja čuvaonica za djecu</h1>
      <div className='flex justify-center items-center w-full h-auto py-3'>
        <div className='w-5/6 sm:w-1/2 md:w-1/3 xs:h-5/6'>
          <img src={Djeca} alt="logo sa slikom djece Evushka" className='w-full h-auto' />
        </div>
       
      </div>
      <div className="flex flex-auto justify-center">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-1 xl:grid-cols-2 p-3  mt-4">
          <div className="flex flex-col items-center">
            <h2 alt='radno vrijeme čuvaonice' className='podnaslov'>Kada?</h2>
            <div className="shadow-lg shadow-lavender-500 flex items-center justify-center text-center w-80 h-80 rounded-full border-8 border-magenta-500 bg-white">
              <p alt='radno vrijeme ponedjeljak srijeda petak ili svaki dan od 9-12:30' className="p-10 ostatakTexta text-sm md:text-base">Pon-Sri-Pet <br /> ili <br /> svaki dan <br />9:00-12:30</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 alt='Za koga je namjenjena čuvaonica' className='podnaslov'>Koji uzrast?</h2>
            <div className="shadow-lg shadow-lavender-500 flex items-center justify-center text-center w-80 h-80 rounded-full border-8 border-magenta-500 bg-white">
              <p alt= 'djeca od 2.5 do 7 godina, od dvije i pol do sedam godina uzrasta' className="p-10 ostatakTexta text-sm md:text-base">Za djecu od 2,5 do 7 godina</p>
            </div>
          </div>
          <div className="flex flex-col items-center mt-4" >
            <h2 alt='koje aktivnosti možete naći u plesnoj igraonici i rođendaonici' className='podnaslov'>Aktivnosti</h2>
            <div className="shadow-lg shadow-lavender-500 flex items-center justify-center text-center w-80 h-80 rounded-full border-8 border-magenta-500 bg-white">
              <p alt='sadržaj aktivnosti jutarnje čuvaonice' className="p-10 ostatakTexta text-sm md:text-base">Jutarnje razgibavanje ili poligon <br /> Ples i pjevanje <br /> Čitanje priče <br />
                Likovno stvaralaštvo <br /> Kreativna igra <br /> Voćna užina <br /> Mogućnost izlaska u zajednički park naše zgrade
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center mt-4">
            <h2 className='podnaslov'>Tko je s nama?</h2>
            <div className="shadow-lg shadow-lavender-500 flex items-center justify-center text-center w-80 h-80 rounded-full border-8 border-magenta-500 bg-white">
              <p alt='tko čuva djecu ako ne naše stručno vodstvo uz tete odgajateljice' className="p-10 ostatakTexta text-sm md:text-base">Stručno vodstvo - <br /> tete odgajateljice</p>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="mx-auto max-w-4xl p-3 flex justify-center text-center">
          <h2 className="podnaslov">Cjenik</h2>
        </div>
        <div className="mx-auto max-w-4xl p-3 flex justify-center text-center ostatakTexta">
          <p alt= 'termini i cjenik'> 
            Pon - Pet = 180€ <br />
            Pon • Sri • Pet = 110€
          </p>
        </div>
      </section>
    
      <Footer />
    </>
  );
};

export default Cuvaonica;
