import styled from "styled-components";
import Activity from "./Activity";

import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";

import { useTodayActivity } from "./useTodayActivity";

const StyleTodayActivity = styled.div`
  grid-column: col-start 1 / col-end 2;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
`;

function TodayActivity() {
  const { activities, isLoading } = useTodayActivity();

  return (
    <StyleTodayActivity>
      <Heading as="h5">Today</Heading>
      {isLoading ? (
        <Spinner />
      ) : activities.length < 1 ? (
        <Empty resourceName="activity" />
      ) : (
        <div>
          {activities.map((activity) => (
            <Activity activity={activity} key={activity.id} />
          ))}
        </div>
      )}
    </StyleTodayActivity>
  );
}

export default TodayActivity;
