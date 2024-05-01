//AddOvertimeForm Modal

import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

// Type declaration
interface FormData {
    name: string;
    rate: number;
}
interface Props {
    showModal: boolean;
    setShowModal: Function;
    isEditForm: boolean;
}
const AddOvertimeForm = ({ showModal, setShowModal, isEditForm }: Props) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
    } = useForm<FormData>();

    //Handle Modal Open & Close
    const handleModalClose = () => {
        setShowModal(false);
    };

    // Handle form submission
    const onSubmit = (data: FormData) => {};

    return (
        <div>
            {/* modal setup */}
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isEditForm ? "Edit Overtime" : "Add Overtime"}</Modal.Title>
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
                            <Form.Label htmlFor="rate">Rate</Form.Label>
                            <Form.Control
                                type="number"
                                id="rate"
                                {...register("rate", { required: "Rate is required" })}
                                isInvalid={!!errors.rate}
                                isValid={!!watch("rate") && !errors.rate}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.rate && errors.rate.message}
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

export default AddOvertimeForm;
