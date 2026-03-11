import Input from "./Input";

interface CheckboxProps {
  label: string;
  inputAttributes: {
    checked: boolean;
    onChange: (value: boolean) => void;
  };
}

export default function Checkbox({ label, inputAttributes }: CheckboxProps) {
  return (
    <label className="flex gap-2 px-4 py-3 border border-stroke text-action-text has-checked:bg-checkbox">
      <Input
        className="accent-stroke"
        type="checkbox"
        checked={inputAttributes.checked}
        onChange={(e) => inputAttributes.onChange(e.target.checked)}
      />
      {label}
    </label>
  );
}
