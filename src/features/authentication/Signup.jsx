import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import CreateSignupForm from "./CreateSignupForm";

function Signup() {
  return (
    <Row>
      <Heading as="h3">Create a new user</Heading>
      <CreateSignupForm />
    </Row>
  );
}

export default Signup;
