// AddAdditionForm Modal
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Addition } from "./type";
import { useEffect } from "react";

// Type declaration

interface Props {
    showModal: boolean;
    isEditForm: boolean;
    setShowModal: Function;
    editAdditionData: Addition | null;
}
const AddAdditionForm = ({ showModal, setShowModal, isEditForm, editAdditionData }: Props) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
        reset,
        setValue,
    } = useForm<Addition>();

    //Handle Modal Open & Close
    const handleModalClose = () => {
        setShowModal(false);
    };

    useEffect(() => {
        if (isEditForm && editAdditionData) {
            // Set initial form values based on editAdditionData
            setValue("name", editAdditionData.name);
            setValue("category", editAdditionData.category);
            setValue("unit", editAdditionData.unit);
        } else {
            // If not editing, reset the form values
            reset();
        }
    }, [isEditForm, editAdditionData, setValue, reset]);

    // Handle form submission
    const onSubmit = (data: Addition) => {};

    return (
        <div>
            {/* modal setup */}
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isEditForm ? "Edit Additions" : "Add Additions"}</Modal.Title>
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
                            <Form.Label htmlFor="category">Category</Form.Label>
                            <Form.Control
                                type="text"
                                id="category"
                                {...register("category", { required: "Category is required" })}
                                isInvalid={!!errors.category}
                                isValid={!!watch("category") && !errors.category}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.category && errors.category.message}
                            </Form.Control.Feedback>
                        </div>

                        <div className="mb-3">
                            <Form.Label htmlFor="unit">Default/Unit Amount</Form.Label>
                            <Form.Control
                                type="text"
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

export default AddAdditionForm;
