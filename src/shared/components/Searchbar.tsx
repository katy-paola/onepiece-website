import SearchIcon from "../icons/SearchIcon";
import Input from "./Input";

export default function Searchbar({ placeholder }: { placeholder: string }) {
  return (
    <label>
      <Input type="search" placeholder={placeholder} />
      <SearchIcon />
    </label>
  );
}
