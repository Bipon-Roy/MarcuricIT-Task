import logo from "../../../assets/images/logo-dark.png";
import "./payslip.css";
const earningsData = [
    {
        title: "Basic Salary",
        cost: 6500,
    },
    {
        title: "House Rent Allowance (H.R.A.)",
        cost: 50,
    },
    {
        title: "Conveyance",
        cost: 50,
    },
    {
        title: "Other Allowance",
        cost: 50,
    },
    {
        title: "Total Earnings",
        cost: 6650,
    },
];
const deductionsData = [
    {
        title: "Tax Deducted at Source (T.D.S.)",
        cost: 0,
    },
    {
        title: "Provident Fund",
        cost: 0,
    },
    {
        title: "ESI",
        cost: 0,
    },
    {
        title: "Loan",
        cost: 300,
    },
    {
        title: "Total Deductions",
        cost: 59698,
    },
];

const PayslipDocument = () => {
    return (
        <>
            <div className="bg-white p-2 p-md-4 mt-3 ">
                <h4 className="text-decoration-underline text-center">
                    PAYSLIP FOR THE MONTH OF FEB 2024
                </h4>
                <div className="d-flex justify-content-between align-items-center mt-2">
                    <div>
                        <img className="icon-image" src={logo} alt="Logo" />
                    </div>
                    <div>
                        <h3 className="fs-4 fs-lg-3 text-end">PAYSLIP #49029</h3>
                        <h5 className="fw-bolder fs-6 fs-lg-5">Salary Month: March, 2024</h5>
                    </div>
                </div>

                <article className="fs-5 mt-3 fw-medium">
                    <p className="mb-0">Technologies</p>
                    <p className="mb-0">3864 Quiet Valley Lane,</p>
                    <p className="mb-0">Sherman Oaks, CA, 91403</p>
                </article>

                <article className="fs-5 mt-3 fw-medium">
                    <p className="mb-0 fw-bold">John Doe</p>
                    <p className="mb-0">Web Designer</p>
                    <p className="mb-0">Employee ID: FT-0009</p>
                    <p className="mb-0">Joining Date: 1 Jan 2023</p>
                </article>

                <div className="container-fluid p-0 m-0">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="mb-1 fw-bolder">Earnings</h3>
                            {earningsData.map((d, idx) => (
                                <article
                                    key={idx}
                                    style={{
                                        padding: "0.5rem 0.8rem",
                                    }}
                                    className="fw-bold d-flex justify-content-between align-items-center border border-1"
                                >
                                    <p className="mb-0">{d.title}</p>
                                    <p className="mb-0 ">${d.cost}</p>
                                </article>
                            ))}
                        </div>
                        <div className="col-md-6 ">
                            <h3 className="mb-1 fw-bolder">Deductions</h3>
                            {deductionsData.map((d, idx) => (
                                <article
                                    key={idx}
                                    style={{
                                        padding: "0.5rem 0.8rem",
                                    }}
                                    className="fw-bold d-flex justify-content-between align-items-center border border-1"
                                >
                                    <p className="mb-0">{d.title}</p>
                                    <p className="mb-0 ">${d.cost}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>

                <h4 className=" fw-m">
                    <strong>Net Salary: $59698</strong> (Fifty nine thousand six hundred and ninety
                    eight only.)
                </h4>
            </div>
        </>
    );
};

export default PayslipDocument;
