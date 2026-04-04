import SearchIcon from "../icons/SearchIcon";
import { cn } from "../lib/utils";
import Input from "./Input";

interface SearchBarProps {
  placeholder?: string;
  inputAttributes: {
    value: string;
    onChange: (value: string) => void;
  };
  className?: string;
}

export default function Searchbar({
  placeholder,
  inputAttributes,
  className,
}: SearchBarProps) {
  return (
    <label
      className={cn(
        "flex items-center gap-2 px-5 py-4 h-max border border-action-text/70 focus-within:border-action-text transition-colors",
        className,
      )}
    >
      <SearchIcon className="text-action-text" />
      <Input
        className="w-full outline-none text-action-text/80 placeholder:text-action-text/80"
        type="search"
        placeholder={placeholder}
        value={inputAttributes.value}
        onChange={(e) => inputAttributes.onChange(e.target.value)}
      />
    </label>
  );
}
