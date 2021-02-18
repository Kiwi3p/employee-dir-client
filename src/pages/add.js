import React from "react";
import { motion } from "framer-motion";
import AddName from "../components/AddName";

function Add() {
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
    <AddName />
    </motion.div>
  );
}

export default Add;
