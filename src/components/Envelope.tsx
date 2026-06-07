import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Envelope: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEnvelope = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen z-10 perspective-1000">
      <motion.div
        className="relative cursor-pointer"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        onClick={toggleEnvelope}
      >
        {/* Envelope Container */}
        <motion.div 
          className="relative w-80 h-56 bg-red-800 rounded-b-lg shadow-2xl"
          animate={isOpen ? { scale: 1.1, translateY: 100 } : { scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Card Inside */}
          <motion.div
            className="absolute left-4 right-4 bottom-4 bg-white rounded-lg shadow-inner p-6 flex flex-col items-center justify-center text-center"
            initial={{ translateY: 0 }}
            animate={isOpen ? { translateY: -180, scale: 1.2 } : { translateY: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-serif text-red-600 mb-2">hello baby</h2>
            <p className="text-lg text-gray-700 font-medium italic">kaisa hai?</p>
            <div className="mt-4 text-red-500 text-3xl animate-bounce">❤️</div>
          </motion.div>

          {/* Envelope Front Flap (Lower part) */}
          <div className="absolute inset-0 z-20">
             {/* Left side triangle */}
            <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[160px] border-l-red-700 border-t-[112px] border-t-transparent"></div>
            {/* Right side triangle */}
            <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[160px] border-r-red-700 border-t-[112px] border-t-transparent"></div>
            {/* Bottom triangle */}
            <div className="absolute bottom-0 left-0 w-full h-0 border-b-[112px] border-b-red-900 border-l-[160px] border-l-transparent border-r-[160px] border-r-transparent"></div>
          </div>

          {/* Envelope Top Flap */}
          <motion.div
            className="absolute top-0 left-0 w-full h-0 border-t-[112px] border-t-red-600 border-l-[160px] border-l-transparent border-r-[160px] border-r-transparent origin-top z-30"
            animate={isOpen ? { rotateX: 180, zIndex: 0 } : { rotateX: 0, zIndex: 30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
      
      {!isOpen && (
        <motion.div 
          className="absolute bottom-20 text-white/50 text-sm animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Click the envelope to open
        </motion.div>
      )}
    </div>
  );
};

export default Envelope;
