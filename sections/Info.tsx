import { Globe } from "lucide-react";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
export const Info = () => {
  const { scrollYProgress } = useScroll();

  const yValue = useTransform(scrollYProgress, [0, 1], [200, -200]);
  return (
    <section className=" flex flex-col justify-start overflow-hidden relative  py-16 items-center text-primary mb-32 max-container">
      <div className="flex items-center flex-col gap-8 justify-start overflow-visible relative w-full p-0">
        <h2 className=" max-w-[716px] whitespace-pre-wrap  w-full break-words break-before-auto ">
          <span className=" text-4xl leading-snug text-wrap text-center bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-700 text-transparent  inline-block  ">
            Unleash Your Brand’s Potential with Tailored WordPress Solutions –
            Elevate Your Digital Presence with Our Expertise!
          </span>
        </h2>
        <motion.div
          style={{ translateY: yValue }}
          // iniatial={{ opacity: 1, y: 100 }}
          transition={{ duration: 2 }}
          className=" flex flex-row gap-2 justify-center items-center fill-white text-white opacity-100 flex-shrink-0 w-16 h-16 rounded-full bg-gradient-radial "
        >
          <Globe className="w-10 h-10 text-zinc-300 -rotate-45" />
        </motion.div>
      </div>
      <div className=" absolute bottom-11 left-12 p-8 ">
        <div className=" relative w-28 h-28 items-center flex  justify-center">
          <div className="bg-gradient-radial-reverse absolute w-24 h-24 opacity-50 rounded-full"></div>
          <Image
            className=" -rotate-[30deg] rounded-full"
            src="/elementor-icon.png"
            alt="tools"
            width={80}
            height={80}
          />
        </div>
      </div>
      <div className=" absolute top-5 right-32 p-8 ">
        <div className=" relative w-28 h-28 items-center flex  justify-center">
          <div className="bg-gradient-radial-reverse absolute w-24 h-24 opacity-50 rounded-full"></div>
          <Image
            className=" -rotate-[30deg] rounded-full bg-zinc-200"
            src="/wordpress.png"
            alt="tools"
            width={80}
            height={80}
          />
        </div>
      </div>
      <div className="flex  justify-center relative w-[600px] overflow-visible z-10 ">
        <div className=" bg-gradient-radial-orange blur-[60px] rounded-full opacity-50 h-[200px] absolute w-[388px] -z-20 justify-center"></div>
        <div className=" bg-gradient-linear absolute opacity-100 h-[1px] w-[600px] z-20 -bottom-16"></div>
      </div>
    </section>
  );
};
