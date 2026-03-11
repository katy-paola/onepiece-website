import { cn } from "../lib/utils";
import { actionStyles } from "./actionStyles";
import type { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  size?: "default" | "small";
  hierarchy?: "primary" | "secondary";
  variant?: "default" | "icon";
  className?: string;
}

export default function Button({ className, ...props }: ButtonProps) {
  return (
    <button {...props} className={cn(actionStyles({ ...props }), className)} />
  );
}
