import Input from "./Input";

export default function Checkbox({ label }: { label: string }) {
  return (
    <label>
      <Input type="checkbox" />
      {label}
    </label>
  );
}
