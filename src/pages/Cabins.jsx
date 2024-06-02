import Heading from "../ui/Heading";
import Row from "../ui/Row";

import CabinTable from "../features/Cabins/CabinTable";
import AddCabin from "../features/Cabins/AddCabin";
import CabinOperations from "../features/Cabins/CabinOperations";

function Cabins() {
  return (
    <Row>
      <Row type="horizontal">
        <Heading as="h3">All cabins</Heading>
        <CabinOperations />
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </Row>
  );
}

export default Cabins;
