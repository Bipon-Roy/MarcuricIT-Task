import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

interface Props {
    showModal: boolean;
    isEditForm: boolean;
    setShowModal: Function;
}
// Type declaration
interface FormData {
    name: string;
    employeeId: string;
    email: string;
    joinDate: string;
    role: string;
    salary: number;
}
const AddSalaryForm = ({ showModal, setShowModal, isEditForm }: Props) => {
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
        <>
            {/* modal setup */}
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isEditForm ? "Edit Salary" : "Add Salary"}</Modal.Title>
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
                            <Form.Label htmlFor="employeeId">Employee ID</Form.Label>
                            <Form.Control
                                type="text"
                                id="employeeId"
                                {...register("employeeId", { required: "EmployeeID is required" })}
                                isInvalid={!!errors.employeeId}
                                isValid={!!watch("employeeId") && !errors.employeeId}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.employeeId && errors.employeeId.message}
                            </Form.Control.Feedback>
                        </div>

                        <div className="mb-3">
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control
                                type="email"
                                id="email"
                                {...register("email", { required: "Email is required" })}
                                isInvalid={!!errors.email}
                                isValid={!!watch("email") && !errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email && errors.email.message}
                            </Form.Control.Feedback>
                        </div>

                        <div className="mb-3">
                            <Form.Label htmlFor="joinDate">Join Date</Form.Label>
                            <Form.Control
                                type="date"
                                id="joinDate"
                                {...register("joinDate", { required: "Join Date is required" })}
                                isInvalid={!!errors.joinDate}
                                isValid={!!watch("joinDate") && !errors.joinDate}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.joinDate && errors.joinDate.message}
                            </Form.Control.Feedback>
                        </div>

                        <div className="mb-3">
                            <Form.Label htmlFor="role">Role</Form.Label>
                            <Form.Select
                                id="role"
                                {...register("role", { required: "Role is required" })}
                                isInvalid={!!errors.role}
                                isValid={!!watch("role") && !errors.role}
                            >
                                <option value="">Select Role</option>
                                <option value="Software Engineer">Software Engineer</option>
                                <option value="Software Tester">Software Tester</option>
                                <option value="Frontend Developer">Frontend Developer</option>
                                <option value="UI/UX Developer">UI/UX Developer</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {errors.role && errors.role.message}
                            </Form.Control.Feedback>
                        </div>

                        <div className="mb-3">
                            <Form.Label htmlFor="salary">Salary</Form.Label>
                            <Form.Control
                                type="number"
                                id="salary"
                                {...register("salary", { required: "Salary is required" })}
                                isInvalid={!!errors.salary}
                                isValid={!!watch("salary") && !errors.salary}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.salary && errors.salary.message}
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
        </>
    );
};

export default AddSalaryForm;
