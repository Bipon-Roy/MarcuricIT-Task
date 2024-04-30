import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import "./Tab.css";
import PayrollItems from "./PayrollItems";

const PayrollTab = () => {
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

                    <TabPanel>
                        <PayrollItems /> {/* render same data for every tab */}
                    </TabPanel>
                    <TabPanel>
                        <PayrollItems />
                        {/* render same data for every tab */}
                    </TabPanel>
                    <TabPanel>
                        <PayrollItems />
                        {/* render same data for every tab */}
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default PayrollTab;
