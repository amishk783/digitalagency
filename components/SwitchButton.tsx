import { cn } from "@/utils";
import React, { SetStateAction, useState } from "react";

interface Props {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const SwitchButton: React.FC<Props> = ({ checked, onChange }) => {
  const handleInteraction = (event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    onChange(!checked);
  };
  return (
    <div
      role="switch"
      aria-checked={checked}
      onClick={handleInteraction}
      onTouchEnd={handleInteraction}
      className={cn(
        " bg-card rounded-3xl w-16 h-8  relative flex cursor-pointer overflow-hidden items-center p-2 transition-transform duration-300 ease-in-out"
        // checked ? "justify-end" : "justify-start"
      )}
    >
      <div
        style={{
          background:
            "radial-gradient(100% 100% at 50% 0%, rgb(255, 169, 132) 0%, rgb(255, 89, 17) 100%)",
        }}
        className={cn(
          "rounded-full shadow-md w-5 h-5 transition-transform duration-300 ease-in-out",
          checked ? "translate-x-8 " : "translate-x-0 "
        )}
      ></div>
    </div>
  );
};
