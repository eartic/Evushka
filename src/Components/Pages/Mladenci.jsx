import React, { useEffect, useState } from "react";
import Navbar from '/src/Components/Navbar/Navbar.jsx';
import PlesMladenci from '/src/Components/Ples_slide_show/Ples_Slike/Ples1.png'

const Mladenci = () => {
  return (<>
    <Navbar/>
    <div className="mt-5">
        <p className="uvodniParagraph text-center sm:text-lg">Dragi mladenci, neka Vaš prvi ples bude
        poseban ❤️</p>
        <div className="flex justify-center justify-items-center">
          <img src={PlesMladenci} alt="Ples mladenci" className="w-2/3 h-auto" />
        </div>
    </div>
  </>
  )
}

export default Mladenci