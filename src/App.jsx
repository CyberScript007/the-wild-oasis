import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import GlobalStyle from "./styles/GlobalStyle";

import Login from "./pages/Login";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Cabins from "./pages/Cabins";
import Bookings from "./pages/Bookings";
import Booking from "./features/Bookings/Booking";
import CheckinBooking from "./features/checkin/CheckinBooking";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import ProctectedRoute from "./ui/ProctectedRoute";
import Account from "./pages/Account";

import { DarkModeContext } from "./context/DarkModeContext";
import PageNotFound from "./pages/PageNotFound";

// create a query client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
      <DarkModeContext>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route
              element={
                <ProctectedRoute>
                  <AppLayout />
                </ProctectedRoute>
              }
            >
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="account" element={<Account />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="bookings/:bookingId" element={<Booking />} />
              <Route path="checkin/:bookingId" element={<CheckinBooking />} />
              <Route path="cabins" element={<Cabins />} />
              <Route path="users" element={<Users />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>

          <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={10}
            toastOptions={{
              duration: 5000,
              style: {
                backgroundColor: "var(--color-grey-50)",
                color: "#000",
                padding: "2rem",
                maxWidth: "100%",
              },
              success: {
                duration: 3000,
                theme: {
                  primary: "green",
                  secondary: "black",
                },
              },

              error: {
                duration: 5000,
                theme: {
                  primary: "red",
                  secondary: "black",
                },
              },
            }}
          />
        </BrowserRouter>
      </DarkModeContext>
    </QueryClientProvider>
  );
}

export default App;
