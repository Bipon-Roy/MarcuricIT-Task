import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import "./Tab.css";
import Table from "../../Table";
import { payrollDeductions, payrollOvertime, payrollAdditions } from "../data";
import { HiDotsVertical } from "react-icons/hi";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { Button, Dropdown } from "react-bootstrap";
import AddAdditionForm from "./AddAdditionForm";
import AddOvertimeForm from "./AddOvertimeForm";
import AddDeductionsForm from "./AddDeductionsForm";
import { Addition, Deductions, Overtime } from "./type";

//table columns for additions tab
const additionColumns = [
    {
        Header: "Name",
        accessor: "name",
        sort: true,
    },
    {
        Header: "Category",
        accessor: "category",
        sort: true,
    },
    {
        Header: "Default/Unit Amount",
        accessor: "unit",
        sort: false,
    },
    {
        Header: "Action",
        accessor: "action",
        sort: false,
    },
];
//table columns for overtime tab
const overTimeColumns = [
    {
        Header: "Name",
        accessor: "name",
        sort: true,
    },
    {
        Header: "Rate",
        accessor: "rate",
        sort: true,
    },
    {
        Header: "Action",
        accessor: "action",
        sort: false,
    },
];
//table columns for deduction tab
const deductionsColumns = [
    {
        Header: "Name",
        accessor: "name",
        sort: true,
    },
    {
        Header: "Default/Unit Amount",
        accessor: "unitAmount",
        sort: false,
    },
    {
        Header: "Action",
        accessor: "action",
        sort: false,
    },
];

//pagination options for additions tab
const additionPerPageList = [
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
        value: payrollAdditions.length,
    },
];
//pagination options for overtime tab
const overtimePerPageList = [
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
        value: payrollOvertime.length,
    },
];

//pagination options for deduction tab
const deductionPerPageList = [
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
        value: payrollDeductions.length,
    },
];

const PayrollTable = () => {
    const tabs = ["Additions", "Overtime", "Deductions"];
    const initialIndex = tabs.indexOf("Additions"); // the initialIndex assignment
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [showModal, setShowModal] = useState(false); // State to manage modal (Additions) visibility
    const [showOvertimeModal, setShowOvertimeModal] = useState(false); // State to manage modal (Overtime) visibility
    const [showDeductionModal, setShowDeductionModal] = useState(false); // State to manage modal (Deductions) visibility
    const [isEditForm, setIsEditForm] = useState(false);

    const [editAdditionData, setEditAdditionData] = useState<Addition | null>(null); //state to pass addition data
    const [editOvertimeData, setEditOvertimeData] = useState<Overtime | null>(null); //state to pass overtime data
    const [editDeductionData, setEditDeductionData] = useState<Deductions | null>(null); //state to pass deduction data

    // handle edit button modal on additions tab
    const handleEditAdditions = (additionData: Addition) => {
        setIsEditForm(true);
        setShowModal(true);
        setEditAdditionData(additionData);
    };

    // handle add addition button modal on additions tab
    const handleAddAdditions = () => {
        setIsEditForm(false); // Reset isEditForm to false
        setShowModal(true);
        setEditAdditionData(null);
    };

    // handle edit button modal on overtime tab
    const handleEditOvertime = (overtimeData: Overtime) => {
        setIsEditForm(true);
        setShowOvertimeModal(true);
        setEditOvertimeData(overtimeData);
    };

    // handle add addition button modal on overtime tab
    const handleAddOvertime = () => {
        setIsEditForm(false); // Reset isEditForm to false
        setShowOvertimeModal(true);
        setEditOvertimeData(null);
    };

    // handle edit button modal on overtime tab
    const handleEditDeductions = (deductionData: Deductions) => {
        setIsEditForm(true);
        setShowDeductionModal(true);
        setEditDeductionData(deductionData);
    };

    // handle add addition button modal on overtime tab
    const handleAddDeductions = () => {
        setIsEditForm(false); // Reset isEditForm to false
        setShowDeductionModal(true);
        setEditDeductionData(null);
    };

    //generate action button for Additions tab
    const generateActionButton = (data: Addition) => (
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
                    onClick={() => handleEditAdditions(data)}
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

    //generate action button for Overtime tab
    const generateOvertimeActionButton = (data: Overtime) => (
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
                    onClick={() => handleEditOvertime(data)}
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

    //generate action button for Deductions tab
    const generateDeductionsActionButton = (data: Deductions) => (
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
                    onClick={() => handleEditDeductions(data)}
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

    // Modify the Additions data to include payslip and action property
    const payrollAdditionsWithActions = payrollAdditions.map((items) => ({
        ...items,
        action: generateActionButton(items),
    }));
    // Modify the employee data to include payslip and action property
    const payrollOvertimeWithActions = payrollOvertime.map((items) => ({
        ...items,
        action: generateOvertimeActionButton(items),
    }));
    // Modify the employee data to include payslip and action property
    const payrollDeductionsWithActions = payrollDeductions.map((items) => ({
        ...items,
        action: generateDeductionsActionButton(items),
    }));
    return (
        <>
            <div className="mt-2">
                <h3 className="fw-bold" style={{ marginBottom: "1rem" }}>
                    Payroll Items
                </h3>
                <h4 className="fw-bolder">Dashboard / Payroll Items</h4>
            </div>

            {/* react tab setup */}
            <div className="mt-6">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Additions</Tab>
                        <Tab>Overtime</Tab>
                        <Tab>Deductions</Tab>
                    </TabList>

                    <div>
                        {/* Additions tab panel */}
                        <TabPanel>
                            <div className="d-flex justify-content-end ">
                                {/* Add Button */}
                                <Button
                                    onClick={handleAddAdditions} // Add onClick event to open modal
                                    variant="warning"
                                    className="fw-bolder d-flex align-items-center gap-1 text-white rounded-pill "
                                >
                                    <FaPlus size={18} />
                                    Add Addition
                                </Button>
                            </div>
                            <Table
                                columns={additionColumns}
                                data={payrollAdditionsWithActions} // Use modified addition data with payslip property
                                pageSize={5}
                                sizePerPageList={additionPerPageList}
                                isSortable={true}
                                pagination={true}
                                isSearchable={true}
                            />
                        </TabPanel>
                    </div>
                    <div>
                        {/* Overtime tab panel */}
                        <TabPanel>
                            <div className="d-flex justify-content-end ">
                                {/* Add Button */}

                                <Button
                                    onClick={handleAddOvertime} // Add onClick event to open modal
                                    variant="warning"
                                    className="fw-bolder d-flex align-items-center gap-1 text-white rounded-pill "
                                >
                                    <FaPlus size={18} />
                                    Add Overtime
                                </Button>
                            </div>
                            <Table
                                columns={overTimeColumns}
                                data={payrollOvertimeWithActions} // Use modified overtime data with payslip property
                                pageSize={5}
                                sizePerPageList={overtimePerPageList}
                                isSortable={true}
                                pagination={true}
                                isSearchable={true}
                            />
                        </TabPanel>
                    </div>
                    <div>
                        <TabPanel>
                            {/* Deductions tab panel */}
                            <div className="d-flex justify-content-end ">
                                {/* Add Button */}
                                <Button
                                    onClick={handleAddDeductions} // Add onClick event to open modal
                                    variant="warning"
                                    className="fw-bolder d-flex align-items-center gap-1 text-white rounded-pill "
                                >
                                    <FaPlus size={18} />
                                    Add Deductions
                                </Button>
                            </div>
                            <Table
                                columns={deductionsColumns}
                                data={payrollDeductionsWithActions} // Use modified deductions data with payslip property
                                pageSize={5}
                                sizePerPageList={deductionPerPageList}
                                isSortable={true}
                                pagination={true}
                                isSearchable={true}
                            />
                        </TabPanel>
                    </div>
                </Tabs>
            </div>

            {/* Render the AddAdditionForm modal component */}
            <AddAdditionForm
                showModal={showModal}
                setShowModal={setShowModal}
                isEditForm={isEditForm}
                editAdditionData={editAdditionData}
            />
            <AddOvertimeForm
                showModal={showOvertimeModal}
                setShowModal={setShowOvertimeModal}
                isEditForm={isEditForm}
                editOvertimeData={editOvertimeData}
            />
            <AddDeductionsForm
                showModal={showDeductionModal}
                setShowModal={setShowDeductionModal}
                isEditForm={isEditForm}
                editDeductionData={editDeductionData}
            />
        </>
    );
};

export default PayrollTable;
