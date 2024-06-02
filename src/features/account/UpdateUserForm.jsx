import { useState } from "react";

import Form from "../../ui/Form";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";

import { useGetUser } from "../authentication/useGetUser";
import { useUpdateUserForm } from "../account/useUpdateUserForm";

function UpdateUserForm() {
  const { user } = useGetUser();
  const { email } = user;
  const { fullname } = user.user_metadata;

  const [avatar, setAvatar] = useState("");
  const [fullName, setFullName] = useState(fullname);
  const { updateUser, isUpdating } = useUpdateUserForm();

  const handleSumit = function (e) {
    e.preventDefault();

    updateUser({ fullname: fullName, avatar });
  };

  return (
    <Row>
      <Heading as="h5">Update user data</Heading>

      <Form onSubmit={handleSumit}>
        <FormRow label="Email address">
          <Input text="email" id="email" disabled value={email} />
        </FormRow>
        <FormRow label="Full name">
          <Input
            text="text"
            id="fullName"
            defaultValue={fullName}
            onChange={(e) => setFullName(e.target.value)}
            disabled={isUpdating}
          />
        </FormRow>
        <FormRow label="Avatar">
          <FileInput
            id="avatar"
            accept="image/png, image/jpeg"
            onChange={(e) => setAvatar(e.target.files[0])}
            disabled={isUpdating}
          />
        </FormRow>
        <ButtonGroup>
          <Button type="reset" $variation="secondary">
            Cancel
          </Button>
          <Button>Update account</Button>
        </ButtonGroup>
      </Form>
    </Row>
  );
}

export default UpdateUserForm;
