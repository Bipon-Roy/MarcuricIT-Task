import Table from "../../Table";
import { employeeSalary } from "../data";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
];

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

// Modify the employee data to include payslip property
const employeeDataWithPayslip = employeeSalary.map((employee) => ({
    ...employee,
    payslip: generatePayslipButton(), // Add payslip property with generated button JSX
}));

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
    return (
        <>
            <div className="mt-2">
                <h3 className="fw-bold" style={{ marginBottom: "1rem" }}>
                    Employee Salary
                </h3>
                <h4 className="fw-bolder">Dashboard / Salary</h4>
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
        </>
    );
};

export default EmployeeSalaryTable;
