import React from "react";
import Hero from "../components/Hero";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -300,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: 300,
      }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
    </motion.div>
  );
}

export default Home;
