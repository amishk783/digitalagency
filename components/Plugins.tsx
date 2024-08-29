import Card from "./Card";

import { pluginsData } from "@/constant/contants";

export default function Plugins() {
  return (
    <section className="xl:mx-20 my-20 py-10 text-primary max-container">
      <div className="w-full flex items-center justify-center mx-20 px-10 ">
        <div className="flex flex-col md:flex-row gap-10 pl-10">
          <div className="grid grid-cols-3 ">
            {pluginsData.map((plugin) => (
              <Card key={plugin.imageAlt} {...plugin} />
            ))}
          </div>
          <div className="flex-1 space-y-5 text-primary w-full">
            <h5 className="text-sm font-normal"> POWERFUL PLUGINS</h5>
            <h1 className="text-6xl font-bold ">
              $100-worth of Premium Plugins for Free!
            </h1>
            <p className=" whitespace-pre-wrap w-5/6">
              With our theme, you get a bundle of premium plugins to help you
              create exactly what you want. Get the best experience with less
              effort.
            </p>
            <button className="text-center text-white px-5 py-3 bg-green-500 rounded-full">
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
