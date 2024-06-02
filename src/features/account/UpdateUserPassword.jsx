import { useForm } from "react-hook-form";

import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Row from "../../ui/Row";

import { useUpdateUserForm } from "../account/useUpdateUserForm";

function UpdateUserPassword() {
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm();
  const { updateUser, isUpdating } = useUpdateUserForm();

  const onSubmit = function ({ confirmPassword }) {
    updateUser({ password: confirmPassword });
  };

  return (
    <Row>
      <Heading as="h5">Update password</Heading>
      
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="New password (min 8 chars)" errors={errors}>
          <Input
            type="password"
            id="newPassword"
            {...register("newPassword", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password need a minimum of 8 characters",
              },
            })}
            disabled={isUpdating}
          />
        </FormRow>
        <FormRow label="Confirm password" errors={errors}>
          <Input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().newPassword || "Password need to match",
            })}
            disabled={isUpdating}
          />
        </FormRow>
        <ButtonGroup>
          <Button type="reset" $variation="secondary">
            Cancel
          </Button>
          <Button>Update password</Button>
        </ButtonGroup>
      </Form>
      ;
    </Row>
  );
}

export default UpdateUserPassword;
