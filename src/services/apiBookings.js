import { PAGE_SIZE } from "../utils/Constants";
import { getToday } from "../utils/helpers";
import { supabase } from "./supabase";

export const fetchBookings = async function ({ filter, sortBy, page }) {
  try {
    let query = supabase
      .from("bookings")
      .select(
        "id, created_at, startDate,endDate,numNights,numGuests,totalPrice,status, cabins(name), guests(fullName,email)",
        { count: "exact" }
      );

    // filter bookings
    if (filter) query = query.eq(filter.field, filter.value);

    // sort bookings
    if (sortBy) query = query.order(sortBy.field);

    // pagination bookings
    const from = (page - 1) * PAGE_SIZE;
    const to = page * PAGE_SIZE - 1;
    console.log(from, to);

    if (page) query = query.range(from, to);

    const { data, error, count } = await query;

    if (error) throw new Error("Bookings could not be loaded");

    return { data, count };
  } catch (err) {
    throw err.message;
  }
};

export const getBooking = async function (id) {
  try {
    const { data, error } = await supabase
      .from("bookings")
      .select(
        "*, cabins(name), guests(fullName, email, nationalID,countryFlag, nationality)"
      )
      .eq("id", id)
      .single();

    if (error) throw new Error("Booking could not be loaded");

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateBooking = async function ({ id, obj }) {
  const { error } = await supabase.from("bookings").update(obj).eq("id", id);

  if (error) throw new Error("Booking could not be updated");
};

export const deleteBooking = async function (id) {
  const { error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) throw new Error("Booking could not be deleted");
};

export async function getBookingsAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, totalPrice, extrasPrice")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

export async function getStaysAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName)")
    .gte("startDate", date)
    .lte("startDate", getToday());

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

// Activity means that there is a check in or a check out today
export async function getStaysTodayActivity() {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName, nationality, countryFlag)")
    .or(
      `and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.checked-in,endDate.eq.${getToday()})`
    )
    .order("created_at");

  // Equivalent to this. But by querying this, we only download the data we actually need, otherwise we would need ALL bookings ever created
  // (stay.status === 'unconfirmed' && isToday(new Date(stay.startDate))) ||
  // (stay.status === 'checked-in' && isToday(new Date(stay.endDate)))

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }
  return data;
}
