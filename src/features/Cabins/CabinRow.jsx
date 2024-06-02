import styled from "styled-components";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

import Modal from "../../ui/Modal";
import Confirmation from "../../ui/Confirmation";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

import { formatCurrency } from "../../utils/helpers";

import CreateFormCabin from "./CreateFormCabin";

import { useCreateCabin } from "./useCreateCabin";
import { useDeleteCabin } from "./useDeleteCabin";

const Name = styled.span`
  font-weight: 600;
`;
const Price = styled.span`
  font-weight: 600;
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  transform: scale(1.5) translateX(-0.7rem);
  object-position: center center;

  /* &:not([src]) {
    border: 1px solid var(--color-grey-100);
    background-color: var(--color-grey-50);
  } */
`;

function CabinRow({ cabin }) {
  const { cabinDelete, isDeleting } = useDeleteCabin();
  const { createCabinUpdate, isCreating } = useCreateCabin();

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
    image,
  } = cabin;

  const handleDuplicate = function () {
    createCabinUpdate({
      name: `Duplicate ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      description,
      image,
    });
  };

  return (
    <>
      <Table.TableBody>
        <Table.TableRow>
          <Table.TableData>
            <Img src={image} />
          </Table.TableData>
          <Table.TableData>
            <Name>{name}</Name>
          </Table.TableData>
          <Table.TableData>fits up to {maxCapacity} guest</Table.TableData>
          <Table.TableData>
            <Price>{formatCurrency(regularPrice)}</Price>
          </Table.TableData>
          <Table.TableData>
            {discount ? formatCurrency(discount) : <span>&mdash;</span>}
          </Table.TableData>
          <Table.TableData></Table.TableData>
          <Table.TableData>
            <Modal>
              <Menus.Menu>
                <Menus.Toggle id={cabinId} />

                <Menus.List id={cabinId}>
                  <Menus.Button
                    icon={<HiSquare2Stack />}
                    onClick={handleDuplicate}
                  >
                    duplicate
                  </Menus.Button>
                  <Modal.Open openName="edit">
                    <Menus.Button icon={<HiPencil />}>edit</Menus.Button>
                  </Modal.Open>
                  <Modal.Open openName={cabinId}>
                    <Menus.Button icon={<HiTrash />}>delete</Menus.Button>
                  </Modal.Open>
                </Menus.List>
                <Modal.Window windowName="edit">
                  <CreateFormCabin cabinToUpdate={cabin} />
                </Modal.Window>

                <Modal.Window windowName={cabinId}>
                  <Confirmation
                    resourcesName="Cabin"
                    onClick={() => cabinDelete(cabinId)}
                  />
                </Modal.Window>
              </Menus.Menu>
            </Modal>
          </Table.TableData>
        </Table.TableRow>
      </Table.TableBody>
    </>
  );
}

export default CabinRow;
