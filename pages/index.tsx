import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import Demo from "@/components/Demo";
import { Star } from "lucide-react";
import { Slider } from "@/components/Slider/Slider";
import { Slide } from "@/components/Slider/Slide";

const Header = dynamic(() => import("@/components/Header/Header"));
const Benefits = dynamic(() => import("@/sections/Benefits"));
const Plugins = dynamic(() => import("@/components/Plugins"));

const Testimonials = dynamic(() => import("@/sections/Testimonials"));
const Footer = dynamic(() => import("@/sections/Footer"));
const Hero = dynamic(() => import("@/sections/Hero"));
const inter = Inter({ subsets: ["latin"] });

const slides: string[] = [
  "Innovative solutions for your digital transformation.",
  "Boost your online presence with our expert strategies.",
  "Creative designs that captivate and convert.",
  "Maximize ROI with tailored marketing campaigns.",
  "Your vision, our expertise—let's build something great.",
];

export default function Home() {
  return (
    <main className=" ">
      <div className=" absolute overflow-visible -z-10 h-[818px]  bg-[url('/pattern2.png')] w-full bg-cover bg-center bg-blend-hard-light opacity-40"></div>
      <div className="w-full xl:max-container xl:mx-auto -z-10 ">
        <Header />
        <Hero />
      </div>

      <Demo />

      <Benefits />

      <div className="pt-20 mb-20">
        <div className=" relative  xl:max-container mask">
          <Slider className="gap-20" speed={20} direction="left">
            {slides.map((slide, index) => (
              <Slide
                className="text-primary text-2xl  group  hover:text-orange-200 "
                key={index}
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
      <Footer />
    </main>
  );
}
