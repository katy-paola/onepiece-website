// button-variants.ts
type VariantProps = {
  size?: "default" | "small";
  hierarchy?: "primary" | "secondary" | "ghost";
  variant?: "default" | "icon";
};

export function actionStyles({
  size = "default",
  hierarchy = "primary",
  variant = "default",
}: VariantProps) {
  return [
    "",

    size === "default" && "",
    size === "small" && "",

    hierarchy === "primary" && "",
    hierarchy === "secondary" && "",

    variant === "icon" && "",
  ];
}
