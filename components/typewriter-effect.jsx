"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function TypewriterEffect({ words, className = "" }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);


  return (
    <div className={`inline-flex items-center ${className}`}>
      <span>{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1 text-blue-400"
      >
        |
      </motion.span>
    </div>
  );
}
