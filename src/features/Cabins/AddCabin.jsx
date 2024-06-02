import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateFormCabin from "./CreateFormCabin";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open openName="cabin">
        <Button size="medium">Add new cabin</Button>
      </Modal.Open>
      <Modal.Window windowName="cabin">
        <CreateFormCabin />
      </Modal.Window>
    </Modal>
  );
}

export default AddCabin;
