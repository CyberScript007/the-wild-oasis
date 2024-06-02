import { useForm } from "react-hook-form";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import { useSignupForm } from "./useSignupForm";

function CreateSignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const { signupForm, isLoading } = useSignupForm();

  const onSubmit = function ({ email, password, fullname }) {
    signupForm(
      { email, password, fullname },
      {
        onSettled: () => reset(),
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" errors={errors}>
        <Input
          type="text"
          id="fullname"
          {...register("fullname", { required: "This field is required" })}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow label="Email address" errors={errors}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow label="Password (min 8 characters)" errors={errors}>
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow label="Repeat password" errors={errors}>
        <Input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Password need to match",
          })}
          disabled={isLoading}
        />
      </FormRow>

      <ButtonGroup>
        <Button
          $variation="secondary"
          type="reset"
          onClick={() => reset()}
          disabled={isLoading}
        >
          Cancel
        </Button>
        <Button disabled={isLoading}>Create new user</Button>
      </ButtonGroup>
    </Form>
  );
}

export default CreateSignupForm;
