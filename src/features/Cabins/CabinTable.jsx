import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/ErrorMessage";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

import { useLoadCabin } from "./useLoadCabin";
import { useSearchParams } from "react-router-dom";

import CabinRow from "./CabinRow";
import Empty from "../../ui/Empty";

function CabinTable() {
  const { isLoading, cabins, error } = useLoadCabin();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  if (error) return <ErrorMessage message={error} />;

  // filter the cabins
  const filterValue = searchParams.get("discount") || "all";

  // create filter cabins variable
  let filterCabins;

  if (filterValue === "all") filterCabins = cabins;
  if (filterValue === "no-discount")
    filterCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    filterCabins = cabins.filter((cabin) => cabin.discount > 0);

  if (filterCabins.length < 1) return <Empty resourceName="cabins" />;

  // sort cabins
  const sortByParams = searchParams.get("sortBy") || "";
  const [field, direction] = sortByParams.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortCabins = filterCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table $columns="1fr 2fr 3.5fr 1.5fr 1.5fr 1.5fr 0.5fr">
        <Table.TableHeader>
          <Table.TableRow>
            <Table.TableHead scope="col"></Table.TableHead>
            <Table.TableHead scope="col">cabin</Table.TableHead>
            <Table.TableHead scope="col">capacity</Table.TableHead>
            <Table.TableHead scope="col">price</Table.TableHead>
            <Table.TableHead scope="col">discount</Table.TableHead>
            <Table.TableHead scope="col"></Table.TableHead>
          </Table.TableRow>
        </Table.TableHeader>

        <Table.TableRender
          // data={cabins}
          data={sortCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
