//the component is a child component which invoked by PayrollItems from '/pages/AssignTask'

import { useState } from "react";
import { Dropdown, Table, Modal, Button, Form } from "react-bootstrap";
import { HiDotsVertical } from "react-icons/hi";
import { MdDelete, MdEdit } from "react-icons/md";

//type declaration
interface RowDataType {
    name: string;
    unitAmount: string;
}

//type declaration
interface PayrollTableData {
    tableRows: RowDataType[];
    onEdit: (index: number, updatedRow: RowDataType) => void;
    onRemove: (index: number) => void;
}

const PayrollTable = ({ tableRows, onEdit, onRemove }: PayrollTableData) => {
    const [showEditModal, setShowEditModal] = useState<boolean>(false);
    const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);
    const [editedName, setEditedName] = useState<string>("");
    const [editedUnitAmount, setEditedUnitAmount] = useState<string>("");

    //edit functionality on each row data
    const handleEditClick = (index: number) => {
        const selectedRow = tableRows[index];
        setEditedName(selectedRow.name);
        setEditedUnitAmount(selectedRow.unitAmount);
        setSelectedRowIndex(index);
        setShowEditModal(true);
    };

    //updated edited value functionality on each row data
    //Note: On reload it will get back to its initial state
    const handleEditSave = () => {
        if (selectedRowIndex !== null) {
            const updatedRow = { name: editedName, unitAmount: editedUnitAmount };
            onEdit(selectedRowIndex, updatedRow);
            setShowEditModal(false);
            setSelectedRowIndex(null);
        }
    };

    // remove row data
    const handleRemoveClick = (index: number) => {
        onRemove(index);
    };

    return (
        <>
            <div className="mt-2">
                <h3 className="fw-bold" style={{ marginBottom: "1rem" }}>
                    Payroll Items
                </h3>
                <h4 className="fw-bolder">Dashboard / Payroll Items</h4>
            </div>

            <div className="bg-white p-3 rounded-1 shadow-sm ">
                <Table striped responsive className="table-nowrap table-centered mt-4 fw-bold">
                    <thead className="bg-white">
                        <tr>
                            <th className="border-0 ">Name</th>
                            <th className="border-0">Default/Unit Amount</th>
                            <th className="border-0">Action</th>
                        </tr>
                    </thead>
                    <tbody className="fw-bolder ">
                        {(tableRows || []).map((row, index) => {
                            return (
                                <tr key={index}>
                                    <td>{row.name}</td>
                                    <td>${row.unitAmount}</td>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle
                                                as="a"
                                                className="cursor-pointer table-action-btn btn btn-light btn-xs"
                                            >
                                                <HiDotsVertical size={15} />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu align="start">
                                                <Dropdown.Item
                                                    className="d-flex align-items-center gap-1"
                                                    onClick={() => handleEditClick(index)}
                                                >
                                                    <MdEdit size={15} />
                                                    Edit
                                                </Dropdown.Item>

                                                <Dropdown.Item
                                                    className="d-flex align-items-center gap-1"
                                                    onClick={() => handleRemoveClick(index)}
                                                >
                                                    <MdDelete size={15} />
                                                    Remove
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                <div className="d-flex justify-content-end">
                    <p
                        className="bg-warning text-white fw-bolder rounded-1 "
                        style={{ padding: "0.5rem 0.9rem" }}
                    >
                        1
                    </p>
                </div>
            </div>

            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedName}
                                onChange={(e) => setEditedName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Unit Amount</Form.Label>
                            <Form.Control
                                type="number"
                                value={editedUnitAmount}
                                onChange={(e) => setEditedUnitAmount(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleEditSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default PayrollTable;
