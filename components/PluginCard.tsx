import Image from "next/image";

import { PluginT } from "@/constant/contants";

export default function PluginCard({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  width,
  height,
}: PluginT) {
  return (
    <div className="col-span-1 bg-gradient-card text-primary py-5 px-2 mx-2 my-2 border-2 border-orange-300">
      <div className="flex flex-col justify-center items-center text-center lg:px-5 lg:py-3 space-y-3 rounded-lg">
        <Image src={imageSrc} alt={imageAlt} width={width} height={height} />
        <div>
          <h2 className="text-lg">{title}</h2>
          <p className=" text-sm">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
