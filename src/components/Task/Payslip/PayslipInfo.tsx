import PayslipDocument from "./PayslipDocument";

const PayslipInfo = () => {
    return (
        <>
            <div className="mt-2">
                <h3 className="fw-bold" style={{ marginBottom: "1rem" }}>
                    Payslip
                </h3>
                <h4 className="fw-bolder">Dashboard / Payslip</h4>
            </div>
            <PayslipDocument />
        </>
    );
};

export default PayslipInfo;
