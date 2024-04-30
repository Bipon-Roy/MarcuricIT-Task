import { useState } from "react";
import PayrollTable from "../../../components/Task/Payroll-Items/PayrollTable";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";

//type declaration
interface FormData {
    name: string;
    unitAmount: string;
}

const PayrollItems = () => {
    //states declarations with dummy data
    const [showModal, setShowModal] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
    } = useForm<FormData>();
    const [tableData, setTableData] = useState<FormData[]>([
        {
            name: "Absent amount",
            unitAmount: "10",
        },
        {
            name: "Advance",
            unitAmount: "20",
        },
        {
            name: "Unpaid leave",
            unitAmount: "15",
        },
    ]);
    //Handle Modal Open & Close
    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleModalOpen = () => {
        setShowModal(true);
    };

    //Add new row data
    //Note: On reload it will get back to its initial state
    const handleAddDeduction = handleSubmit((data) => {
        setTableData([...tableData, data]);
        reset();
        setShowModal(false);
    });

    //updated edited value if fields are not empty on each row data
    //Note: On reload it will get back to its initial state

    const handleEdit = (index: number, updatedRow: FormData) => {
        const updatedTableData = [...tableData];
        updatedTableData[index] = updatedRow;
        setTableData(updatedTableData);
    };

    //delete a row data
    //Note: On reload it will get back to its initial state
    const handleRemove = (index: number) => {
        const updatedTableData = tableData.filter((_, i) => i !== index);
        setTableData(updatedTableData);
    };

    return (
        <div className="position-relative">
            {/* rendering the table */}
            <PayrollTable tableRows={tableData} onEdit={handleEdit} onRemove={handleRemove} />

            <Button
                style={{
                    top: "1.5rem",
                    right: "1.6rem",
                }}
                variant="warning"
                className="fw-bold d-flex align-items-center gap-1 position-absolute text-white"
                onClick={handleModalOpen}
            >
                <FaPlus size={18} />
                Add Deduction
            </Button>
            {/* Modal Setup */}
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Deduction</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleAddDeduction}>
                        <div className="mb-3">
                            <Form.Label htmlFor="name">Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="name"
                                {...register("name", { required: "Name is required" })}
                                isInvalid={!!errors.name}
                                isValid={!!watch("name") && !errors.name}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.name && errors.name.message}
                            </Form.Control.Feedback>
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="unitAmount">Unit Amount</Form.Label>
                            <Form.Control
                                type="number"
                                id="unitAmount"
                                {...register("unitAmount", { required: "Unit Amount is required" })}
                                isInvalid={!!errors.unitAmount}
                                isValid={!!watch("unitAmount") && !errors.unitAmount}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.unitAmount && errors.unitAmount.message}
                            </Form.Control.Feedback>
                        </div>
                        <div className="d-flex justify-content-end gap-2 ">
                            <Button variant="secondary" onClick={handleModalClose}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit">
                                Save
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default PayrollItems;
