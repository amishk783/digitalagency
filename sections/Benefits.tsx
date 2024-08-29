import { motion } from "framer-motion";
import Image from "next/image";
export default function Benefits() {
  return (
    <div className=" text-primary lg:mx-10  mx-5">
      <div className="text-center">
        <h6>EASY & INTUITIVE</h6>
        <h1 className=" text-3xl gap-2 pt-2 sm:text-5xl font-medium flex justify-center ">
          Customer
          <span className="text-blue-700">
            Benefits
            <motion.svg
              className=" w-32 xl:w-full"
              xmlns="http://www.w3.org/2000/svg"
              width=""
              height="8"
              viewBox="0 0 320 12"
            >
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#002a5e" />
                  {/* Dark blue color */}
                  <stop offset="100%" stopColor="#66a3ff" />
                  {/* Light blue color */}
                </linearGradient>
              </defs>
              <motion.path
                id="title_underline2"
                data-name="Path 109815"
                d="M-11937.369-10184.42s180.717-15.313,305.752-7.438"
                transform="translate(11938.991 10195.656)"
                fill="none"
                stroke="url(#gradient1)"
                stroke-linecap="round"
                stroke-width="3"
                initial={{ strokeDasharray: 500, strokeDashoffset: 500 }}
                whileInView={{ strokeDashoffset: 1 }}
                transition={{ duration: 1 }}
              ></motion.path>
            </motion.svg>
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-10 text-primary w-full xl:h-[500px] my-10 gap-5">
        <div className="flex flex-col row-span-4 justify-center items-center text-center bg-card  px-5 py-12 space-y-5 rounded-lg">
          <Image src="/xd.jpg" alt="xd file" width={74} height={50} />
          <div>
            <h1 className="text-2xl">XD Files Included</h1>
            <h2>Get source files for free</h2>
          </div>
        </div>
        <div className="flex flex-col row-span-5 justify-center items-center text-center bg-card px-5  py-12 space-y-2 rounded-lg">
          <Image src="/xd2.png" alt="xd file" width={129} height={100} />
          <h1 className="text-2xl">Buy Once, Use Forever</h1>
          <h2>Free lifetime updates</h2>
        </div>

        <div className="flex flex-col row-span-4 justify-center items-center text-center bg-card px-5 py-12 space-y-5 rounded-lg">
          <Image src="/xd.jpg" alt="xd file" width={74} height={50} />
          <div>
            <h1 className="text-2xl">All Demo Data</h1>
            <h2>Get source files for free</h2>
          </div>
        </div>
        <div className="flex flex-col row-span-6 justify-center items-center text-center bg-card px-5  py-12 space-y-2 rounded-lg">
          <Image src="/xd2.png" alt="xd file" width={169} height={100} />
          <h1 className="text-2xl">Premium Plugins</h1>
          <h2>Bundled with the theme</h2>
        </div>
        {/* </div> */}
        {/* <div className="flex justify-start flex-col w-5/6 space-y-8"> */}
        <div className="flex flex-col row-span-5 justify-center items-center text-center bg-card  px-5 py-12 space-y-5 rounded-lg">
          <Image src="/xd2.png" alt="xd file" width={75} height={40} />
          <div className="py-2">
            <h1 className="text-2xl">6 Months of Premium Support</h1>
            <h2>Get professional tech support</h2>
          </div>
        </div>
        <div className="flex flex-col row-start-5 row-span-6 justify-center items-center text-center bg-card px-5 py-12 space-y-5 rounded-lg">
          <Image src="/xd2.png" alt="xd file" width={95} height={50} />
          <div className="py-3">
            <h1 className="text-2xl">FAQ & Video Tutorials</h1>
            <h2>All information in one place</h2>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
