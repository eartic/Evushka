import React from 'react';
import pravilnikText from '../Pages/pravilnikText.json';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import { Helmet } from 'react-helmet';

const Pravilnik = () => {
  return (
    <>
    <Helmet>
      <title>Pravilnik - Evushka</title>
      <meta name='description' content='Pravila koja se moraju pridžavati svi sudionici plesne igraonice i rođendaonice- Evushka'/>
      <meta name='keywords' content='Pravilnik Evushka, pravila ponašanja, kodex, pravila ponašanja u rođendaonici' />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://evushka.com/pravilnik" />
      <meta property="og:title" content="Pravila ponašanja u plesnoj igraonici i rođendaonici- Evushka" />
        <meta property="og:description" content="Kako dogovoriti svoj sljedeći termin u plesnoj igraonici i rođendaonici Evushka" />
        <meta property="og:image" content="https://evushka.com/assets/logo_djeca-CDRpXGzM.jpg" />
        <meta property="og:url" content="https://evushka.com/pravilnik" />
        <meta property="og:type" content="website" />
    </Helmet>
    <Navbar />
    <div className='flex justify-center items-center mx-7'>
    <div className='p-5 md:p-10'>
      <h2 alt='pravila ponašanja Evushka' className='podnaslov text-center mb-5'>{pravilnikText.title}</h2>
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
