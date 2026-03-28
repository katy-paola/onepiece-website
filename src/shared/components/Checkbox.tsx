import { cn } from "../lib/utils";
import Input from "./Input";

interface CheckboxProps {
  label: string;
  inputAttributes: {
    checked: boolean;
    onChange: (value: boolean) => void;
  };
  className?: string;
}

export default function Checkbox({
  label,
  inputAttributes,
  className,
}: CheckboxProps) {
  return (
    <label
      className={cn(
        "flex gap-2 px-3 py-2 border border-stroke text-action-text has-checked:bg-checkbox",
        className,
      )}
    >
      <Input
        className="accent-stroke"
        type="checkbox"
        checked={inputAttributes.checked}
        onChange={(e) => inputAttributes.onChange(e.target.checked)}
      />
      <span className="w-max">{label}</span>
    </label>
  );
}
