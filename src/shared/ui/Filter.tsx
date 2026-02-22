import Checkbox from "../components/Checkbox";
import Searchbar from "../components/Searchbar";

interface FilterProps {
  data: {
    placeholder: string;
    categories: string[];
  };
}

export default function Filter({ data }: FilterProps) {
  return (
    <section>
      <Searchbar placeholder={data.placeholder} />
      <div>
        {data.categories.map((category) => (
          <Checkbox label={category} />
        ))}
      </div>
      <button>Clear filters</button>
    </section>
  );
}
