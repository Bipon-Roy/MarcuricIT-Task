interface EmployeeSalary {
    name: string;
    employeeId: string;
    email: string;
    joinDate: string;
    role: string;
    salary: number;
}
interface PayrollDeductions {
    name: string;
    unitAmount: string;
}

interface PayrollOvertime {
    name: string;
    rate: string;
}
interface PayrollAdditions {
    name: string;
    category: string;
    unit: string;
}
const employeeSalary: EmployeeSalary[] = [
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
    {
        name: "John Smith",
        employeeId: "FT-0005",
        email: "johnsmith@example.com",
        joinDate: "20 May 2019",
        role: "Software Engineer",
        salary: 1500,
    },
    {
        name: "Jessica Lee",
        employeeId: "FT-0006",
        email: "jessicalee@example.com",
        joinDate: "25 Jun 2018",
        role: "Data Analyst",
        salary: 1400,
    },
    {
        name: "David Wilson",
        employeeId: "FT-0007",
        email: "davidwilson@example.com",
        joinDate: "30 Jul 2017",
        role: "DevOps Engineer",
        salary: 1600,
    },
    {
        name: "Sophia Miller",
        employeeId: "FT-0008",
        email: "sophiamiller@example.com",
        joinDate: "3 Aug 2016",
        role: "Quality Assurance Engineer",
        salary: 1700,
    },
    {
        name: "Michael Brown",
        employeeId: "FT-0009",
        email: "michaelbrown@example.com",
        joinDate: "8 Sep 2015",
        role: "Project Manager",
        salary: 1800,
    },
    {
        name: "Emma Wilson",
        employeeId: "FT-0010",
        email: "emmawilson@example.com",
        joinDate: "13 Oct 2014",
        role: "Technical Writer",
        salary: 1900,
    },
    {
        name: "William Taylor",
        employeeId: "FT-0011",
        email: "williamtaylor@example.com",
        joinDate: "18 Nov 2013",
        role: "Systems Administrator",
        salary: 2000,
    },
    {
        name: "Olivia Anderson",
        employeeId: "FT-0012",
        email: "oliviaanderson@example.com",
        joinDate: "23 Dec 2012",
        role: "Network Engineer",
        salary: 2100,
    },
    {
        name: "Daniel Martinez",
        employeeId: "FT-0013",
        email: "danielmartinez@example.com",
        joinDate: "28 Jan 2012",
        role: "Database Administrator",
        salary: 2200,
    },
    {
        name: "Ava Hernandez",
        employeeId: "FT-0014",
        email: "avahernandez@example.com",
        joinDate: "2 Feb 2011",
        role: "UI/UX Designer",
        salary: 2300,
    },
    {
        name: "James Gonzalez",
        employeeId: "FT-0015",
        email: "jamesgonzalez@example.com",
        joinDate: "7 Mar 2010",
        role: "Web Developer",
        salary: 2400,
    },
    {
        name: "Sophia Perez",
        employeeId: "FT-0016",
        email: "sophiaperez@example.com",
        joinDate: "12 Apr 2009",
        role: "iOS Developer",
        salary: 2500,
    },
    {
        name: "Liam Torres",
        employeeId: "FT-0017",
        email: "liamtorres@example.com",
        joinDate: "17 May 2008",
        role: "Android Developer",
        salary: 2600,
    },
    {
        name: "Isabella Ramirez",
        employeeId: "FT-0018",
        email: "isabellaramirez@example.com",
        joinDate: "22 Jun 2007",
        role: "Software Engineer",
        salary: 2700,
    },
    {
        name: "Logan Cruz",
        employeeId: "FT-0019",
        email: "logancruz@example.com",
        joinDate: "27 Jul 2006",
        role: "Data Analyst",
        salary: 2800,
    },
    {
        name: "Mia Scott",
        employeeId: "FT-0020",
        email: "miascott@example.com",
        joinDate: "1 Aug 2005",
        role: "DevOps Engineer",
        salary: 2900,
    },
];

const payrollDeductions: PayrollDeductions[] = [
    {
        name: "Absent amount",
        unitAmount: "10",
    },
    {
        name: "Advance",
        unitAmount: "20",
    },
    {
        name: "Unpaid leave",
        unitAmount: "15",
    },
    {
        name: "Overtime Penalty",
        unitAmount: "30",
    },
    {
        name: "Health Insurance Premium",
        unitAmount: "50",
    },
    {
        name: "Income Tax",
        unitAmount: "100",
    },
    {
        name: "401(k) Contribution",
        unitAmount: "75",
    },
    {
        name: "Union Dues",
        unitAmount: "40",
    },
    {
        name: "Parking Fees",
        unitAmount: "20",
    },
    {
        name: "Uniform Expenses",
        unitAmount: "25",
    },
    {
        name: "Professional Development Fund",
        unitAmount: "60",
    },
    {
        name: "Childcare Assistance",
        unitAmount: "35",
    },
    {
        name: "Fitness Center Membership",
        unitAmount: "45",
    },
    {
        name: "Employee Assistance Program",
        unitAmount: "55",
    },
    {
        name: "Retirement Plan Contribution",
        unitAmount: "80",
    },
    {
        name: "Public Transportation Subsidy",
        unitAmount: "30",
    },
    {
        name: "Maternity/Paternity Leave",
        unitAmount: "65",
    },
    {
        name: "Employee Stock Purchase Plan",
        unitAmount: "70",
    },
    {
        name: "Tuition Reimbursement",
        unitAmount: "90",
    },
    {
        name: "Flexible Spending Account",
        unitAmount: "40",
    },
    {
        name: "Meal Allowance",
        unitAmount: "25",
    },
    {
        name: "Language Training Program",
        unitAmount: "55",
    },
    {
        name: "Telecommuting Allowance",
        unitAmount: "30",
    },
];
const payrollOvertime: PayrollOvertime[] = [
    {
        name: "Normal day OT 1.5x",
        rate: "10",
    },
    {
        name: "Public holiday OT 3.0x",
        rate: "20",
    },
    {
        name: "Public holiday OT 3.0x",
        rate: "15",
    },
    {
        name: "Weekend OT 2.0x",
        rate: "12",
    },
    {
        name: "Late Night OT 2.5x",
        rate: "18",
    },
    {
        name: "Emergency OT 2.0x",
        rate: "14",
    },
    {
        name: "Festival OT 2.5x",
        rate: "22",
    },
    {
        name: "Snow Day OT 3.0x",
        rate: "25",
    },
    {
        name: "Storm OT 3.0x",
        rate: "28",
    },
    {
        name: "Disaster Recovery OT 2.0x",
        rate: "16",
    },
    {
        name: "Special Event OT 2.5x",
        rate: "20",
    },
    {
        name: "Weekday OT 1.5x",
        rate: "10",
    },
    {
        name: "Annual Meeting OT 2.0x",
        rate: "15",
    },
    {
        name: "Training Session OT 1.5x",
        rate: "10",
    },
    {
        name: "Project Deadline OT 2.0x",
        rate: "18",
    },
    {
        name: "Team Building OT 1.5x",
        rate: "12",
    },
    {
        name: "Holiday Season OT 2.5x",
        rate: "22",
    },
    {
        name: "Peak Season OT 2.0x",
        rate: "16",
    },
    {
        name: "Tax Season OT 2.5x",
        rate: "20",
    },
    {
        name: "Product Launch OT 3.0x",
        rate: "25",
    },
    {
        name: "System Upgrade OT 2.0x",
        rate: "14",
    },
    {
        name: "Security Breach OT 3.0x",
        rate: "30",
    },
    {
        name: "Client Visit OT 2.5x",
        rate: "18",
    },
];

const payrollAdditions: PayrollAdditions[] = [
    {
        name: "Leave balance amount",
        category: "Monthly remuneration",
        unit: "$5",
    },
    {
        name: "Gratuity",
        category: "Monthly remuneration",
        unit: "$20",
    },
    {
        name: "Arrears of salary",
        category: "Additional remuneration",
        unit: "$8",
    },
    {
        name: "Performance Bonus",
        category: "Additional remuneration",
        unit: "$50",
    },
    {
        name: "Employee Referral Bonus",
        category: "Additional remuneration",
        unit: "$30",
    },
    {
        name: "Sales Commission",
        category: "Additional remuneration",
        unit: "$40",
    },
    {
        name: "Safety Incentive",
        category: "Additional remuneration",
        unit: "$25",
    },
    {
        name: "Attendance Bonus",
        category: "Additional remuneration",
        unit: "$15",
    },
    {
        name: "Wellness Reimbursement",
        category: "Additional remuneration",
        unit: "$35",
    },
    {
        name: "Professional Certification Bonus",
        category: "Additional remuneration",
        unit: "$60",
    },
    {
        name: "Relocation Allowance",
        category: "Additional remuneration",
        unit: "$100",
    },
    {
        name: "Holiday Bonus",
        category: "Additional remuneration",
        unit: "$75",
    },
    {
        name: "Retention Bonus",
        category: "Additional remuneration",
        unit: "$45",
    },
    {
        name: "Profit Sharing",
        category: "Additional remuneration",
        unit: "$80",
    },
    {
        name: "Education Assistance",
        category: "Additional remuneration",
        unit: "$70",
    },
    {
        name: "Remote Work Allowance",
        category: "Additional remuneration",
        unit: "$40",
    },
    {
        name: "Longevity Bonus",
        category: "Additional remuneration",
        unit: "$55",
    },
    {
        name: "Employee of the Month Award",
        category: "Additional remuneration",
        unit: "$20",
    },
    {
        name: "Project Completion Bonus",
        category: "Additional remuneration",
        unit: "$65",
    },
    {
        name: "Customer Satisfaction Bonus",
        category: "Additional remuneration",
        unit: "$30",
    },
    {
        name: "Innovation Award",
        category: "Additional remuneration",
        unit: "$40",
    },
    {
        name: "Tenure Bonus",
        category: "Additional remuneration",
        unit: "$50",
    },
    {
        name: "Team Performance Bonus",
        category: "Additional remuneration",
        unit: "$70",
    },
];
export { employeeSalary, payrollDeductions, payrollOvertime, payrollAdditions };
