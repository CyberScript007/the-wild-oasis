import Row from "../ui/Row";
import Heading from "../ui/Heading";
import BookingTableOperation from "../features/Bookings/BookingTableOperation";
import BookingTable from "../features/Bookings/BookingTable";

function Bookings() {
  return (
    <Row>
      <Row type="horizontal">
        <Heading as="h3">All bookings</Heading>
        <BookingTableOperation />
      </Row>

      <BookingTable />
    </Row>
  );
}

export default Bookings;
