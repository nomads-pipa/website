import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FadingText() {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 3000); // Start animation after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.p
      className="text-xl font-semibold mt-4"
      initial={{ opacity: 1 }}
      animate={startAnimation ? { opacity: 0 } : {}}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      I rule Pipa, ya'll suck!
    </motion.p>
  );
}

