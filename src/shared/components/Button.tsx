import { cn } from "../lib/utils";
import { actionStyles } from "./actionStyles";
import type { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  size?: "default" | "small";
  hierarchy?: "primary" | "secondary";
  variant?: "default" | "icon";
}

export default function Button(props: ButtonProps) {
  return <button className={cn(actionStyles(props))} {...props} />;
}
