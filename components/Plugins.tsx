import Card from "./Card";

import { pluginsData } from "@/constant/contants";

export default function Plugins() {
  return (
    <section className="w-full py-10 my-20 text-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h5 className="text-sm font-normal uppercase tracking-wide">
              Powerful Plugins
            </h5>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              $100-worth of Premium Plugins for Free!
            </h1>
            <p className="text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
              With our theme, you get a bundle of premium plugins to help you
              create exactly what you want. Get the best experience with less
              effort.
            </p>
            <button className="inline-block bg-green-500 text-white font-semibold px-6 py-3 rounded-full transition duration-300 hover:bg-green-600">
              View More
            </button>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {pluginsData.map((plugin) => (
                <Card key={plugin.imageAlt} {...plugin} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
