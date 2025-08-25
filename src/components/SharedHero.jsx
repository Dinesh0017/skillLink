import React from "react";
import { motion } from "framer-motion";

const SharedHero = ({ title, subtitle, image }) => {
  return (
    <section className="relative bg-gradient-to-br from-[#06e59f] to-[#d9f3e8] mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-16">
        
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800">
            {title}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-600 mr-0 md:mr-4 ">
            {subtitle}
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 mt-6 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <motion.img
            src={image}
            alt={title}
            className="w-full rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SharedHero;
