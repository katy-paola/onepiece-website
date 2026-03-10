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
    <label>
      <Input
        type="checkbox"
        checked={inputAttributes.checked}
        onChange={(e) => inputAttributes.onChange(e.target.checked)}
      />
      {label}
    </label>
  );
}
