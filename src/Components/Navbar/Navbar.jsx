import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Variants for hover animation
  const hoverVariants = {
    hover: {
      scale: 1.1,
      fontWeight: 500,
      color: '#D500F9', // Change color to magenta on hover
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <nav className="sticky top-0 z-50 bg-magenta-500 p-4">
      <div className="container mx-auto flex justify-center items-center bg-white rounded-full p-4 md:static">

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 p-2">
          {['Naslovna', 'Ples', 'Kutak za mladence', 'Rođendani', 'Jutarnja čuvaonica za djecu', 'Najam', 'Pravilnik', 'Kontakt'].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase().replace(/ /g, '')}`}
              className="navigacija text-black drop-shadow-md hover:drop-shadow-xl"
              variants={hoverVariants}
              whileHover="hover"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden fixed bottom-4 right-4 z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-magenta-500 hover:text-black focus:outline-none p-4 rounded-full bg-white border-2 border-magenta-500 shadow-lg"
            style={{ width: '60px', height: '60px' }} // Circular button
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg p-6 z-50">
          <div className="flex flex-col space-y-4">
            {['Naslovna', 'Ples', 'Kutak za mladence', 'Jutarnja čuvaonica za djecu', 'Najam', 'Pravilnik', 'Kontakt'].map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase().replace(/ /g, '')}`}
                className="text-black text-lg py-2"
                variants={hoverVariants}
                whileHover="hover"
                onClick={() => setIsOpen(false)} // Close menu after clicking
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
