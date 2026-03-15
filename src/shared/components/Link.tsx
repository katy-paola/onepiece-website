import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { actionStyles } from "./actionStyles";
import type { ComponentPropsWithoutRef } from "react";

interface LinkElementProps extends ComponentPropsWithoutRef<"a"> {
  size?: "default" | "small";
  hierarchy?: "primary" | "secondary";
  variant?: "default" | "icon";
  href: string;
  className?: string;
}

export default function LinkElement({ className, ...props }: LinkElementProps) {
  return (
    <Link
      to={props.href}
      {...props}
      className={cn(actionStyles({ ...props }), className)}
    />
  );
}
