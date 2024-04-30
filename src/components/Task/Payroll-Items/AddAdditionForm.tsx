// AddAdditionForm Modal
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

// Type declaration
interface FormData {
    name: string;
    category: string;
    unit: string;
}
interface Props {
    showModal: boolean;
    setShowModal: Function;
}
const AddAdditionForm = ({ showModal, setShowModal }: Props) => {
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
                    <Modal.Title>Add Deduction</Modal.Title>
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

export default AddAdditionForm;
