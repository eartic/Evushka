import React, { useEffect, useState } from "react";
import PlesText from '/src/Components/Pages/PlesText.json'; 
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
      <PlesSlideShow />
      <div className="flex flex-col items-center p-8">
        <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl">
          <div className="flex flex-col items-center space-y-8 mb-8 md:mb-0 md:mr-8">
            {data.djecji.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <h2 className='podnaslov'>{item.title}</h2>
                <div className="flex items-center justify-center text-center w-96 h-96 rounded-full border-8 border-magenta-500 bg-white shadow-2xl shadow-gray-800">
                <p className="ostatakTexta mt-6 p-8" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center space-y-8 md:ml-8">
            {data.odrasli.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <h2 className="podnaslov">{item.title}</h2>
                <div className="flex items-center justify-center text-center w-96 h-96 rounded-full border-8 border-magenta-500 bg-white shadow-2xl shadow-gray-800">
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