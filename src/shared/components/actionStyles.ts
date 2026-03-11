// button-variants.ts
type VariantProps = {
  size?: "default" | "small";
  hierarchy?: "primary" | "secondary" | "ghost";
  variant?: "default" | "icon";
  className?: string;
};

export function actionStyles({
  size = "default",
  hierarchy = "primary",
  variant = "default",
}: VariantProps) {
  return [
    "text-action-text border-[0.5px] border-action-text shadow-action",
    size === "default" && "px-5 py-4",
    size === "small" && "px-4 py-3",
    hierarchy === "primary" && "bg-gradient-action",
    hierarchy === "secondary" && "bg-sec-button",
    variant === "icon" && "p-3",
  ];
}