import styled from "styled-components";
import DashboardTableOperation from "../features/dashboard/DashboardTableOperation";
import DashboardContent from "../features/dashboard/DashboardContent";

const StyleDashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

function Dashboard() {
  return (
    <StyleDashboard>
      <DashboardTableOperation />
      <DashboardContent />
    </StyleDashboard>
  );
}

export default Dashboard;
