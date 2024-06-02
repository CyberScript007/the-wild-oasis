import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = function (e) {
    searchParams.get("sortBy") || options[0].values;
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  };

  const value = searchParams.get("sortBy") || options[0].values;

  return (
    <Select
      options={options}
      onChange={handleChange}
      value={value}
      type="white"
    />
  );
}

export default SortBy;
