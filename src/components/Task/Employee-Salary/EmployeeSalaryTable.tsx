import Table from "../../Table";
import { employeeSalary } from "../data";
import { Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import AddSalaryForm from "./AddSalaryForm";

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
    const [isEditForm, setIsEditForm] = useState(false);

    const handleModalOpen = () => {
        setIsEditForm(true);
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
                <Dropdown.Item
                    className="d-flex align-items-center gap-1"
                    onClick={handleModalOpen}
                >
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
                    onClick={() => setShowModal(true)}
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
            <AddSalaryForm
                showModal={showModal}
                setShowModal={setShowModal}
                isEditForm={isEditForm}
            />
        </>
    );
};

export default EmployeeSalaryTable;
