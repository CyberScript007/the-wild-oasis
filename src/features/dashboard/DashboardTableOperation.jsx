import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Filter from "../../ui/Filter";

function DashboardTableOperation() {
  return (
    <Row type="horizontal">
      <Heading as="h3">Dashboard</Heading>
      <Filter
        field="last"
        options={[
          { values: "7", label: "last 7 days" },
          { values: "30", label: "last 30 days" },
          { values: "90", label: "last 90 days" },
        ]}
      />
    </Row>
  );
}

export default DashboardTableOperation;
