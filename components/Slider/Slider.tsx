import { cn } from "@/utils";
import { motion, useAnimationControls } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
}

export const Slider: React.FC<Props> = ({
  children,
  className,
  direction = "left",
  speed = 36,
}) => {
  const slides = React.Children.toArray(children);
  const duplicatedSlides = [...slides, ...slides];
  const slideSpeed = `${speed}s`;
  return (
    <>
      <div
        style={
          {
            "--slide-speed": slideSpeed,
          } as React.CSSProperties
        }
        data-direction={direction}
        className={cn(" slider outline-dotted outline-2 outline-orange-100")}
      >
        <div className={cn("flex p-4 inner_slider ", className)}>
          {duplicatedSlides}
        </div>
      </div>
    </>
  );
};
