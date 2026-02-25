import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { actionStyles } from "./actionStyles";
import type { ComponentPropsWithoutRef } from "react";

interface LinkElementProps extends ComponentPropsWithoutRef<"a"> {
  size?: "default" | "small";
  hierarchy?: "primary" | "secondary";
  variant?: "default" | "icon";
  href: string;
}

export default function LinkElement(props: LinkElementProps) {
  return (
    <Link to={props.href} className={cn(actionStyles(props))} {...props} />
  );
}
