import React, { useEffect, useState } from "react";
import PlesText from '/src/Components/Pages/PlesText.json'; // JSON datoteka
import Navbar from '/src/Components/Navbar/Navbar.jsx';
import Footer from '/src/Components/Footer/Footer.jsx';
import PlesSlideShow from '/src/Components/Ples_slide_show/ples_s_s.jsx';
const Ples = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(PlesText);
  }, []);

  if (!data) {
    return <div>Učitavanje...</div>;
  }

  return (
    <>
      <Navbar />
      <h1 className="pt-10 text-center">Ples</h1>
      <PlesSlideShow/>
      <div className="flex flex-col items-center p-8">
        <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl">
          {/* Krugovi za Djecu */}
          <div className="flex flex-col items-center space-y-8 mb-8 md:mb-0 md:mr-8">
            {data.djecji.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <h2 className='podnaslov'>{item.title}</h2>
                <div className="circle flex items-center justify-center text-center w-96 h-96 rounded-full border-8 border-magenta-500 bg-white ">
                  <p className="p-8 ostatakTexta">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Krugovi za Odrasle */}
          <div className="flex flex-col items-center space-y-8 md:ml-8">
            {data.odrasli.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <h2 className="podnaslov">{item.title}</h2>
                <div className="circle flex items-center justify-center text-center w-96 h-96 rounded-full border-8 border-magenta-500 bg-white text-black shadow-lg">
                  <p className="ostatakTexta p-8">{item.description}</p>
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
