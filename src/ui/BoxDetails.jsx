import styled from "styled-components";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";
import { format, isToday } from "date-fns";

import { formatCurrency, formatDistanceFromNow } from "../utils/helpers";

const StyleBoxDetails = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  overflow: hidden;
`;

const Header = styled.header`
  padding: 2rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-brand-500);
`;

const P = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--color-grey-200);
  display: flex;
  align-items: center;
  gap: 1.5rem;

  & span {
    font-weight: 600;
  }

  & span svg {
    width: 4rem;
    height: 4rem;
    stroke: var(--color-grey-200);
  }
`;

const List = styled.ul`
  list-style-type: disc;
  display: flex;
  align-items: center;
  gap: 4rem;

  & li:first-child {
    font-weight: 500;
    list-style-type: none;
    display: flex;
    align-items: center;
    color: var(--color-grey-800);
    gap: 1rem;
  }
`;
const ListItems = styled.li`
  font-size: 1.7rem;
  color: var(--color-grey-500);

  & img {
    width: 3rem;
    height: 2rem;
    object-position: center;
    object-fit: cover;
  }
`;

const BookingBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  background-color: var(--color-grey-0);
  padding: 2rem 4rem;
`;

const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const DetailsText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;

  & span {
    font-size: 1.7rem;
    font-weight: 500;
    color: var(--color-grey-800);
  }

  & svg {
    width: 2rem;
    height: 2rem;
    stroke: var(--color-brand-600);
  }
`;

const DetailsParagraph = styled.p`
  font-size: 1.6rem;
  color: var(--color-grey-700);
`;

const PaidBox = styled.div`
  padding: 2rem 3rem;
  background-color: ${(props) =>
    props.type ? "var(--color-red-100)" : "var(--color-yellow-100)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--border-radius-sm);
`;

const PaidPrice = styled.p`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--color-yellow-700);

  & span:nth-child(2) {
    font-weight: 500;
  }

  & svg {
    width: 2.5rem;
    height: 2.5rem;
    stroke: var(--color-yellow-700);
  }
`;

const PaidText = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-yellow-700);
  text-transform: uppercase;
`;

const BookingCreatedAt = styled.p`
  text-align: right;
  font-size: 1.3rem;
  color: var(--color-grey-600);
`;

function BoxDetails({ booking }) {
  const {
    id: bookingId,
    created_at,
    cabins: { name: cabinName },
    numNights,
    numGuests,
    observations,
    hasBreakfast,
    cabinPrice,
    extrasPrice,
    status,
    startDate,
    endDate,
    isPaid,
    totalPrice,
    guests: {
      fullName: guestName,
      email,
      nationalID,
      countryFlag,
      nationality,
    },
  } = booking;
  console.log(booking);
  return (
    <StyleBoxDetails>
      <Header>
        <P>
          <span>
            <HiOutlineHomeModern />
          </span>
          <span>
            {numNights} nights in Cabin {cabinName}
          </span>
        </P>
        <P>
          {format(new Date(startDate), " EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </P>
      </Header>
      <BookingBox>
        <List>
          <ListItems>
            <img src={countryFlag} alt={`Flag of ${nationality}`} /> {guestName}{" "}
            {numGuests ? `+ ${numGuests} guests` : ""}
          </ListItems>
          <ListItems>{email}</ListItems>
          <ListItems>National ID {nationalID}</ListItems>
        </List>
        {observations && (
          <DetailsContainer>
            <DetailsText>
              <HiOutlineChatBubbleBottomCenterText />
              <span>Observations</span>
            </DetailsText>
            <DetailsParagraph>{observations}</DetailsParagraph>
          </DetailsContainer>
        )}
        <DetailsContainer>
          <DetailsText>
            <HiOutlineCheckCircle />
            <span>Breakfast included?</span>
          </DetailsText>
          <DetailsParagraph>{hasBreakfast ? "Yes" : "No"}</DetailsParagraph>
        </DetailsContainer>

        {isPaid ? (
          <PaidBox type={isPaid}>
            <PaidPrice>
              <HiOutlineCurrencyDollar />
              <span>Total price</span>
              <span>
                {formatCurrency(totalPrice)}{" "}
                {extrasPrice > 0
                  ? `(${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                      extrasPrice
                    )} breakfast)`
                  : ""}
              </span>
            </PaidPrice>
            <PaidText>paid</PaidText>
          </PaidBox>
        ) : (
          <PaidBox>
            <PaidPrice>
              <HiOutlineCurrencyDollar />
              <span>Total price</span>
              <span>{formatCurrency(totalPrice)}</span>
            </PaidPrice>
            <PaidText>will pay at property</PaidText>
          </PaidBox>
        )}

        <BookingCreatedAt>
          Booked {format(new Date(created_at), "EEE, MMM dd yyyy, hh:mm aa")}
        </BookingCreatedAt>
      </BookingBox>
    </StyleBoxDetails>
  );
}

export default BoxDetails;
