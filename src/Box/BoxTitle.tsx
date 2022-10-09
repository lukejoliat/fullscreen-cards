import React from "react";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export const BoxTitle = ({ children }: PropsWithChildren<any>) => {
  return (
    <motion.h1
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{ duration: 0.2, delay: 0.2 }}
    >
      {children}
    </motion.h1>
  );
};
