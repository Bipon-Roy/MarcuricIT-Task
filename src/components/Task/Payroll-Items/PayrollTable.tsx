import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import "./Tab.css";
import Table from "../../Table";
import { payrollDeductions, payrollOvertime, payrollAdditions } from "../data";

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
        accessor: "unitAmount",
        sort: false,
    },
];
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
];

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
];

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
    const initialIndex = tabs.indexOf("Additions"); // Corrected the initialIndex assignment
    const [tabIndex, setTabIndex] = useState(initialIndex);

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
                        <TabPanel>
                            <Table
                                columns={additionColumns}
                                data={payrollAdditions} // Use modified employee data with payslip property
                                pageSize={5}
                                sizePerPageList={additionPerPageList}
                                isSortable={true}
                                pagination={true}
                                isSearchable={true}
                            />
                        </TabPanel>
                    </div>
                    <div>
                        <TabPanel>
                            <Table
                                columns={overTimeColumns}
                                data={payrollOvertime} // Use modified employee data with payslip property
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
                            <Table
                                columns={deductionsColumns}
                                data={payrollDeductions} // Use modified employee data with payslip property
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
        </>
    );
};

export default PayrollTable;
