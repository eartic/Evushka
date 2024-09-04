import React, { useState, useEffect } from 'react';
import LogoImage from '/src/Components/Banner/logo.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import { motion } from 'framer-motion';
import './Naslovna.css';

const circleVariants = {
  initial: { scale: 1, opacity: 1 },
  hover: {
    scale: 1.3,
    opacity: 0.9,
    transition: { type: 'spring', stiffness: 300, damping: 15 },
  },
};

const Naslovna = () => {
  const labels = [
    'Jutarnja čuvaonica za djecu',
    'Plesna rekreacija za djecu',
    'Tečaj društvenih plesova za odrasle',
    'Ladies latin',
    'Individualna poduka',
    'Team building',
    'Najam',
  ];

  return (
    <>
      <LogoImage />
      <Navbar />
      <div className="mt-10 mb-6">
        {/* Circle Grid Section */}
        <div className="flex justify-center items-center mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4 md:gap-6">
            {labels.map((label, index) => (
              <motion.div
                key={index}
                className="flex justify-center items-center w-32 h-32 md:w-44 md:h-44 rounded-full bg-magenta-500"
                variants={circleVariants}
                initial="initial"
                whileHover="hover"
              >
                <div className="flex justify-center items-center w-28 h-28 md:w-40 md:h-40 rounded-full bg-white text-center text-xl font-suse text-black">
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Naslovna;
