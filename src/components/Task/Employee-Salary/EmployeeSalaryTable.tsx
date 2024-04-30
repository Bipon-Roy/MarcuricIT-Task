import Table from "../../Table";
import { employeeSalary } from "../data";
import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

//table columns
const columns = [
    {
        Header: "Name",
        accessor: "name",
        sort: true,
    },
    {
        Header: "Employee ID",
        accessor: "employeeId",
        sort: true,
    },
    {
        Header: "Email",
        accessor: "email",
        sort: false,
    },
    {
        Header: "Join Date",
        accessor: "joinDate",
        sort: true,
    },
    {
        Header: "Role",
        accessor: "role",
        sort: false,
    },
    {
        Header: "Salary",
        accessor: "salary",
        sort: false,
    },
    {
        Header: "Payslip",
        accessor: "payslip", // Accessor should be the property name in the data object
        sort: false,
    },
    {
        Header: "Action",
        accessor: "action", // Accessor should be the property name in the data object
        sort: false,
    },
];
// Type declaration
interface FormData {
    name: string;
    employeeId: string;
    email: string;
    joinDate: string;
    role: string;
    salary: number;
}
// generating navigation link button
const generatePayslipButton = () => (
    <Link to="/task/Payslip">
        <Button
            style={{
                borderRadius: "3rem",
            }}
            variant="warning"
            className="fw-bold"
        >
            Generate Slip
        </Button>
    </Link>
);

//pagination options for additions tab
const sizePerPageList = [
    {
        text: "5",
        value: 5,
    },
    {
        text: "10",
        value: 10,
    },
    {
        text: "25",
        value: 25,
    },
    {
        text: "All",
        value: employeeSalary.length,
    },
];

const EmployeeSalaryTable = () => {
    const [showModal, setShowModal] = useState(false);
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
    } = useForm<FormData>();
    const handleModalOpen = () => {
        setShowModal(true);
    };

    //generate action button
    const generateActionButton = () => (
        <Dropdown>
            <Dropdown.Toggle
                as="a"
                className="cursor-pointer table-action-btn btn btn-light btn-xs"
            >
                <HiDotsVertical size={15} />
            </Dropdown.Toggle>
            <Dropdown.Menu align="start">
                <Dropdown.Item className="d-flex align-items-center gap-1">
                    <MdEdit size={15} />
                    Edit
                </Dropdown.Item>
                <Dropdown.Item className="d-flex align-items-center gap-1">
                    <MdDelete size={15} />
                    Remove
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
    // Modify the employee data to include payslip and action property
    const employeeDataWithPayslip = employeeSalary.map((employee) => ({
        ...employee,
        payslip: generatePayslipButton(),
        action: generateActionButton(),
    }));

    //Handle Modal Open & Close
    const handleModalClose = () => {
        setShowModal(false);
    };

    // Handle form submission
    const onSubmit = (data: FormData) => {};
    return (
        <>
            <div className="mt-2 d-flex align-items-center justify-content-between ">
                <div>
                    <h3 className="fw-bold" style={{ marginBottom: "1rem" }}>
                        Employee Salary
                    </h3>
                    <h4 className="fw-bolder">Dashboard / Salary</h4>
                </div>
                {/* Add Button */}
                <Button
                    variant="warning"
                    className="fw-bold d-flex align-items-center gap-1 text-white rounded-pill "
                    onClick={handleModalOpen}
                >
                    <FaPlus size={18} />
                    Add Employee
                </Button>
            </div>

            <div className="bg-white p-3 rounded-1 shadow-sm mt-4">
                <Table
                    columns={columns}
                    data={employeeDataWithPayslip} // Use modified employee data with payslip property
                    pageSize={5}
                    sizePerPageList={sizePerPageList}
                    isSortable={true}
                    pagination={true}
                    isSearchable={true}
                />
            </div>
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

export default EmployeeSalaryTable;
