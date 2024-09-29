import React from 'react';
import { FaEnvelope, FaPhone, FaInstagram, FaFacebook, FaWhatsapp, FaViber } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Kontakt = () => {
  return (
    <>
      <Navbar />
      <h2 className="podnaslov pt-10 text-center">Kontaktirajte nas:</h2>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 p-7">
          {/* Email Circle */}
          <div className="flex flex-col items-center">
            <div className="circle flex items-center justify-center text-center w-20 h-20 rounded-full border-8 border-magenta-500 bg-white">
              <a href="mailto:info@evushka.com" aria-label="Email">
                <FaEnvelope className="text-4xl text-magenta-500" />
              </a>
            </div>
            <p className="mt-2">Email</p>
          </div>

          {/* Phone Circle */}
          <div className="flex flex-col items-center">
            <div className="circle flex items-center justify-center text-center w-20 h-20 rounded-full border-8 border-magenta-500 bg-white">
              <a href="tel:+1234567890" aria-label="Phone">
                <FaPhone className="text-4xl text-magenta-500" />
              </a>
            </div>
            <p className="mt-2">Phone</p>
          </div>

          {/* Instagram Circle */}
          <div className="flex flex-col items-center">
            <div className="circle flex items-center justify-center text-center w-20 h-20 rounded-full border-8 border-magenta-500 bg-white">
              <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-4xl text-magenta-500" />
              </a>
            </div>
            <p className="mt-2">Instagram</p>
          </div>

          {/* Facebook Circle */}
          <div className="flex flex-col items-center">
            <div className="circle flex items-center justify-center text-center w-20 h-20 rounded-full border-8 border-magenta-500 bg-white">
              <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="text-4xl text-magenta-500" />
              </a>
            </div>
            <p className="mt-2">Facebook</p>
          </div>

          {/* WhatsApp Circle */}
          <div className="flex flex-col items-center">
            <div className="circle flex items-center justify-center text-center  w-20 h-20 rounded-full border-8 border-magenta-500 bg-white">
              <a href="https://api.whatsapp.com/send?phone=1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp className="text-4xl text-magenta-500" />
              </a>
            </div>
            <p className="mt-2">WhatsApp</p>
          </div>

          {/* Viber Circle */}
          <div className="flex flex-col items-center">
            <div className="circle flex items-center justify-center text-center w-20 h-20 rounded-full border-8 border-magenta-500 bg-white">
              <a href="viber://chat?number=1234567890" target="_blank" rel="noopener noreferrer" aria-label="Viber">
                <FaViber className="text-4xl text-magenta-500" />
              </a>
            </div>
            <p className="mt-2">Viber</p>
          </div>
        </div>
      </div>

      {/* Google Map Section in Circle */}
      <div className="flex justify-center items-center mt-10">
        <div className="flex flex-col items-center">
          <h2 className="podnaslov text-center mb-4">Naša Lokacija</h2>
          <div className="circle w-96 h-96 rounded-full border-8 border-magenta-500 bg-white shadow-md overflow-hidden flex justify-center items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620.298178622757!2d15.97331731567414!3d45.8153912791013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d53d9f14995b%3A0xd0c4c3aa913c6829!2sJaru%C5%A1cica%209b%2C%2010020%20Zagreb%2C%20Croatia!5e0!3m2!1sen!2sus!4v1696101292945!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map Location"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Kontakt;
