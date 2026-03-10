import SearchIcon from "../icons/SearchIcon";
import Input from "./Input";

interface SearchBarProps {
  placeholder?: string;
  inputAttributes: {
    value: string;
    onChange: (value: string) => void;
  };
}

export default function Searchbar({
  placeholder,
  inputAttributes,
}: SearchBarProps) {
  return (
    <label>
      <Input
        type="search"
        placeholder={placeholder}
        value={inputAttributes.value}
        onChange={(e) => inputAttributes.onChange(e.target.value)}
      />
      <SearchIcon />
    </label>
  );
}
