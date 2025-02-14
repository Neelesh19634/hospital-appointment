'use client';

import { Handshake, Heart, Scale, Star, Users } from "lucide-react";
import { motion } from "framer-motion";


const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration:2, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.8,
    },
  },
};

const OurValues = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} 
      variants={staggerContainer}
      className="bg-white flex items-center justify-center min-h-screen px-10 py-24"
    >
      <div className="text-center w-full max-w-6xl">
        <motion.h1 variants={fadeInUp} className="text-6xl font-bold text-[#274760] mb-20">
          Our Values
        </motion.h1>
        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { icon: Heart, title: "Compassion", description: "We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment." },
            { icon: Star, title: "Excellence", description: "We are committed to providing excellent medical care and services to our patients. We believe in continuously improving our skills, knowledge, and resources." },
            { icon: Scale, title: "Integrity", description: "We believe in practicing medicine with integrity and honesty. We are transparent in our communication and decision-making processes." },
            { icon: Handshake, title: "Respect", description: "We treat all individuals with respect and dignity, regardless of their background, beliefs, or circumstances." },
            { icon: Users, title: "Teamwork", description: "We believe in working collaboratively with our team members and other healthcare professionals to provide comprehensive and effective care." }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }} 
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:cursor-pointer transition duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <motion.div
                  whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
                  className="rounded-full bg-[#DBEAFE] p-2"
                >
                  <value.icon size={40} className="text-blue-600" />
                </motion.div>
              </div>
              <h2 className="text-xl font-semibold text-[#274760] mb-2">{value.title}</h2>
              <p className="text-zinc-400">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurValues;