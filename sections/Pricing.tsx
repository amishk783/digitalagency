import { Card } from "@/components/Card";
import { SwitchButton } from "@/components/SwitchButton";
import { cn } from "@/utils";
import { motion } from "framer-motion";
import { Check, DollarSign, Minus } from "lucide-react";
import React, { useState } from "react";
import { Fragment } from "react";
const packages = [
  {
    title: "Starter",
    monthly_price: 0,
    yearly_price: 0,
    description: "Begin Your Journey",
    features: [
      "Unlimited Projects",
      "Share with 5 team members",
      "Sync across devices",
    ],
  },
  {
    title: "Growth",
    monthly_price: 7,
    yearly_price: 9,
    description: "Expand Your Reach",
    features: [
      "Everything in Starter Plan",
      "Document Management",
      "Priority Custom Support",
    ],
  },
  {
    title: "Enterprise",
    monthly_price: 120,
    yearly_price: 96,
    description: "Unlock Unlimited Potential",
    features: [
      "Everything in Growth Plan",
      "Premium Widgets",
      "Intergration with 3rd-Party Services",
    ],
  },
];

export const Pricing = () => {
  const [isYearly, setISYearly] = useState(false);

  return (
    <section className="w-full text-primary py-20 lg:py-40 ">
      <div className="container mx-auto">
        <div className="flex flex-col space-y-3 mb-10 justify-center items-center w-full ">
          <h2 className=" text-4xl sm:text-5xl bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 text-transparent ">
            Choose The Plan
          </h2>
          <div className="flex flex-col items-center sm:flex-row gap-2 sm:gap-4">
            <p>Monthly plans</p>
            <SwitchButton checked={isYearly} onChange={setISYearly} />
            <h5 className="">
              Annual Plans
              <span className="text-red-400 mx-2  animate-pulse">20% off</span>
            </h5>
          </div>
        </div>
        <div className="flex w-full justify-center max-sm:px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full xl:w-[80%] gap-5 ">
            {packages.map((plan, _index) => (
              <Fragment key={plan.title}>
                <Card
                  className={cn(
                    " w-full xl:w-96 rounded-3xl overflow-hidden ",
                    _index % 2 !== 0 ? "bg-card" : "bg-gradient-card "
                  )}
                >
                  {_index % 2 !== 0 && (
                    <div className="flex  justify-center relative w-full overflow-visible z-10  ">
                      <div className=" bg-gradient-radial-orange-reverse blur-[60px] rotate-180 rounded-full opacity-50 h-[200px] absolute w-[388px] -bottom-20 -z-20 justify-center"></div>
                      <div className=" bg-gradient-linear opacity-100 h-[1px] w-[105%] z-20 -mt-2"></div>
                    </div>
                  )}
                  <div className="flex flex-col space-y-8 p-8  ">
                    <div className="flex flex-col space-y-2">
                      <h4 className="text-2xl font-medium">{plan.title}</h4>
                      <p className=" text-zinc-500">{plan.description}</p>
                    </div>
                    <div className="flex items-center gap-3 ">
                      <div className="flex items-center text-5xl bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 text-transparent transition-transform duration-500 ease-in-out ">
                        ${isYearly ? plan.yearly_price : plan.monthly_price}
                      </div>
                      <p className="text-zinc-400">/month</p>
                    </div>
                    <button
                      className={cn(
                        "w-full rounded-md py-2 text-lg ",
                        _index % 2 === 0 ? "bg-card" : "bg-orange-600"
                      )}
                    >
                      Get early Access
                    </button>
                    <div className="flex flex-col gap-3 mx-1">
                      <h4 className="text-md text-zinc-400 flex">Features</h4>
                      <ul className="flex flex-col gap-3 ">
                        {plan.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex list-none gap-2 items-center "
                          >
                            <Check className="text-orange-500" />
                            <p>{feature}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
