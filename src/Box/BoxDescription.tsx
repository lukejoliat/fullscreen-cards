import React from "react";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export const BoxDescription = ({ children }: PropsWithChildren<any>) => {
  return (
    <motion.p
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{ duration: 0.2, delay: 0.2 }}
    >
      {children}
    </motion.p>
  );
};
