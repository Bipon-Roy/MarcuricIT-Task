import PayslipDocument from "./PayslipDocument";
import { usePDF } from "react-to-pdf";
import Button from "react-bootstrap/Button";

const PayslipInfo = () => {
    const { toPDF, targetRef } = usePDF({ filename: "Payslip.pdf" });

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <div className="mt-2">
                    <h3 className="fw-bold" style={{ marginBottom: "1rem" }}>
                        Payslip
                    </h3>
                    <h4 className="fw-bolder">Dashboard / Payslip</h4>
                </div>

                <Button
                    onClick={() => toPDF()}
                    className="mt-3 text-dark-emphasis bg-white fw-bolder "
                    variant="light"
                >
                    PDF
                </Button>
            </div>
            <div ref={targetRef}>
                <PayslipDocument />
            </div>
        </>
    );
};

export default PayslipInfo;
