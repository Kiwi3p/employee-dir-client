import React from "react";
import { motion } from "framer-motion";
import ListNames from "../components/ListNames";
// import { animationOne, transition } from "./animation";

function List() {
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
      <ListNames />
    </motion.div>
  );
}

export default List;
