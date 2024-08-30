import { Accordion } from "@/components/Accordion/Accordion";
import React from "react";

export const Faq = () => {
  return (
    <div className="flex items-center justify-center w-full text-primary md:py-20 mb-10">
      <div className=" container xl:max-container md:mx-5 lg:mx-20 ">
        <div className="flex flex-col lg:flex-row w-full justify-around max-sm:px-2 gap-10 sm:gap-0 ">
          <div className="flex flex-col space-y-5  p-4 ">
            <h2 className="text-5xl bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-700 text-transparent inline-block">
              Questions & Answer
            </h2>
            <p className="text-zinc-400 mx-1  ">
              Can&apos;t find what you&asop;re looking for?
            </p>
            <button className="px-2 w-32 py-3 bg-card rounded-2xl">
              Contact Us
            </button>
          </div>
          <Accordion className="" />
        </div>
      </div>
    </div>
  );
};
