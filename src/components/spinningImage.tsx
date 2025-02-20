import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bryce from "../assets/bryce.webp"; // Adjust the path as needed

export default function SpinningImage() {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 3000); // Start animation after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {!startAnimation ? (
        <img src={bryce} alt="Spinning Image" className="w-48 h-48" />
      ) : (
        <motion.img
          src={bryce}
          alt="Spinning Image"
          className="w-48 h-48"
          initial={{ scale: 1, opacity: 1, rotate: 0 }}
          animate={{
            scale: 0,
            opacity: 0,
            rotate: 360,
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}
