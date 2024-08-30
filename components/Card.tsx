import { cn } from "@/utils";
import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<Props> = ({ children, className }) => {
  return <div className={cn("rounded-md p-2", className)}>{children}</div>;
};

