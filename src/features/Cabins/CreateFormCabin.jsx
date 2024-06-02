import styled from "styled-components";
import { useForm } from "react-hook-form";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";
import FileInput from "../../ui/FileInput";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";

import { useCreateCabin } from "./useCreateCabin";
import useUpdateCabin from "./useUpdateCabin";

function CreateFormCabin({ cabinToUpdate = {}, onCloseModal }) {
  const { id: updateId, ...updateValue } = cabinToUpdate;
  const isUpdatingSession = Boolean(updateId);

  const {
    register,
    getValues,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: isUpdatingSession ? updateValue : {},
  });

  const { isCreating, createCabinUpdate } = useCreateCabin();
  const { updateCabin, isUpdating } = useUpdateCabin();

  const isUpdatingOrIsCreating = isCreating || isUpdating;

  const onSubmit = (data) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isUpdatingSession)
      updateCabin(
        { obj: { ...data, image }, id: updateId },
        {
          onSuccess: () => {
            onCloseModal();
            reset();
          },
        }
      );
    else
      createCabinUpdate(
        { ...data, image },
        {
          onSuccess: () => {
            onCloseModal();
            reset();
          },
        }
      );
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Cabin name" errors={errors}>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "This field is required",
          })}
          disabled={isUpdatingOrIsCreating}
        />
      </FormRow>

      <FormRow label="Maximum capacity" errors={errors}>
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
          disabled={isUpdatingOrIsCreating}
        />
      </FormRow>
      <FormRow label="Regular price" errors={errors}>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "This field is required",
          })}
          disabled={isUpdatingOrIsCreating}
        />
      </FormRow>
      <FormRow label="Discount" errors={errors}>
        <Input
          type="number"
          defaultValue={0}
          id="discount"
          {...register("discount", {
            required: "This field is required",
            validate: (value) => {
              return (
                value <= getValues().regularPrice ||
                "Discount should be less than regular price"
              );
            },
          })}
          disabled={isUpdatingOrIsCreating}
        />
      </FormRow>
      <FormRow label="Description for website" errors={errors}>
        <TextArea
          id="description"
          {...register("description", {
            required: "This field is required",
          })}
          disabled={isUpdatingOrIsCreating}
        />
      </FormRow>
      <FormRow label="Cabin photo" errors={errors}>
        <FileInput
          id="image"
          accept="image/png, image/jpeg"
          {...register("image", {
            required: isUpdatingSession ? false : "This field is required",
          })}
          disabled={isUpdatingOrIsCreating}
        />
      </FormRow>
      <ButtonGroup>
        <Button
          type="reset"
          onClick={onCloseModal}
          $size="medium"
          $variation="secondary"
          disabled={isUpdatingOrIsCreating}
        >
          Cancel
        </Button>
        <Button $size="medium" disabled={isUpdatingOrIsCreating}>
          {isUpdatingSession ? "Edit cabin" : "Create new cabin"}
        </Button>
      </ButtonGroup>
    </Form>
  );
}

export default CreateFormCabin;
