import styled from "styled-components";
import { format, isToday } from "date-fns";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEyeSlash,
  HiTrash,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import Table from "../../ui/Table";
import Tag from "../../ui/Tag";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import Confirmation from "../../ui/Confirmation";

import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";

import { useCheckOut } from "../checkin/useCheckOut";
import { useDeleteBooking } from "./useDeleteBooking";

const CabinName = styled.p`
  font-family: "Sono";
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & span:first-child {
    font-weight: 600;
  }
  & span:last-child {
    font-size: 1.2rem;
    color: var(--color-grey-500);
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numGuests,
    numNights,
    status,
    totalPrice,
    cabins: { name },
    guests: { fullName, email },
  },
}) {
  const statusTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  const navigate = useNavigate();
  const { checkOut, isCheckingOut } = useCheckOut();
  const { deleteBooking, isDeleting } = useDeleteBooking();

  return (
    <Table.TableBody>
      <Table.TableRow>
        <Table.TableData>
          <CabinName> {name}</CabinName>
        </Table.TableData>
        <Table.TableData>
          <Stacked>
            <span>{fullName}</span>
            <span>{email}</span>
          </Stacked>
        </Table.TableData>
        <Table.TableData>
          <Stacked>
            <span>
              {isToday(new Date(startDate))
                ? "Today"
                : formatDistanceFromNow(startDate)}{" "}
              &rarr; {numNights} night stay
            </span>
            <span>
              {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
              {format(new Date(endDate), "MMM dd yyyy")}
            </span>
          </Stacked>
        </Table.TableData>
        <Table.TableData>
          <Tag type={statusTagName[status]}>{status}</Tag>
        </Table.TableData>
        <Table.TableData>
          <Amount>{formatCurrency(totalPrice)}</Amount>
        </Table.TableData>
        <Table.TableData>
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={bookingId} />

              <Menus.List id={bookingId}>
                <Menus.Button
                  icon={<HiEyeSlash />}
                  onClick={() => navigate(`/bookings/${bookingId}`)}
                >
                  See details
                </Menus.Button>
                {status === "unconfirmed" && (
                  <Menus.Button
                    icon={<HiArrowDownOnSquare />}
                    onClick={() => navigate(`/checkin/${bookingId}`)}
                  >
                    Check in
                  </Menus.Button>
                )}
                {status === "checked-in" && (
                  <Menus.Button
                    icon={<HiArrowUpOnSquare />}
                    onClick={() =>
                      checkOut({
                        id: bookingId,
                        obj: { status: "checked-out" },
                      })
                    }
                    disabled={isCheckingOut}
                  >
                    Check out
                  </Menus.Button>
                )}
                <Modal.Open openName={bookingId}>
                  <Menus.Button icon={<HiTrash />}>Delete booking</Menus.Button>
                </Modal.Open>
              </Menus.List>
            </Menus.Menu>
            <Modal.Window windowName={bookingId}>
              <Confirmation
                resourcesName="booking"
                onClick={() => deleteBooking(bookingId)}
              />
            </Modal.Window>
          </Modal>
        </Table.TableData>
      </Table.TableRow>
    </Table.TableBody>
  );
}

export default BookingRow;
