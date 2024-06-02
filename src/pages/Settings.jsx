import Row from "../ui/Row";
import Heading from "../ui/Heading";
import Setting from "../features/settings/Setting";

function Settings() {
  return (
    <Row>
      <Heading as="h3">Update hotel settings</Heading>
      <Setting />
    </Row>
  );
}

export default Settings;
