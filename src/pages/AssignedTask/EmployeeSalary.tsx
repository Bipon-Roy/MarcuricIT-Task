import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";
import EmployeeSalaryTable from "../../components/Task/Employee-Salary/EmployeeSalaryTable";

// Type declaration
interface FormData {
    name: string;
    employeeId: string;
    email: string;
    joinDate: string;
    role: string;
    salary: number;
}

const EmployeeSalary = () => {
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
            employeeId: "FT-0001",
            email: "johndoe@example.com",
            joinDate: "1 Jan 2023",
            role: "Android Developer",
            salary: 1000,
        },
        {
            name: "Mary Smith",
            employeeId: "FT-0002",
            email: "marysmith@example.com",
            joinDate: "15 Feb 2022",
            role: "iOS Developer",
            salary: 1200,
        },
        {
            name: "Alex Johnson",
            employeeId: "FT-0003",
            email: "alexjohnson@example.com",
            joinDate: "10 Mar 2021",
            role: "Web Developer",
            salary: 1100,
        },
        {
            name: "Emily Brown",
            employeeId: "FT-0004",
            email: "emilybrown@example.com",
            joinDate: "5 Apr 2020",
            role: "UI/UX Designer",
            salary: 1300,
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
            <EmployeeSalaryTable
                tableRows={tableData}
                onEdit={handleEdit}
                onRemove={handleRemove}
            />

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
                Add Employee
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
                            <Form.Control
                                type="text"
                                id="role"
                                {...register("role", { required: "Role is required" })}
                                isInvalid={!!errors.role}
                                isValid={!!watch("role") && !errors.role}
                            />
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
        </div>
    );
};

export default EmployeeSalary;
