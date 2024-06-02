import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinOperations() {
  return (
    <TableOperations>
      <Filter
        field="discount"
        options={[
          {
            values: "all",
            label: "All",
          },
          {
            values: "no-discount",
            label: "No discount",
          },
          {
            values: "with-discount",
            label: "With discount",
          },
        ]}
      />
      <SortBy
        options={[
          {
            values: "name-asc",
            label: "Sort by name (A-Z)",
          },
          {
            values: "name-desc",
            label: "Sort by name (Z-A)",
          },
          {
            values: "regularPrice-asc",
            label: "Sort by price (low first)",
          },
          {
            values: "regularPrice-desc",
            label: "Sort by price (high first)",
          },
          {
            values: "maxCapacity-asc",
            label: "Sort by capacity (low first)",
          },
          {
            values: "maxCapacity-desc",
            label: "Sort by capacity (high first)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinOperations;
