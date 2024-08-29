import { motion } from "framer-motion";

import Image from "next/image";

export default function Demo() {
  return (
    <div className="flex justify-center">
      <div className="absolute overflow-visible -z-10 h-[200px]  lg:h-[1400px] lg:mt-40  bg-[url('/demopattern1.jpg')] w-full bg-cover bg-center opacity-30 "></div>
      <motion.div
        initial={{ opacity: 0.5, x: -205 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="flex justify-center items-center max-sm:w-[90%] sm:mx-5 lg:mx-20 pb-20 "
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 text-primary gap-10 ">
          <div className="flex justify-start flex-col ">
            <div className="text-center">
              <a className="">
                <Image src="/demo1.jpg" alt="show" height={400} width={544} />
              </a>
              <h5 className=" my-3 lg:my-7 py-3 text-2xl font-medium">
                SEO SERVICES
              </h5>
            </div>
            <div className="text-center">
              <a>
                <Image
                  className="border-8 border-zinc-50"
                  src="/demo2.jpg"
                  alt="show"
                  height={400}
                  width={544}
                />
                <h5 className="my-3 lg:my-7  py-3 text-2xl font-medium">
                  AI SOLUTIONS
                </h5>
              </a>
            </div>
          </div>

          <div className="flex justify-start flex-col">
            <div className="text-center">
              <a className="">
                <Image
                  src="/demo3.jpg"
                  alt="show"
                  height={400}
                  width={544}
                  className="border-8 border-zinc-50"
                />
              </a>
              <h5 className="my-3 lg:my-7  py-3 text-2xl font-medium">
                Digital Agency
              </h5>
            </div>

            <div className="text-center">
              <a className="">
                <Image
                  src="/demo4.jpg"
                  alt="show"
                  height={400}
                  width={544}
                  className="border-8 border-zinc-50"
                />
              </a>
              <h5 className="my-3 lg:my-7  py-3 text-2xl font-medium">
                Creative Agency
              </h5>
            </div>
            <div className="text-center">
              <a className="">
                <Image
                  src="/demo5.jpg"
                  alt="show"
                  height={400}
                  width={544}
                  className="border-8 border-zinc-50"
                />
              </a>
              <h5 className="my-3 lg:my-7  py-3 text-2xl font-medium">
                Startup
              </h5>
            </div>
          </div>
          <div className=" ">
            <div className="text-center">
              <a className="">
                <Image
                  src="/demo6.jpg"
                  alt="show"
                  height={400}
                  width={544}
                  className="border-8 border-zinc-50"
                />
              </a>
              <h5 className="my-3 lg:my-7  py-3 text-2xl font-medium">
                Marketing Agency
              </h5>
            </div>

            <div className="text-center">
              <a className="">
                <Image
                  src="/demo7.jpg"
                  alt="show"
                  height={400}
                  width={544}
                  className="border-8 border-zinc-50"
                />
              </a>
              <h5 className="my-3 lg:my-7  py-3 text-2xl font-medium">
                Mobile Application
              </h5>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
