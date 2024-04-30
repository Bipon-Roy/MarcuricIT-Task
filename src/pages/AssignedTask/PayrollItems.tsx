import { useState } from "react";
import PayrollTable from "../../components/Task/Payroll-Items/PayrollTable";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";

//type declaration
interface FormData {
    name: string;
    unitAmount: string;
}

const PayrollItems = () => {
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

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleModalOpen = () => {
        setShowModal(true);
    };

    const handleAddDeduction = handleSubmit((data) => {
        setTableData([...tableData, data]);
        reset();
        setShowModal(false);
    });

    const handleEdit = (index: number, updatedRow: FormData) => {
        const updatedTableData = [...tableData];
        updatedTableData[index] = updatedRow;
        setTableData(updatedTableData);
    };

    const handleRemove = (index: number) => {
        const updatedTableData = tableData.filter((_, i) => i !== index);
        setTableData(updatedTableData);
    };

    return (
        <div className="position-relative">
            <PayrollTable tableRows={tableData} onEdit={handleEdit} onRemove={handleRemove} />

            <Button
                style={{
                    top: "6rem",
                    right: "1.6rem",
                }}
                variant="warning"
                className="fw-bold d-flex align-items-center gap-1 position-absolute text-white"
                onClick={handleModalOpen}
            >
                <FaPlus size={18} />
                Add Deduction
            </Button>

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
