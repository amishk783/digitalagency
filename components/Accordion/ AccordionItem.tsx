import { cn } from "@/utils";
import { Plus } from "lucide-react";
import { useRef } from "react";

interface AccordionItemProps {
  answer: string;
  question: string;
  onClick: () => void;
  isOpen: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  answer,
  question,
  onClick,
  isOpen,
}) => {
  const containerHeight = useRef<HTMLDivElement>(null);
  let height;
  if (containerHeight.current?.scrollHeight) {
    height = containerHeight.current.scrollHeight;
  }
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl hover:bg-card  transition-colors duration-500 ease-out",
        isOpen ? "bg-card " : ""
      )}
    >
      <button
        className={cn(
          "flex justify-between w-full py-3 px-5 text-left md:items-center  text-md cursor-pointer"
        )}
        onClick={onClick}
      >
        <p className="">{question}</p>
        <Plus
          className={cn(
            "transition-transform duration-300  ",
            isOpen ? "transform  rotate-45 " : ""
          )}
        />
      </button>
      <div
        style={isOpen ? { height: height } : { height: "0px" }}
        ref={containerHeight}
        className=" px-4 transition-all ease-in-out transform duration-700"
      >
        <p className="py-4 text-md">{answer}</p>
      </div>
    </div>
  );
};
