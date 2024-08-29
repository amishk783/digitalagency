import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full flex justify-center z-10 mb-16 text-primary">
      <motion.div
        initial={{ opacity: 0, y: 205 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="py-20 my-10 w-[90%]  "
      >
        <h1 className=" text-2xl md:text-6xl lg:text-8xl flex flex-col font-medium text-center items-center">
          Digital Creative Agency
          <span className="break-words">
            WordPress Theme
            <motion.svg
              className="px-10 w-full max-sm:h-2 "
              xmlns="http://www.w3.org/2000/svg"
              width=""
              height="35"
              viewBox="0 0 320 12"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "#ffcc00", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#ff3300", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <motion.path
                id="title_underline2"
                data-name="Path 109815"
                d="M-11937.369-10184.42s180.717-15.313,305.752-7.438"
                transform="translate(11938.991 10195.656)"
                fill="none"
                stroke="url(#gradient)"
                stroke-linecap="round"
                stroke-width="3"
                initial={{ strokeDasharray: 500, strokeDashoffset: 500 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 2 }}
              ></motion.path>
            </motion.svg>
          </span>
        </h1>

        <h2 className="text-center text-md sm:text-lg lg:text-xl py-2">
          Create a Professional Website Today!
        </h2>
      </motion.div>
    </section>
  );
};
export default Hero;
