import React from 'react';
import { FaEnvelope, FaPhone, FaInstagram, FaFacebook, FaWhatsapp, FaViber } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';
import LogoImage from '../Banner/logo.jsx';
import { Helmet } from 'react-helmet';

const Kontakt = () => {
  return (
    <>
    <Helmet>
      <title>Kontakt podaci plesne igraonice i rođendaonice - Evushka</title>
      <meta name='description' content='Stupite u kontakt sa našim osobljem i dogovorite Vaš sljedeći termin!'/>
      <meta name="keywords" content="Kontakt Evushka, broj Evushka, kontakt najam prostora Zagreb, email igraonice Zagreb, kontakt ples za djecu, kontakt rođendaonica Zagreb" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://evushka.com/kontakt" />
      <meta property="og:title" content="Kontakt plesne igraonice i rođendaonice Evushka" />
        <meta property="og:description" content="Kako dogovoriti svoj sljedeći termin u plesnoj igraonici i rođendaonici Evushka" />
        <meta property="og:image" content="https://evushka.com/assets/logo_djeca-CDRpXGzM.jpg" />
        <meta property="og:url" content="https://evushka.com/kontakt" />
        <meta property="og:type" content="website" />
      </Helmet>
      <LogoImage />
      <Navbar />

      
      <section>
        <div className="flex justify-center items-center mt-5">
          <h2 alt='Kontaktirajte Evushku' className="podnaslov">Kontaktirajte nas:</h2>
        </div>

        
        <div className="grid grid-cols-2 gap-2 mx-4 p-2 md:grid-cols-6 md:mx-32">

        
          <div className="flex flex-col items-center">
            <motion.div
              className="shadow-lg shadow-magenta-500 flex items-center justify-center text-center w-20 h-20 rounded-full border-4 border-magenta-500 bg-white"
              variants={{ initial: { scale: 1, opacity: 1 }, hover: { scale: 1.1, opacity: 0.9, transition: { type: 'spring', stiffness: 300, damping: 15 } } }}
              initial="initial"
              whileHover="hover"
            >
              <a href="mailto:info@evushka.com" aria-label="Email">
                <FaEnvelope className="text-3xl text-magenta-500" />
              </a>
            </motion.div>
            <p className="mt-2">Email</p>
          </div>

         
          <div className="flex flex-col items-center">
            <motion.div
              className="shadow-lg shadow-magenta-500 flex items-center justify-center text-center w-20 h-20 rounded-full border-4 border-magenta-500 bg-white"
              variants={{ initial: { scale: 1, opacity: 1 }, hover: { scale: 1.1, opacity: 0.9, transition: { type: 'spring', stiffness: 300, damping: 15 } } }}
              initial="initial"
              whileHover="hover"
            >
<a href="tel:+385995913887" aria-label="Phone">
<FaPhone className="text-3xl text-magenta-500" />
              </a>
            </motion.div>
            <p className="mt-2">Telefon</p>
          </div>

          
          <div className="flex flex-col items-center">
            <motion.div
              className="shadow-lg shadow-magenta-500 flex items-center justify-center text-center w-20 h-20 rounded-full border-4 border-magenta-500 bg-white"
              variants={{ initial: { scale: 1, opacity: 1 }, hover: { scale: 1.1, opacity: 0.9, transition: { type: 'spring', stiffness: 300, damping: 15 } } }}
              initial="initial"
              whileHover="hover"
            >
    <a href="https://www.instagram.com/evushka_igraonica_rodendaonica/profilecard/?igsh=azhzNzRtYnR6NjR2" target="_blank" rel="noopener noreferrer" aria-label="Instagram" alt='Instagram profil Plesna igraonica i rođendaonica- Evushka'>
    <FaInstagram className="text-3xl text-magenta-500" />
              </a>
            </motion.div>
            <p className="mt-2">Instagram</p>
          </div>

        
          <div className="flex flex-col items-center">
            <motion.div
              className="shadow-lg shadow-magenta-500 flex items-center justify-center text-center w-20 h-20 rounded-full border-4 border-magenta-500 bg-white"
              variants={{ initial: { scale: 1, opacity: 1 }, hover: { scale: 1.1, opacity: 0.9, transition: { type: 'spring', stiffness: 300, damping: 15 } } }}
              initial="initial"
              whileHover="hover"
            >
    <a href="https://www.facebook.com/people/Plesna-igraonica-i-ro%C4%91endaonica-Evushka/61562570052064/?rdid=KnEJsKf2TdYp672i&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FmLJNRGucr7kucm8z%2F" target="_blank" rel="noopener noreferrer" aria-label="Facebook" alt='Facebook profil Plesna igraonica i rođendaonica- Evushka'>
    <FaFacebook className="text-3xl text-magenta-500" />
              </a>
            </motion.div>
            <p className="mt-2">Facebook</p>
          </div>

         
          <div className="flex flex-col items-center">
            <motion.div
              className="shadow-lg shadow-magenta-500 flex items-center justify-center text-center w-20 h-20 rounded-full border-4 border-magenta-500 bg-white"
              variants={{ initial: { scale: 1, opacity: 1 }, hover: { scale: 1.1, opacity: 0.9, transition: { type: 'spring', stiffness: 300, damping: 15 } } }}
              initial="initial"
              whileHover="hover"
            >
<a href="https://wa.me/385995913887" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" alt='Whatsapp kontakt Plesna igraonica i rođendaonica- Evushka'>
<FaWhatsapp className="text-3xl text-magenta-500" />
              </a>
            </motion.div>
            <p className="mt-2">WhatsApp</p>
          </div>

         
          <div className="flex flex-col items-center">
            <motion.div
              className="shadow-lg shadow-magenta-500 flex items-center justify-center text-center w-20 h-20 rounded-full border-4 border-magenta-500 bg-white"
              variants={{ initial: { scale: 1, opacity: 1 }, hover: { scale: 1.1, opacity: 0.9, transition: { type: 'spring', stiffness: 300, damping: 15 } } }}
              initial="initial"
              whileHover="hover"
            >
<a href="viber://contact?number=385995913887" target="_blank" rel="noopener noreferrer" aria-label="Viber" alt='Viber kontakt Plesna igraonica i rođendaonica- Evushka'>
<FaViber className="text-3xl text-magenta-500" />
              </a>
            </motion.div>
            <p className="mt-2">Viber</p>
          </div>

        </div>
      </section>

  
      <section className="mt-10">
      <div className="flex justify-center mt-8">
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.770781095259!2d15.966247315570256!3d45.77618427910565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6376c74fe4b%3A0x3231fd7e54e7c8d4!2sJaru%C5%A1%C4%8Dica%209b%2C%2010020%2C%20Zagreb%2C%20Croatia!5e0!3m2!1sen!2sus!4v1695918914145!5m2!1sen!2sus"
    className="shadow-xl shadow-lavender-500  w-full h-64 sm:w-3/4 sm:h-80 md:w-2/3 md:h-96 lg:w-1/2 lg:h-96 xl:w-1/3 xl:h-96 border-4 border-magenta-500" 
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    alt='Google Maps lokacija Plesna igraonica i rođendaonica- Evushka'
  ></iframe>
</div>
      </section>

      <Footer />
    </>
  );
};

export default Kontakt;
