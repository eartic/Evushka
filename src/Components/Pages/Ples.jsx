import React, { useEffect, useState } from "react";
import PlesText from '/src/Components/Pages/PlesText.json'; 
import Navbar from '/src/Components/Navbar/Navbar.jsx';
import Footer from '/src/Components/Footer/Footer.jsx';
import PlesSlideShow from '/src/Components/Ples_slide_show/ples_s_s.jsx';
import { Helmet } from "react-helmet";

const Ples = () => {
  <Helmet>
  <title>Ples-Evushka</title>
  <meta name="description" content="Plesna igraonica Evushka: ples i rekreacija za djecu, tečajevi za odrasle, individualna poduka, team building." />
  <meta name="keywords" content="Evushka, ples za djecu, tečaj plesova, ladies latin, team building, društveni plesovi, team building Zagreb" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://evushka.com/ples" />
      <meta property="og:title" content="Kontakt plesne igraonice i rođendaonice Evushka" />
        <meta property="og:description" content="Kako dogovoriti svoj sljedeći termin u plesnoj igraonici i rođendaonici Evushka" />
        <meta property="og:image" content="https://evushka.com/assets/logo_djeca-CDRpXGzM.jpg" />
        <meta property="og:url" content="https://evushka.com/ples" />
        <meta property="og:type" content="website" />
    </Helmet>
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(PlesText);
  }, []);

  if (!data) {
    return <div>Ostanicev strpljivi. Uskoro smo s Vama!</div>;
  }

  return (
    <>
      <Navbar />
      <h1 alt='ples i rekreacija za djecu, plesna igraonica za djecu, individualna poduka za djecu, tečaj društvenih plesova za odrasle, ladies latin za odrasle, team building za odrasle' className="pt-10 text-center">Ples</h1>
      <PlesSlideShow />
      <div className="flex flex-col items-center p-8">
        <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl">
          <div className="flex flex-col items-center space-y-8 mb-8 md:mb-0 md:mr-8">
            {data.djecji.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <h2 className='podnaslov'>{item.title}</h2>
                <div className="flex items-center justify-center text-center w-96 h-96 rounded-full border-8 border-magenta-500 bg-white shadow-2xl shadow-gray-800">
                <p alt='sadržaj ponude ples' className="ostatakTexta mt-6 p-8" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center space-y-8 md:ml-8">
            {data.odrasli.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <h2 className="podnaslov">{item.title}</h2>
                <div className="flex items-center justify-center text-center w-96 h-96 rounded-full border-8 border-magenta-500 bg-white shadow-2xl shadow-lavender-500">
                <p className="ostatakTexta p-8 mt-6" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ples;