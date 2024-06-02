import styled from "styled-components";

import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

const StyleOperation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

function BookingTableOperation() {
  return (
    <StyleOperation>
      <Filter
        field="status"
        options={[
          { values: "all", label: "All" },
          { values: "checked-in", label: "Checked in" },
          { values: "checked-out", label: "Checked out" },
          { values: "unconfirmed", label: "Unconfirmed" },
        ]}
      />

      <SortBy
        options={[
          { values: "startDate-desc", label: "sort by date (recent first)" },
          { values: "startDate-asc", label: "sort by date (earlier first)" },
          { values: "totalPrice-desc", label: "sort by amount (high first)" },
          { values: "totalPrice-asc", label: "sort by amount (low first)" },
        ]}
      />
    </StyleOperation>
  );
}

export default BookingTableOperation;
