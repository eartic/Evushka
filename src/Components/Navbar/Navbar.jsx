import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Dodaj ovaj import

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const hoverVariants = {
    hover: {
      scale: 1.1,
      fontWeight: 500,
      color: '#D500F9',
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <nav className="sticky top-0 z-50 bg-magenta-500 p-4">
      <div className="container mx-auto flex justify-center items-center bg-white rounded-full p-4">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 p-2">
          {['Naslovna', 'Ples', 'Kutak za mladence', 'Rođendani', 'Jutarnja čuvaonica za djecu', 'Najam', 'Pravilnik', 'Kontakt'].map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }}>
              <Link
                to={item.toLowerCase().replace(/ /g, '') === 'naslovna' ? '/' : `/${item.toLowerCase().replace(/ /g, '')}`}
                className="navigacija text-black drop-shadow-md hover:drop-shadow-xl"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-magenta-500 hover:text-black focus:outline-none p-2 rounded-full bg-white border-2 border-magenta-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white rounded-full mt-1 p-4">
          {['Naslovna', 'Ples', 'Kutak za mladence', 'Rođendani', 'Jutarnja čuvaonica za djecu', 'Najam', 'Pravilnik', 'Kontakt'].map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }}>
              <Link
                to={item.toLowerCase().replace(/ /g, '') === 'naslovna' ? '/' : `/${item.toLowerCase().replace(/ /g, '')}`}
                className="flex justify-center text-black py-2"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </nav>
  );
}
