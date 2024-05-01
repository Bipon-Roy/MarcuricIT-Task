// AddDeductionsForm Modal
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Deductions } from "./type";
import { useEffect } from "react";

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
        setValue,
        reset,
    } = useForm<Deductions>();

    //Handle Modal Open & Close
    const handleModalClose = () => {
        setShowModal(false);
    };
    useEffect(() => {
        if (isEditForm && editDeductionData) {
            // Set initial form values based on editDeductionData
            setValue("name", editDeductionData.name);
            setValue("unitAmount", editDeductionData.unitAmount);
        } else {
            // If not editing, reset the form values
            reset();
        }
    }, [isEditForm, editDeductionData, setValue, reset]);
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
                                type="text"
                                id="unitAmount"
                                {...register("unitAmount", {
                                    required: "Default/unitAmount Amount is required",
                                })}
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

export default AddDeductionsForm;
