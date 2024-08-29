import { cn } from "@/utils";
import { Globe } from "lucide-react";
import React from "react";

interface FooterType {
  [key: string]: string[];
}

const footerLinks: FooterType = {
  Pages: ["HOME", "SERVICE", "ABOUT", "PRICING", "CONTACT"],
  CMS: ["WORK", "BLOG"],
  Utility: ["STYLEGUIDE", "404 ERROR PAGE", "LICENSING"],
};

const Footer = () => {
  return (
    <footer className="container mx-auto xl:max-container relative overflow-hidden text-white pt-[3px] px-[3px] rounded-lg mt-20   ">
      <div
        className={cn(
          "absolute w-[150%] -z-10 h-[160%] left-[-25%] bottom-5  md:bottom-[-75%] wrapper animate-border-spin"
        )}
      ></div>
      <div className=" bg-card pt-10  md:pt-20 xl:px-10 rounded-lg  ">
        <div className=" flex flex-col md:flex-row z-10  gap-8 mx-5  md:mx-20 ">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 mb-4">
              <Globe />
              <h2>Warki</h2>
            </div>
            <p className="md:w-[40%] whitespace-pre-wrap text-wrap text-left ">
              Warki, your all-in-one solution for SAAS and startup project
              websites. Packed with a wide range of pre-built components, it
              equips you with everything you need to bring your ideas to life
              seamlessly.
            </p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div
                className="flex flex-col flex-grow flex-shrink-0"
                key={section}
              >
                <h4 className="font-bold mb-4">{section}</h4>
                <ul>
                  {links.map((link) => (
                    <li key={link} className="mb-2 hover:text-orange-100">
                      <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 pt-5 border-t-[1px] border-orange-200">
          <div className="py-5">
            <h5 className="text-center">
              ©2023 Storm Framer Template. All rights reserved.
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
