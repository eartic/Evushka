import React, { useEffect, useState } from "react";
import Navbar from '/src/Components/Navbar/Navbar.jsx';

const Mladenci = () => {
  return (<>
    <Navbar/>
    <div>
        <p className="uvodniParagraph text-center">Dragi mladenci, neka Vaš prvi ples bude
        poseban ❤️</p>
    </div>
  </>
  )
}

export default Mladenci