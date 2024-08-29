import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";

import { Inter } from "next/font/google";
import Demo from "@/components/Demo";

import Header from "@/components/Header/Header";
import Benefits from "@/sections/Benefits";
import Plugins from "@/components/Plugins";
import { Globe, Star } from "lucide-react";
import { Slider } from "@/components/Slider/Slider";
import { Slide } from "@/components/Slider/Slide";
import { Testimonials } from "@/sections/Testimonials";

const inter = Inter({ subsets: ["latin"] });

const slides: string[] = [
  "Innovative solutions for your digital transformation.",
  "Boost your online presence with our expert strategies.",
  "Creative designs that captivate and convert.",
  "Maximize ROI with tailored marketing campaigns.",
  "Your vision, our expertise—let's build something great.",
];

export default function Home() {
  const { scrollYProgress } = useScroll();

  const yValue = useTransform(scrollYProgress, [0, 1], [200, -200]);
  return (
    <main className=" relative overflow-hidden">
      <div className=" absolute overflow-visible -z-10 h-[818px]  bg-[url('/pattern2.png')] w-full bg-cover bg-center bg-blend-hard-light opacity-40"></div>
      <div className="container mx-auto -z-10 overflow-hidden ">
        <Header />

        <section className=" z-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 205 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="py-20 my-10 "
          >
            <h1 className=" text-8xl flex flex-col text-white font-medium text-center items-center">
              Digital Creative Agency
              <span className="break-words">
                WordPress Theme
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1000"
                  height="35"
                  viewBox="0 0 320 12"
                >
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
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
            <h2 className="text-center text-xl py-2">
              Create a Professional Website Today!
            </h2>
          </motion.div>
        </section>
      </div>

      <Demo />
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
      <Benefits />

      <div className="pt-20 mb-20">
        <div className="max-container mask">
          <Slider className="gap-20" speed={20} direction="left">
            {slides.map((slide) => (
              <Slide
                className="text-primary text-2xl  group  hover:text-orange-200 "
                key={slide}
              >
                <div className=" flex  gap-20">
                  <Star className=" fill-white group-hover:fill-orange-200  flex w-10 h-8" />

                  {slide}
                </div>
              </Slide>
            ))}
          </Slider>
        </div>
      </div>
      <Plugins />
      <Testimonials />
    </main>
  );
}
