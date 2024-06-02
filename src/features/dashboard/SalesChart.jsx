import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";
import styled from "styled-components";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useDarkMode } from "../../context/DarkModeContext";

import Heading from "../../ui/Heading";

const StyleSalesChart = styled.div`
  grid-column: col-start 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: var(--color-grey-0);
  padding: 2.5rem;

  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

function SalesChart({ bookingStay, numDays }) {
  const { isDarkMode } = useDarkMode();

  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => {
    return {
      label: format(date, "MMM dd"),
      totalSales: bookingStay
        .filter((stay) => isSameDay(date, new Date(stay.created_at)))
        .reduce((acc, cur) => acc + cur.totalPrice, 0),
      extrasSales: bookingStay
        .filter((stay) => isSameDay(date, new Date(stay.created_at)))
        .reduce((acc, cur) => acc + cur.extrasPrice, 0),
    };
  });

  const colors = isDarkMode
    ? {
        totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
        extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
        extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
      };

  return (
    <StyleSalesChart>
      <Heading as="h5">
        Sales from {format(new Date(allDates.at(0)), "MMM dd yyyy")} &mdash;{" "}
        {format(new Date(allDates.at(-1)), "MMM dd yyyy")}
      </Heading>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={{
              fill: colors.text,
            }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit="$"
            tick={{
              fill: colors.text,
            }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip
            contentStyle={{
              backgroundColor: colors.background,
            }}
          />
          <Area
            dataKey="totalSales"
            type="monotone"
            fill={colors.totalSales.fill}
            stroke={colors.totalSales.stroke}
            unit="$"
            name="Total Sales"
            strokeWidth={2}
          />
          <Area
            dataKey="extrasSales"
            type="monotone"
            fill={colors.extrasSales.fill}
            stroke={colors.extrasSales.stroke}
            unit="$"
            name="Extras Sales"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyleSalesChart>
  );
}

export default SalesChart;
