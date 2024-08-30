import React, { Fragment, useState } from "react";
import { AccordionItem } from "./ AccordionItem";
import { cn } from "@/utils";

const faqContent = [
  {
    question: "How do I get started with building a WordPress website?",
    answer:
      "Contact us to discuss your website needs, and we'll guide you through our streamlined process to design and develop a WordPress site that meets your goals.",
  },
  {
    question:
      "Is WordPress suitable for both small businesses and large enterprises?",
    answer:
      "Absolutely! WordPress is highly flexible and scalable, making it ideal for businesses of all sizes, from small startups to large enterprises.",
  },
  {
    question: "What kind of WordPress services do you offer?",
    answer:
      "We offer a full range of WordPress services including custom theme development, plugin integration, SEO optimization, and ongoing maintenance and support.",
  },
  {
    question: "Can I customize my WordPress website to fit my brand?",
    answer:
      "Yes, we provide fully customizable solutions, ensuring that your WordPress website perfectly reflects your brand's identity and meets your specific business needs.",
  },
  {
    question: "How do you ensure the security of my WordPress website?",
    answer:
      "We implement industry-leading security measures, including regular updates, security monitoring, and backups, to protect your WordPress website from threats.",
  },
];

export const Accordion = ({ className }: { className?: string }) => {
 
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const handleClick = (index: number) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };
  return (
    <div className={cn("max-w-3xl lg:w-[540px] w-full ")}>
      <div className="flex flex-col space-y-5">
        {faqContent.map((item, index) => (
          <Fragment key={index}>
            <AccordionItem
              question={item.question}
              answer={item.answer}
              isOpen={activeIndexes.includes(index)}
              onClick={() => handleClick(index)}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
