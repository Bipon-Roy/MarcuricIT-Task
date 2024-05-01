// AddDeductionsForm Modal
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Deductions } from "./type";

interface Props {
    showModal: boolean;
    setShowModal: Function;
    isEditForm: boolean;
    editDeductionData: Deductions | null;
}
const AddDeductionsForm = ({ showModal, setShowModal, isEditForm, editDeductionData }: Props) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
    } = useForm<Deductions>();

    //Handle Modal Open & Close
    const handleModalClose = () => {
        setShowModal(false);
    };

    // Handle form submission
    const onSubmit = (data: Deductions) => {};

    return (
        <div>
            {/* modal setup */}
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isEditForm ? "Edit Deductions" : "Add Deductions"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
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
                            <Form.Label htmlFor="unit">Default/Unit Amount</Form.Label>
                            <Form.Control
                                type="number"
                                id="unit"
                                {...register("unit", {
                                    required: "Default/Unit Amount is required",
                                })}
                                isInvalid={!!errors.unit}
                                isValid={!!watch("unit") && !errors.unit}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.unit && errors.unit.message}
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

export default AddDeductionsForm;
