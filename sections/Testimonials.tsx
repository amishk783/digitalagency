import React, { useRef } from "react";
import Image from "next/image";
import { Slider } from "@/components/Slider/Slider";
import { Slide } from "@/components/Slider/Slide";
import { motion, useScroll, useTransform } from "framer-motion";
import { Road_Rage } from "next/font/google";
interface Testimonial {
  review: string;
  avatar: string;
  role: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    review:
      "Since using this incredible SAAS solution, our customer satisfaction has soared. It's truly a game-changer!",
    name: "Michael Ramirez",
    role: "Software Engineer",
    avatar: "/avatar.png",
  },
  {
    review:
      "Since using this incredible SAAS solution, our customer satisfaction has soared. It's truly a game-changer!",
    name: "Michael Ramirez",
    role: "Software Engineer",
    avatar: "/avatar.png",
  },
  {
    review:
      "Since using this incredible SAAS solution, our customer satisfaction has soared. It's truly a game-changer!",
    name: "Michael Ramirez",
    role: "Software Engineer",
    avatar: "/avatar.png",
  },
  {
    review:
      "Since using this incredible SAAS solution, our customer satisfaction has soared. It's truly a game-changer!",
    name: "Michael Ramirez",
    role: "Software Engineer",
    avatar: "/avatar.png",
  },
  {
    review:
      "Since using this incredible SAAS solution, our customer satisfaction has soared. It's truly a game-changer!",
    name: "Michael Ramirez",
    role: "Software Engineer",
    avatar: "/avatar.png",
  },
  {
    review:
      "Since using this incredible SAAS solution, our customer satisfaction has soared. It's truly a game-changer!",
    name: "Michael Ramirez",
    role: "Software Engineer",
    avatar: "/avatar.png",
  },
];

const Testimonials = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5], ["180deg", "0deg"]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section
      style={{
        transform: "perspective(1200px)  translateZ(0px)",
        transformOrigin: "top",
        transformStyle: "preserve-3d",
      }}
      ref={ref}
      className="flex text-primary  items-center flex-col flex-nowrap gap-16  min-h-min  overflow-hidden relative p-0 md:pt-20 w-full"
    >
      <div className=" flex items-center justify-center flex-col gap-4 overflow-visible o-0 relative w-3/4 ">
        <h2 className="text-2xl bg-gradient-radial-orange-reverse text-transparent bg-clip-text">
          Testimonials
        </h2>
        <h4 className="text-4xl md:text-6xl bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-700 text-transparent ">
          Real user experience
        </h4>
        <p>See how our SAAS solution has boosted businesses success.</p>
      </div>
      <motion.div
        style={{
          rotateX,
          scale,
          transform: "rotate(-25deg)",
        }}
        transition={{ duration: 2 }}
        className=" w-screen   mb-20 mask "
      >
        <Slider className=" flex gap-10">
          {testimonials.map((testimonial, index) => (
            <Slide key={index}>
              <div className="flex flex-col gap-5 bg-card p-10 justify-start will-change-auto rounded-lg w-[472px] transition-transform duration-300 ease-in-out transform hover:scale-105">
                <h2 className=" whitespace-normal text-xl">
                  {testimonial.review}
                </h2>
                <div className="flex gap-2">
                  <div className="w-14 h-14 rounded-full bg-slate-600">
                    {testimonial.avatar.length > 0 && (
                      <Image
                        className="rounded-full"
                        src={testimonial.avatar}
                        width={64}
                        height={64}
                        alt="avatar"
                      />
                    )}
                  </div>
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Slide>
          ))}
        </Slider>
        <Slider direction="right" className=" flex gap-10">
          {testimonials.map((testimonial, index) => (
            <Slide key={index}>
              <div className="flex flex-col gap-5 bg-card p-10 justify-start will-change-auto rounded-lg w-[462px] transition-transform duration-300 ease-in-out transform hover:scale-105">
                <h2 className=" text-xl whitespace-normal">
                  {testimonial.review}
                </h2>
                <div className="flex gap-2">
                  <div className="w-14 h-14 rounded-full bg-slate-600">
                    {testimonial.avatar.length > 0 && (
                      <Image
                        className="rounded-full"
                        src={testimonial.avatar}
                        width={64}
                        height={64}
                        alt="avatar"
                      />
                    )}
                  </div>
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Slide>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
};
export default Testimonials;
