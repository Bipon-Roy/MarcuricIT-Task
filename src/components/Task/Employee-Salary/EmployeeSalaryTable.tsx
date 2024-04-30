import { useState } from "react";
import { Dropdown, Table, Modal, Button, Form } from "react-bootstrap";
import { HiDotsVertical } from "react-icons/hi";
import { MdDelete, MdEdit } from "react-icons/md";

interface RowDataType {
    name: string;
    employeeId: string;
    email: string;
    joinDate: string;
    role: string;
    salary: number;
}

interface EmployeeData {
    tableRows: RowDataType[];
    onEdit: (index: number, updatedRow: RowDataType) => void;
    onRemove: (index: number) => void;
}

const EmployeeSalaryTable = ({ tableRows, onEdit, onRemove }: EmployeeData) => {
    const [showEditModal, setShowEditModal] = useState<boolean>(false);
    const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);
    const [editedRow, setEditedRow] = useState<RowDataType>({
        name: "",
        employeeId: "",
        email: "",
        joinDate: "",
        role: "",
        salary: 0,
    });

    const handleEditClick = (index: number) => {
        const selectedRow = tableRows[index];
        setEditedRow(selectedRow);
        setSelectedRowIndex(index);
        setShowEditModal(true);
    };

    const handleEditSave = () => {
        if (selectedRowIndex !== null) {
            onEdit(selectedRowIndex, editedRow);
            setShowEditModal(false);
            setSelectedRowIndex(null);
        }
    };

    const handleRemoveClick = (index: number) => {
        onRemove(index);
    };

    return (
        <>
            <div className="mt-2">
                <h3 className="fw-bold" style={{ marginBottom: "1rem" }}>
                    Employee Salary
                </h3>
                <h4 className="fw-bolder">Dashboard / Salary</h4>
            </div>

            <div className="bg-white p-3 rounded-1 shadow-sm ">
                <Table striped responsive className="table-nowrap table-centered mt-4 fw-bold">
                    <thead className="bg-white">
                        <tr>
                            <th className="border-0 ">Name</th>
                            <th className="border-0">Employee ID</th>
                            <th className="border-0">Email</th>
                            <th className="border-0">Role</th>
                            <th className="border-0">Salary</th>
                            <th className="border-0">Payslip</th>
                            <th className="border-0">Action</th>
                        </tr>
                    </thead>
                    <tbody className="fw-bolder">
                        {(tableRows || []).map((row, index) => {
                            return (
                                <tr key={index}>
                                    <td>{row.name}</td>
                                    <td>{row.employeeId}</td>
                                    <td>{row.email}</td>
                                    <td>{row.role}</td>
                                    <td>${row.salary}</td>
                                    <td>
                                        <Button
                                            style={{
                                                borderRadius: "3rem",
                                            }}
                                            variant="warning"
                                            className="fw-bold"
                                        >
                                            Generate Slip
                                        </Button>
                                    </td>
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
                <div className="d-flex justify-content-end gap-1 ">
                    <p
                        className="bg-warning text-white fw-bolder rounded-1"
                        style={{ padding: "0.5rem 0.9rem" }}
                    >
                        1
                    </p>
                    <p
                        className="text-warning fw-bolder rounded-1"
                        style={{ padding: "0.5rem 0.9rem" }}
                    >
                        2
                    </p>
                </div>
            </div>

            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedRow.name}
                                onChange={(e) =>
                                    setEditedRow({ ...editedRow, name: e.target.value })
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Employee ID</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedRow.employeeId}
                                onChange={(e) =>
                                    setEditedRow({ ...editedRow, employeeId: e.target.value })
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={editedRow.email}
                                onChange={(e) =>
                                    setEditedRow({ ...editedRow, email: e.target.value })
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Role</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedRow.role}
                                onChange={(e) =>
                                    setEditedRow({ ...editedRow, role: e.target.value })
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Salary</Form.Label>
                            <Form.Control
                                type="number"
                                value={editedRow.salary}
                                onChange={(e) =>
                                    setEditedRow({ ...editedRow, salary: Number(e.target.value) })
                                }
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

export default EmployeeSalaryTable;
