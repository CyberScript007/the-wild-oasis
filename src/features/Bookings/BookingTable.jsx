import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";

import BookingRow from "./BookingRow";

import { useFetchBookings } from "./useFetchBookings.js";
import Pagination from "../../ui/Pagination";

function BookingTable() {
  const { bookings, isLoading, count } = useFetchBookings();

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table $columns="1fr 3.5fr 3.5fr 1.7fr 1.7fr 0.5fr">
        <Table.TableHeader>
          <Table.TableRow>
            <Table.TableHead>Cabin</Table.TableHead>
            <Table.TableHead>guest</Table.TableHead>
            <Table.TableHead>Dates</Table.TableHead>
            <Table.TableHead>status</Table.TableHead>
            <Table.TableHead>amount</Table.TableHead>
            <Table.TableHead></Table.TableHead>
          </Table.TableRow>
        </Table.TableHeader>

        <Table.TableRender
          data={bookings}
          render={(booking) => (
            <BookingRow booking={booking} key={booking.id} />
          )}
        />
        <Table.TableFooter>
          <Pagination count={count} />
        </Table.TableFooter>
      </Table>
    </Menus>
  );
}

export default BookingTable;
